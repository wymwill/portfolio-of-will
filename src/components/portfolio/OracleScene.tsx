import * as THREE from "three";
import { gsap } from "@/lib/gsap";

const TRI_FILL = "#4d96ff";
const TRI_STROKE = "rgba(90,115,165,0.35)";
const TRI_GLOW = "rgba(15,28,58,0.35)";
const RING_GOLD = "rgba(212,175,55,0.85)";

const TRI_APEX_Y = 96;
const TRI_BASE_Y = 408;
const TRI_HALF = 150;
const TRI_CX = 256;

const TRI_CIRCUM_Y =
  (TRI_HALF ** 2 + TRI_BASE_Y ** 2 - TRI_APEX_Y ** 2) / (2 * (TRI_BASE_Y - TRI_APEX_Y));
const TRI_CIRCUM_R = Math.abs(TRI_CIRCUM_Y - TRI_APEX_Y);

export type OracleScene = {
  setReading: (text: string) => void;
  consult: (text: string, onSwap: () => void) => Promise<void>;
  setActive: (active: boolean) => void;
  resize: () => void;
  dispose: () => void;
};

export function createOracleScene(
  container: HTMLElement,
  opts: { reducedMotion: boolean; initialText: string },
): OracleScene {
  const { reducedMotion } = opts;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  const canvas = renderer.domElement;
  container.appendChild(canvas);
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.display = "block";
  canvas.style.cursor = "grab";
  canvas.style.touchAction = "pan-y";

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
  camera.position.set(0, 0, 3.7);

  const root = new THREE.Group();
  const shaker = new THREE.Group();
  const wobble = new THREE.Group();
  root.add(shaker);
  shaker.add(wobble);
  scene.add(root);

  scene.add(new THREE.AmbientLight(0x2a2f52, 0.9));
  const key = new THREE.DirectionalLight(0xfff4e0, 2.4);
  key.position.set(-2.5, 3, 2.5);
  scene.add(key);
  const rim = new THREE.PointLight(0x4d96ff, 4, 12);
  rim.position.set(2.6, -1.6, 1.4);
  scene.add(rim);

  const ballGeo = new THREE.SphereGeometry(1, 48, 48);
  const ballMat = new THREE.MeshPhysicalMaterial({
    color: 0x080810,
    roughness: 0.18,
    metalness: 0.05,
    clearcoat: 1,
    clearcoatRoughness: 0.14,
    reflectivity: 0.6,
  });
  const ball = new THREE.Mesh(ballGeo, ballMat);
  wobble.add(ball);

  const dieCanvas = document.createElement("canvas");
  dieCanvas.width = dieCanvas.height = 512;
  const dieCtx = dieCanvas.getContext("2d")!;
  const dieTex = new THREE.CanvasTexture(dieCanvas);
  dieTex.anisotropy = renderer.capabilities.getMaxAnisotropy();
  const dieGeo = new THREE.PlaneGeometry(1.0, 1.0);
  const dieMat = new THREE.MeshBasicMaterial({ map: dieTex, transparent: true });
  const die = new THREE.Mesh(dieGeo, dieMat);
  die.position.set(0, 0, 1.012);
  wobble.add(die);

  let currentText = opts.initialText;
  const drawReading = (text: string) => {
    currentText = text;
    drawDie(dieCtx, text);
    dieTex.needsUpdate = true;
  };
  drawReading(currentText);

  document.fonts?.ready.then(() => {
    drawReading(currentText);
  });

  let curYaw = 0;
  let curPitch = 0;
  let targetYaw = 0;
  let targetPitch = 0;
  let dragging = false;
  let didDrag = false;
  let lastX = 0;
  let lastY = 0;
  let downX = 0;
  let downY = 0;
  const PITCH_LIMIT = 1.3;

  const onPointerDown = (e: PointerEvent) => {
    dragging = true;
    didDrag = false;
    lastX = downX = e.clientX;
    lastY = downY = e.clientY;
    canvas.setPointerCapture(e.pointerId);
    canvas.style.cursor = "grabbing";
    ensureLoop();
  };
  const onPointerMove = (e: PointerEvent) => {
    if (!dragging) return;
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    lastX = e.clientX;
    lastY = e.clientY;
    targetYaw += dx * 0.008;
    targetPitch = clamp(targetPitch + dy * 0.008, -PITCH_LIMIT, PITCH_LIMIT);
    if (Math.abs(e.clientX - downX) + Math.abs(e.clientY - downY) > 6) didDrag = true;
    ensureLoop();
  };
  const onPointerUp = (e: PointerEvent) => {
    dragging = false;
    canvas.style.cursor = "grab";
    if (canvas.hasPointerCapture(e.pointerId)) canvas.releasePointerCapture(e.pointerId);
  };
  const onClickCapture = (e: MouseEvent) => {
    if (didDrag) {
      e.preventDefault();
      e.stopImmediatePropagation();
      didDrag = false;
    }
  };
  canvas.addEventListener("pointerdown", onPointerDown);
  canvas.addEventListener("pointermove", onPointerMove);
  canvas.addEventListener("pointerup", onPointerUp);
  canvas.addEventListener("pointercancel", onPointerUp);
  canvas.addEventListener("click", onClickCapture, true);

  const clock = new THREE.Clock();
  let raf = 0;
  let idleActive = false;
  let docVisible = document.visibilityState !== "hidden";
  let shaking = false;
  let disposed = false;

  const renderOnce = () => renderer.render(scene, camera);

  const frame = () => {
    if (disposed) return;
    const settling = Math.abs(curYaw - targetYaw) + Math.abs(curPitch - targetPitch) > 0.0005;
    const running = (idleActive && docVisible) || shaking || dragging || settling;
    if (!running) {
      raf = 0;
      return;
    }
    const t = clock.getElapsedTime();

    curYaw += (targetYaw - curYaw) * 0.18;
    curPitch += (targetPitch - curPitch) * 0.18;
    root.rotation.y = curYaw;
    root.rotation.x = curPitch;

    if (idleActive && docVisible) {
      wobble.rotation.y = Math.sin(t * 0.5) * 0.05;
      wobble.rotation.x = Math.sin(t * 0.37) * 0.03;
      wobble.position.y = Math.sin(t * 0.6) * 0.015;
    }
    renderOnce();
    raf = requestAnimationFrame(frame);
  };

  const ensureLoop = () => {
    if (!raf && !disposed) raf = requestAnimationFrame(frame);
  };

  const onVisibility = () => {
    docVisible = document.visibilityState !== "hidden";
    if (docVisible && idleActive) ensureLoop();
  };
  document.addEventListener("visibilitychange", onVisibility);

  resize();
  renderOnce();

  function resize() {
    const w = container.clientWidth || 1;
    const h = container.clientHeight || 1;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    if (!raf) renderOnce();
  }

  return {
    setReading(text: string) {
      drawReading(text);
      if (!raf) renderOnce();
    },

    consult(text: string, onSwap: () => void) {
      if (reducedMotion) {
        drawReading(text);
        onSwap();
        targetYaw = 0;
        targetPitch = 0;
        curYaw = 0;
        curPitch = 0;
        root.rotation.set(0, 0, 0);
        if (!raf) renderOnce();
        return Promise.resolve();
      }
      return new Promise<void>((resolve) => {
        shaking = true;
        targetYaw = 0;
        targetPitch = 0;
        ensureLoop();
        const done = () => {
          shaking = false;
          gsap.set(shaker.rotation, { x: 0, y: 0, z: 0 });
          gsap.set(shaker.position, { x: 0, y: 0 });
          resolve();
        };
        const tl = gsap.timeline({ onComplete: done });

        tl.to(dieMat, { opacity: 0, duration: 0.14, ease: "power2.in" }, 0);
        tl.to(die.position, { y: -0.05, duration: 0.14, ease: "power2.in" }, 0);

        const jolts = 9;
        for (let i = 0; i < jolts; i++) {
          const at = i === 0 ? 0 : ">";
          tl.to(
            shaker.rotation,
            {
              x: gsap.utils.random(-0.045, 0.045),
              y: gsap.utils.random(-0.045, 0.045),
              z: gsap.utils.random(-0.05, 0.05),
              duration: 0.055,
              ease: "power1.inOut",
            },
            at,
          );
          tl.to(
            shaker.position,
            {
              x: gsap.utils.random(-0.02, 0.02),
              y: gsap.utils.random(-0.018, 0.018),
              duration: 0.055,
              ease: "power1.inOut",
            },
            "<",
          );
        }

        tl.add(() => {
          drawReading(text);
          onSwap();
        });

        tl.to(shaker.rotation, { x: 0, y: 0, z: 0, duration: 0.35, ease: "elastic.out(1, 0.5)" });
        tl.to(shaker.position, { x: 0, y: 0, duration: 0.3, ease: "power2.out" }, "<");
        tl.fromTo(die.position, { y: 0.06 }, { y: 0, duration: 0.5, ease: "back.out(1.7)" }, "<");
        tl.to(dieMat, { opacity: 1, duration: 0.4, ease: "power2.out" }, "<");
      });
    },

    setActive(active: boolean) {
      idleActive = active && !reducedMotion;
      if (idleActive) ensureLoop();
      else if (!raf) renderOnce();
    },

    resize,

    dispose() {
      disposed = true;
      if (raf) cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVisibility);
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointercancel", onPointerUp);
      canvas.removeEventListener("click", onClickCapture, true);
      gsap.killTweensOf([shaker.rotation, shaker.position, die.position, dieMat]);
      ballGeo.dispose();
      ballMat.dispose();
      dieGeo.dispose();
      dieMat.dispose();
      dieTex.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      canvas.remove();
    },
  };
}

