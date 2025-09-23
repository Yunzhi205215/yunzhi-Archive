+++
title = "Doodle"
weight = 3
+++

<p style="text-indent:0; margin-left:0;"> 
这里是一些乱七八糟的小涂鸦和练习～  
👩‍🎨 有各种角色和同人的速写 ✨  
🎭 也有随手画的灵感片段 💡 
</p> 

---

<div class="gallery-ordered">

  <div class="item">
    <a href="/images/doodle1.png">
      <img class="thumb" loading="lazy"
           src="/images/doodle1.png"
           alt="doodle1"
           title="doodle1">
    </a>
  </div>

  <div class="item">
    <a href="/images/doodle8.png">
      <img class="thumb" loading="lazy"
           src="/images/doodle8.png"
           alt="doodle8"
           title="doodle8">
    </a>
  </div>

  <div class="item">
    <a href="/images/doodle2.png">
      <img class="thumb" loading="lazy"
           src="/images/doodle2.png"
           alt="doodle2"
           title="doodle2">
    </a>
  </div>

  <div class="item">
    <a href="/images/doodle3.png">
      <img class="thumb" loading="lazy"
           src="/images/doodle3.png"
           alt="doodle3"
           title="doodle3">
    </a>
  </div>

  <div class="item">
    <a href="/images/doodle4.png">
      <img class="thumb" loading="lazy"
           src="/images/doodle4.png"
           alt="doodle4"
           title="doodle4">
    </a>
  </div>

  <div class="item">
    <a href="/images/doodle5.png">
      <img class="thumb" loading="lazy"
           src="/images/doodle5.png"
           alt="doodle5"
           title="doodle5">
    </a>
  </div>

  <div class="item">
    <a href="/images/doodle6.png">
      <img class="thumb" loading="lazy"
           src="/images/doodle6.png"
           alt="doodle6"
           title="doodle6">
    </a>
  </div>

  <div class="item">
    <a href="/images/doodle7.png">
      <img class="thumb" loading="lazy"
           src="/images/doodle7.png"
           alt="doodle7"
           title="doodle7">
    </a>
  </div>

  <div class="item">
    <a href="/images/doodle9.png">
      <img class="thumb" loading="lazy"
           src="/images/doodle9.png"
           alt="doodle9"
           title="doodle9">
    </a>
  </div>

  <div class="item">
    <a href="/images/doodle10.png">
      <img class="thumb" loading="lazy"
           src="/images/doodle10.png"
           alt="doodle10"
           title="doodle10">
    </a>
  </div>

  <div class="item">
    <a href="/images/doodle11.png">
      <img class="thumb" loading="lazy"
           src="/images/doodle11.png"
           alt="doodle11"
           title="doodle11">
    </a>
  </div>

  <div class="item">
    <a href="/images/doodle12.png">
      <img class="thumb" loading="lazy"
           src="/images/doodle12.png"
           alt="doodle12"
           title="doodle12">
    </a>
  </div>

  <div class="item">
    <a href="/images/doodle13.png">
      <img class="thumb" loading="lazy"
           src="/images/doodle13.png"
           alt="doodle13"
           title="doodle13">
    </a>
  </div>

  <div class="item">
    <a href="/images/doodle14.png">
      <img class="thumb" loading="lazy"
           src="/images/doodle14.png"
           alt="doodle14"
           title="doodle14">
    </a>
  </div>

  <div class="item">
    <a href="/images/doodle15.png">
      <img class="thumb" loading="lazy"
           src="/images/doodle15.png"
           alt="doodle15"
           title="doodle15">
    </a>
  </div>

  <div class="item">
    <a href="/images/doodle16.png">
      <img class="thumb" loading="lazy"
           src="/images/doodle16.png"
           alt="doodle16"
           title="doodle16">
    </a>
  </div>

  <div class="item">
    <a href="/images/doodle17.png">
      <img class="thumb" loading="lazy"
           src="/images/doodle17.png"
           alt="doodle17"
           title="doodle17">
    </a>
  </div>

  <div class="item">
    <a href="/images/doodle18.png">
      <img class="thumb" loading="lazy"
           src="/images/doodle18.png"
           alt="doodle18"
           title="doodle18">
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

