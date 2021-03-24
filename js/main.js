document.addEventListener("DOMContentLoaded", function() {

  // positionNextStep est partagé entre les deux events : il est initialisé
  // dans onResize plutôt que onScroll pour des raisons de performance
  let GLOBAL = {
    timer_resize: null,
    positionNextStep: 300
  };

  const logo_png = document.getElementById("logo_png");
  const page_content = document.getElementById("page_content");

  const onResize = function() {
    clearTimeout(GLOBAL.timer_resize);
    GLOBAL.timer_resize = setTimeout(function(){
      const logo_rect = logo_png.getBoundingClientRect();
      GLOBAL.positionNextStep = Math.floor(logo_rect.top + (logo_rect.height * 0.58));
    }, 75);
  };
  window.addEventListener('resize', onResize);
  onResize();

  // onScroll
  window.addEventListener("scroll", function(e) {
    // inutile d'exécuter plus de fois que le nombre de FPS actuel
    window.requestAnimationFrame(function(){
      if (page_content.getBoundingClientRect().top < GLOBAL.positionNextStep) {
        logo_png.classList.add("animStep2");
      } else if (logo_png.classList.contains("animStep2")){
        logo_png.classList.remove("animStep2");
      }
    });
  });
});