function clamp(v: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, v));
}

function triHalfWidthAt(y: number) {
  const t = clamp((y - TRI_APEX_Y) / (TRI_BASE_Y - TRI_APEX_Y), 0, 1);
  return t * TRI_HALF;
}

function drawDie(ctx: CanvasRenderingContext2D, text: string) {
  const S = 512;
  ctx.clearRect(0, 0, S, S);

  ctx.lineWidth = 4;
  ctx.strokeStyle = RING_GOLD;
  ctx.beginPath();
  ctx.arc(TRI_CX, TRI_CIRCUM_Y, TRI_CIRCUM_R, 0, Math.PI * 2);
  ctx.stroke();

  ctx.save();
  ctx.shadowColor = TRI_GLOW;
  ctx.shadowBlur = 14;
  ctx.fillStyle = TRI_FILL;
  ctx.beginPath();
  ctx.moveTo(TRI_CX, TRI_APEX_Y);
  ctx.lineTo(TRI_CX + TRI_HALF, TRI_BASE_Y);
  ctx.lineTo(TRI_CX - TRI_HALF, TRI_BASE_Y);
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  ctx.lineWidth = 3;
  ctx.strokeStyle = TRI_STROKE;
  ctx.stroke();

  const PAD = 18;
  const centerY = 321;
  const availAt = (y: number) => Math.max(0, 2 * triHalfWidthAt(y) - 2 * PAD);

  let best: { font: number; lines: string[]; lineH: number; top: number } | null = null;
  for (let font = 52; font >= 20; font -= 2) {
    ctx.font = `600 ${font}px 'Cinzel', Georgia, serif`;
    const lineH = font * 1.16;
    const lines = wrap(ctx, text, availAt(centerY));
    const blockH = lines.length * lineH;
    let top = centerY - blockH / 2 + lineH / 2;
    const overBottom = top + (lines.length - 1) * lineH - (TRI_BASE_Y - PAD - lineH * 0.15);
    if (overBottom > 0) top -= overBottom;

    const fits = lines.every((line, i) => {
      const y = top + i * lineH;
      return ctx.measureText(line).width <= availAt(y) && y - lineH * 0.5 >= TRI_APEX_Y + 6;
    });
    if (fits) {
      best = { font, lines, lineH, top };
      break;
    }
  }
  if (!best) {
    ctx.font = `600 20px 'Cinzel', Georgia, serif`;
    best = { font: 20, lines: wrap(ctx, text, availAt(centerY)), lineH: 23, top: centerY };
  }

  ctx.font = `600 ${best.font}px 'Cinzel', Georgia, serif`;
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.shadowColor = "rgba(15,31,71,0.9)";
  ctx.shadowBlur = 10;
  best.lines.forEach((line, i) => ctx.fillText(line, TRI_CX, best!.top + i * best!.lineH));
}

function wrap(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let line = "";
  for (const w of words) {
    const test = line ? `${line} ${w}` : w;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = w;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  return lines;
}
