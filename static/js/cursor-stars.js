(function () {
  // 只在支持 hover 的设备启用，触屏设备自动禁用
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const layer = document.createElement('div');
  layer.className = 'cursor-stars';
  const star = document.createElement('div');
  star.className = 'star';
  layer.appendChild(star);
  document.body.appendChild(layer);

  let x = 0, y = 0, ticking = false, lastEmit = 0;

  function move() {
    star.style.left = x + 'px';
    star.style.top = y + 'px';
    ticking = false;
  }

  window.addEventListener('mousemove', (e) => {
    x = e.clientX;
    y = e.clientY;

    if (!ticking) {
      requestAnimationFrame(move);
      ticking = true;
    }

    const now = performance.now();
    if (now - lastEmit > 25) {  // 控制火花频率（毫秒）
      const s = document.createElement('div');
      s.className = 'spark';
      s.style.left = x + 'px';
      s.style.top = y + 'px';
      layer.appendChild(s);
      setTimeout(() => s.remove(), 800); // 火花自然消失
      lastEmit = now;
    }
  }, { passive: true });

  // 当切换标签页或窗口失焦时，暂停火花生成
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) lastEmit = performance.now();
  });
})();