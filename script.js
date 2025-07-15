//      </main>
window.addEventListener('load', function () {
  const loading = document.getElementById('loading');
  const preloader = document.getElementById('preloader');
  const content = document.getElementById('main-content');
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  // ローディング（旧）
  if (loading) {
    loading.style.display = 'none';
  }
  

  // プリローダーを非表示にしてメインを表示
  if (preloader && content) {
    preloader.style.transition = 'opacity 5s ease';
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.display = 'none';
      content.style.display = 'block';
    }, 5000); // ← 5秒後に切り替え（調整可）
  }

  // ハンバーガーメニューの切り替え
  if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
      menu.style.display = menu.style.display === "block" ? "none" : "block";
    });
  }
  
});





document.querySelectorAll(".fullscreen-trigger").forEach(img => {
  img.addEventListener("click", () => openImageFullscreen(img.src));
});





  document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      menu.classList.toggle('active');
    });
  });
