document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".grid-container");
  const glowSegments = document.getElementById("glowSegments");

  const gridSize = 36;
  const glowRadius = 120; // circle radius (px)
  let isPointerInside = false;
  let activeSegments = [];
  let moveTimer = null;
  let lastX = 0,
    lastY = 0;
  const moveThreshold = 1;
  const moveTimeout = 280; // wait longer before fading

  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  function createGlowSegment(isHorizontal, x, y, length, opacity) {
    const seg = document.createElement("div");
    seg.className = `grid-glow-segment ${
      isHorizontal ? "horizontal-segment" : "vertical-segment"
    }`;
    if (isHorizontal) {
      seg.style.left = x + "px";
      seg.style.top = y + "px";
      seg.style.width = length + "px";
    } else {
      seg.style.left = x + "px";
      seg.style.top = y + "px";
      seg.style.height = length + "px";
    }
    seg.style.opacity = opacity; // instant pop-in target
    seg.classList.add("segment-appear"); // triggers quick appear transition
    return seg;
  }

  function clearActiveSegments(immediate = false) {
    activeSegments.forEach((seg) => {
      if (immediate) {
        seg.remove();
      } else {
        seg.classList.remove("segment-appear");
        seg.classList.add("segment-disappear");
        setTimeout(() => seg.remove(), 1300); // match 1.2s fade-out
      }
    });
    activeSegments = [];
  }

  function updateGlowSegments(mouseX, mouseY) {
    clearActiveSegments(true);

    const rect = container.getBoundingClientRect();
    const r = glowRadius;

    // iterate only grid lines that can intersect the circle
    const xStart = Math.max(0, Math.floor((mouseX - r) / gridSize) * gridSize);
    const xEnd = Math.min(
      rect.width,
      Math.ceil((mouseX + r) / gridSize) * gridSize
    );
    const yStart = Math.max(0, Math.floor((mouseY - r) / gridSize) * gridSize);
    const yEnd = Math.min(
      rect.height,
      Math.ceil((mouseY + r) / gridSize) * gridSize
    );

    // Vertical lines: x = k*gridSize, intersect circle -> segment from y0..y1
    for (let x = xStart; x <= xEnd; x += gridSize) {
      const dx = Math.abs(x - mouseX);
      if (dx > r) continue;
      const halfLen = Math.sqrt(r * r - dx * dx);
      let y0 = clamp(mouseY - halfLen, 0, rect.height);
      let y1 = clamp(mouseY + halfLen, 0, rect.height);
      const len = Math.max(0, y1 - y0);
      if (len > 0.5) {
        const falloff = Math.max(0, 1 - dx / r) * 0.6; // stronger center, softer edge
        const seg = createGlowSegment(false, x, y0, len, falloff);
        glowSegments.appendChild(seg);
        activeSegments.push(seg);
      }
    }

    // Horizontal lines: y = k*gridSize, intersect circle -> segment from x0..x1
    for (let y = yStart; y <= yEnd; y += gridSize) {
      const dy = Math.abs(y - mouseY);
      if (dy > r) continue;
      const halfLen = Math.sqrt(r * r - dy * dy);
      let x0 = clamp(mouseX - halfLen, 0, rect.width);
      let x1 = clamp(mouseX + halfLen, 0, rect.width);
      const len = Math.max(0, x1 - x0);
      if (len > 0.5) {
        const falloff = Math.max(0, 1 - dy / r) * 0.6;
        const seg = createGlowSegment(true, x0, y, len, falloff);
        glowSegments.appendChild(seg);
        activeSegments.push(seg);
      }
    }
  }

  function handleMove(px, py) {
    const dx = Math.abs(px - lastX);
    const dy = Math.abs(py - lastY);
    if (dx > moveThreshold || dy > moveThreshold) {
      updateGlowSegments(px, py); // instant pop-in
      lastX = px;
      lastY = py;
    }

    if (moveTimer) clearTimeout(moveTimer);
    moveTimer = setTimeout(() => {
      clearActiveSegments(false); // slow fade-out
    }, moveTimeout);
  }

  // Pointer events (works for mouse + touch)
  container.addEventListener("pointerenter", () => {
    isPointerInside = true;
  });
  container.addEventListener("pointerleave", () => {
    isPointerInside = false;
    clearActiveSegments(true);
    if (moveTimer) {
      clearTimeout(moveTimer);
      moveTimer = null;
    }
  });

  container.addEventListener("pointermove", (e) => {
    if (!isPointerInside) return;
    const rect = container.getBoundingClientRect();
    handleMove(e.clientX - rect.left, e.clientY - rect.top);
  });
});
