+++
title = "To Serein Manga"
weight = 3
+++

<p style="text-indent:0; margin-left:0;"><em>
✨ A list of To Serein short manga and more! Some arts are related to main stories, some are random, washed-up brain trash.</em>
</p>

---

<div class="gallery-ordered">

 <div class="item">
    <a href="/images/Manga6-1.png">
      <img class="thumb" loading="lazy"
           src="/images/Manga6-1.png"
           alt="Manga6-1"
           title="Manga6-1">
    </a>
  </div>

 <div class="item">
    <a href="/images/Manga6-2.png">
      <img class="thumb" loading="lazy"
           src="/images/Manga6-2.png"
           alt="Manga6-2"
           title="Manga6-2">
    </a>
  </div>

 <div class="item">
    <a href="/images/Manga6-3.png">
      <img class="thumb" loading="lazy"
           src="/images/Manga6-3.png"
           alt="Manga6-3"
           title="Manga6-3">
    </a>
  </div>

 <div class="item">
    <a href="/images/Manga6-4.png">
      <img class="thumb" loading="lazy"
           src="/images/Manga6-4.png"
           alt="Manga6-4"
           title="Manga6-4">
    </a>
  </div>

 <div class="item">
    <a href="/images/Manga6-5.png">
      <img class="thumb" loading="lazy"
           src="/images/Manga6-5.png"
           alt="Manga6-5"
           title="Manga6-5">
    </a>
  </div>

 <div class="item">
    <a href="/images/Manga6-6.png">
      <img class="thumb" loading="lazy"
           src="/images/Manga6-6.png"
           alt="Manga6-6"
           title="Manga6-6">
    </a>
  </div>

 <div class="item">
    <a href="/images/Manga1-1.png">
      <img class="thumb" loading="lazy"
           src="/images/Manga1-1.png"
           alt="Manga1-1"
           title="Manga1-1">
    </a>
  </div>

  <div class="item">
    <a href="/images/Manga1-2.png">
      <img class="thumb" loading="lazy"
           src="/images/Manga1-2.png"
           alt="Manga1-2"
           title="Manga1-2">
    </a>
  </div>

  <div class="item">
    <a href="/images/Manga2-1.png">
      <img class="thumb" loading="lazy"
           src="/images/Manga2-1.png"
           alt="Manga2-1"
           title="Manga2-1">
    </a>
  </div>

  <div class="item">
    <a href="/images/Manga3-1.png">
      <img class="thumb" loading="lazy"
           src="/images/Manga3-1.png"
           alt="Manga3-1"
           title="Manga3-1">
    </a>
  </div>

  <div class="item">
    <a href="/images/Manga4-1.png">
      <img class="thumb" loading="lazy"
           src="/images/Manga4-1.png"
           alt="Manga4-1"
           title="Manga4-1">
    </a>
  </div>

  <div class="item">
    <a href="/images/Manga4-2.png">
      <img class="thumb" loading="lazy"
           src="/images/Manga4-2.png"
           alt="Manga4-2"
           title="Manga4-2">
    </a>
  </div>

 <div class="item">
    <a href="/images/Manga5-1.png">
      <img class="thumb" loading="lazy"
           src="/images/Manga5-1.png"
           alt="Manga5-1"
           title="Manga5-1">
    </a>
  </div>

  <div class="item">
    <a href="/images/Manga5-2.png">
      <img class="thumb" loading="lazy"
           src="/images/Manga5-2.png"
           alt="Manga5-2"
           title="Manga5-2">
    </a>
  </div>

  <div class="item">
    <a href="/images/Manga5-3.png">
      <img class="thumb" loading="lazy"
           src="/images/Manga5-3.png"
           alt="Manga5-3"
           title="Manga5-3">
    </a>
  </div>

  <div class="item">
    <a href="/images/Manga5-4.png">
      <img class="thumb" loading="lazy"
           src="/images/Manga5-4.png"
           alt="Manga5-4"
           title="Manga5-4">
    </a>
  </div>

  <div class="item">
    <a href="/images/Manga5-5.png">
      <img class="thumb" loading="lazy"
           src="/images/Manga5-5.png"
           alt="Manga5-5"
           title="Manga5-5">
    </a>
  </div>

  <div class="item">
    <a href="/images/Manga5-6.png">
      <img class="thumb" loading="lazy"
           src="/images/Manga5-6.png"
           alt="Manga5-6"
           title="Manga5-6">
    </a>
  </div>

  <div class="item">
    <a href="/images/Manga5-7.png">
      <img class="thumb" loading="lazy"
           src="/images/Manga5-7.png"
           alt="Manga5-7"
           title="Manga5-7">
    </a>
  </div>

  <div class="item">
    <a href="/images/Manga5-8.png">
      <img class="thumb" loading="lazy"
           src="/images/Manga5-8.png"
           alt="Manga5-8"
           title="Manga5-8">
    </a>
  </div>


</div>


<script>
  (function(){
    const container = document.currentScript.closest('main')?.querySelector('.gallery-ordered');
    if (!container) return;
    const links = Array.from(container.querySelectorAll('a[href]'));
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
      img.src = a.getAttribute('href');
      const alt = a.querySelector('img')?.alt || '';
      const title = a.querySelector('img')?.title || a.title || '';
      caption.textContent = title || alt || '';
      backdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function close(){ backdrop.classList.remove('open'); document.body.style.overflow = ''; img.src = ''; }
    function prev(){ openAt(idx - 1); }
    function next(){ openAt(idx + 1); }

    links.forEach((a, i) => {
      a.addEventListener('click', e => {
        if (a.querySelector('img')) { e.preventDefault(); openAt(i); }
      });
    });
    backdrop.addEventListener('click', e => { if (e.target === backdrop) close(); });
    btnClose.addEventListener('click', close);
    btnPrev.addEventListener('click', prev);
    btnNext.addEventListener('click', next);
    document.addEventListener('keydown', e => {
      if (!backdrop.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    });
  })();
</script>
