+++
title = "The Black Hole Office"
date = 2025-07-17
weight = 1
+++

## ✨ Art Gallery

---

<div class="gallery-ordered">

<div class="item">
  <a href="/images/megan_figure.png">
    <img class="thumb" src="/images/megan_figure.png" alt="Megan Figure">
  </a>
</div>

<div class="item">
  <a href="/images/Lorri_Fig_BHO.png">
    <img class="thumb" src="/images/Lorri_Fig_BHO.png" alt="Lorri Figure">
  </a>
</div>

<div class="item">
  <a href="/images/Luka_fig_BHO.png">
    <img class="thumb" src="/images/Luka_fig_BHO.png" alt="Luka Figure">
  </a>
</div>

<div class="item">
  <a href="/images/BHO_Charater1_Fig.png">
    <img class="thumb" src="/images/BHO_Charater1_Fig.png" alt="TBA Figure">
  </a>
</div>

<div class="item">
  <a href="/images/BHO_Charater2_Fig.png">
    <img class="thumb" src="/images/BHO_Charater2_Fig.png" alt="TBA Figure">
  </a>
</div>

<div class="item">
  <a href="/images/manga1.png">
    <img class="thumb" src="/images/manga1.png" alt="Manga 1">
  </a>
</div>

<div class="item">
  <a href="/images/manga2.png">
    <img class="thumb" src="/images/manga2.png" alt="Manga 2">
  </a>
</div>

<div class="item">
  <a href="/images/manga3.png">
    <img class="thumb" src="/images/manga3.png" alt="Manga 3">
  </a>
</div>

<div class="item">
  <a href="/images/manga4.png">
    <img class="thumb" src="/images/manga4.png" alt="Manga 4">
  </a>
</div>

<div class="item">
  <a href="/images/BHO_comic1.png">
    <img class="thumb" src="/images/BHO_comic1.png" alt="Comic 1" title="Comic 1">
  </a>
</div>

<div class="item">
  <a href="/images/BHO_comic2.png">
    <img class="thumb" src="/images/BHO_comic2.png" alt="Comic 2" title="Comic 2">
  </a>
</div>

<div class="item">
  <a href="/images/BHO_comic3.png">
    <img class="thumb" src="/images/BHO_comic3.png" alt="Comic 3" title="Comic 3">
  </a>
</div>

<div class="item">
  <a href="/images/BHO_comic4.png">
    <img class="thumb" src="/images/BHO_comic4.png" alt="Comic 4" title="Comic 4">
  </a>
</div>

<div class="item">
  <a href="/images/BHO_comic5.png">
    <img class="thumb" src="/images/BHO_comic5.png" alt="Comic 5" title="Comic 5">
  </a>
</div>

<div class="item">
  <a href="/images/BHO_comic6.png">
    <img class="thumb" src="/images/BHO_comic6.png" alt="Comic 6" title="Comic 6">
  </a>
</div>

<div class="item">
  <a href="/images/BHO_comic7.png">
    <img class="thumb" src="/images/BHO_comic7.png" alt="Comic 7" title="Comic 7">
  </a>
</div>

</div>


<script>
(function(){
  // 1) 收集当前页画廊里的所有链接（顺序=你写的顺序）
  const container = document.currentScript.closest('main')?.querySelector('.gallery-ordered');
  if (!container) return;
  const links = Array.from(container.querySelectorAll('a[href]'));

  // 2) 创建灯箱 DOM
  const backdrop = document.createElement('div');
  backdrop.className = 'lb-backdrop';
  backdrop.innerHTML = `
    <button class="lb-close" aria-label="Close">✕</button>
    <button class="lb-prev" aria-label="Previous">‹</button>
    <figure class="lb-figure">
      <img class="lb-img" alt="">
      <figcaption class="lb-caption"></figcaption>
    </figure>
    <button class="lb-next" aria-label="Next">›</button>
  `;
  document.body.appendChild(backdrop);

  const img = backdrop.querySelector('.lb-img');
  const caption = backdrop.querySelector('.lb-caption');
  const btnClose = backdrop.querySelector('.lb-close');
  const btnPrev = backdrop.querySelector('.lb-prev');
  const btnNext = backdrop.querySelector('.lb-next');

  let idx = -1;

  function openAt(i){
    idx = (i + links.length) % links.length;
    const a = links[idx];
    const href = a.getAttribute('href');
    const alt = a.querySelector('img')?.getAttribute('alt') || '';
    const title = a.querySelector('img')?.getAttribute('title') || a.getAttribute('title') || '';
    img.src = href;
    img.alt = alt;
    caption.textContent = title || alt || '';
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close(){
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
    img.src = '';
  }

  function prev(){ openAt(idx - 1); }
  function next(){ openAt(idx + 1); }

  // 3) 绑定：点击缩略图→打开灯箱
  links.forEach((a, i) => {
    a.addEventListener('click', (e) => {
      // 仅拦截图片链接（保持对其他链接的正常跳转）
      if (a.querySelector('img')) {
        e.preventDefault();
        openAt(i);
      }
    });
  });

  // 4) 交互：背景/按钮/键盘
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) close();
  });
  btnClose.addEventListener('click', close);
  btnPrev.addEventListener('click', prev);
  btnNext.addEventListener('click', next);

  document.addEventListener('keydown', (e) => {
    if (!backdrop.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') prev();
    else if (e.key === 'ArrowRight') next();
  }, {passive: true});
})();
</script>






