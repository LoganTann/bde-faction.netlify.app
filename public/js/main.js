function logo_accueil_script() {
    // DECLARATIONS --------------------------------------------------------- //

    /* positionNextStep est partagé entre les deux events : il est initialisé
       dans onResize plutôt que onScroll pour des raisons de performance */
    let SHARED = {
      timer_resize: null,
      positionNextStep: 300
    };

    const logo_container = document.getElementById("logo_accueil");
    const logo_png = document.querySelector("#logo_accueil>img");

    // requestAnimationFrame : __évite__ de call + de fois que les FPS actuel
    const onScroll = function(e) {
      window.requestAnimationFrame(function(){
        const container_rect = logo_container.getBoundingClientRect();
        if ((container_rect.top + container_rect.height) < SHARED.positionNextStep) {
          logo_png.classList.add("animStep2");
        } else if (logo_png.classList.contains("animStep2")){
          logo_png.classList.remove("animStep2");
        }
      });
    }

    /* timeout : __update après__ que l'utilisateur ait fini de resize (dans une
       limite de temps raisonnable) */
    const onResize = function() {
      clearTimeout(SHARED.timer_resize);
      SHARED.timer_resize = setTimeout(function(){
        // constantes 20% et 58% -> cf. CSS
        const loto_flagPos = logo_png.getBoundingClientRect().height * 0.58;
        const logo_top = logo_container.getBoundingClientRect().height * 0.2;
        SHARED.positionNextStep = Math.floor(logo_top + loto_flagPos);

        onScroll();
      }, 75);
    };


    // CODE EFFECTIF -------------------------------------------------------- //
    logo_png.addEventListener("load", function(){
      window.addEventListener('resize', onResize);
      window.addEventListener("scroll", onScroll);
      onResize();
    });
}

function mainPageScript() {
    const photosMembres = document.querySelectorAll('#membres .avatar img');
    const materialBoxInstance = M.Materialbox.init(photosMembres, {});
    logo_accueil_script();
}


// /index.html
document.addEventListener("DOMContentLoaded", mainPageScript);
