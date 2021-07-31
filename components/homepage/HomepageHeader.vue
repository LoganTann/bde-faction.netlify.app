<template>
  <header id="homepage-header" class="center">
    <img :class="{'animStep2': animStep2}" src="@/assets/logo.webp" alt="Logo BDE Faction - IUT de Paris 2021-2022">
  </header>
</template>

<script>
export default {
  name: 'homepage-header',
  data() {
    return {
      timer_resize: null,
      positionNextStep: 300,
      logo_container: null,
      logo_png: null,
      animStep2: false
    };
  },
  methods: {
    onImageLoad(){
      window.addEventListener("resize", this.onResize);
      window.addEventListener("scroll", this.onScroll);
      this.onResize();
    },
    onScroll() {
      // requestAnimationFrame : __évite__ de call + de fois que les FPS actuel
      window.requestAnimationFrame(function(){// vue next tick ?
        const container_rect = this.logo_container.getBoundingClientRect();
        if ((container_rect.top + container_rect.height) < this.positionNextStep) {
          this.animStep2 = true;
        } else if (this.logo_png.classList.contains("animStep2")){
          this.animStep2 = false;
        }
      }.bind(this));
    },
    onResize() {
      clearTimeout(this.timer_resize);
      this.timer_resize = setTimeout(function(){
        // constantes 20% et 58% -> cf. CSS
        const loto_flagPos = this.logo_png.getBoundingClientRect().height * 0.58;
        const logo_top = this.logo_container.getBoundingClientRect().height * 0.2;
        this.positionNextStep = Math.floor(logo_top + loto_flagPos);
        this.onScroll();
      }.bind(this), 75);
    }
  },
  mounted: function() {
    this.logo_container = document.getElementById("homepage-header");
    this.logo_png = document.querySelector("#homepage-header>img");
    // https://stackoverflow.com/a/33386309
      this.onImageLoad = this.onImageLoad.bind(this);
      this.onScroll = this.onScroll.bind(this);
      this.onResize = this.onResize.bind(this);
    this.logo_png.addEventListener("load", this.onImageLoad);
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("scroll", this.onScroll);
    this.logo_png.removeEventListener("load", this.onImageLoad);
  }
}
</script>

<style>
/* TODO: SCSS */
#homepage-header {
  height: 90vh;
  background-image: url("../../assets/classroom.webp");
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
