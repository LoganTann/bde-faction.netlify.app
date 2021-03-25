<template>
  <header id="homepage-header" class="center">
    <img class="" src="../assets/logo.png" alt="Logo BDE Faction - IUT de Paris 2021-2022">
  </header>
</template>

<script>
export default {
  name: 'homepage-header',
  data() {
    return {

    };
  },
  mounted() {
    // TODO: Portage vers vue avec des :bind etc.
    // DECLARATIONS --------------------------------------------------------- //

    /* positionNextStep est partagé entre les deux events : il est initialisé
       dans onResize plutôt que onScroll pour des raisons de performance */
    let SHARED = {
      timer_resize: null,
      positionNextStep: 300
    };

    const logo_container = document.getElementById("homepage-header");
    const logo_png = document.querySelector("#homepage-header>img");

    // requestAnimationFrame : __évite__ de call + de fois que les FPS actuel
    const onScroll = function() {
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
}
</script>

<style scoped>
/* TODO: SCSS */
#homepage-header {
  height: 90vh;
  background-image: url("../assets/trees.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;

  position: relative;
}
#homepage-header>img {
  position: fixed;
  top: 20%;
  max-width: 80vw;
  max-height: 50vh;

  /*centre horizontal comme la position fixed est cheloue*/
    transform: translateX(-50%);
}
#homepage-header>img.animStep2 {
  position: relative;
  top: 100%;
  transform: translateY(-58%); /*barre se trouve à 58% du logo*/
}
</style>
