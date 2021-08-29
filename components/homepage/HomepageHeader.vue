<template>
  <header id="homepage-header" class="center">
    <img :class="{'animStep2': animStep2}" src="@/assets/logo.webp" alt="Logo BDE Faction - IUT de Paris 2021-2022" @load="onImageLoad">
  </header>
</template>

<script>
export default {
  name: 'HomepageHeader',
  data () {
    return {
      timer_resize: null,
      positionNextStep: 300,
      logo_container: null,
      logo_png: null,
      animStep2: false
    };
  },
  mounted () {
    this.logo_container = document.getElementById("homepage-header");
    this.logo_png = document.querySelector("#homepage-header>img");
    // https://stackoverflow.com/a/33386309
    this.onImageLoad = this.onImageLoad.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.onResize = this.onResize.bind(this);
    // this.logo_png.addEventListener("load", this.onImageLoad);
  },
  destroyed () {
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("scroll", this.onScroll);
    this.logo_png.removeEventListener("load", this.onImageLoad);
  },
  methods: {
    onImageLoad () {
      window.addEventListener("resize", this.onResize);
      window.addEventListener("scroll", this.onScroll);
      this.onResize();
    },
    onScroll () {
      // requestAnimationFrame : __évite__ de call + de fois que les FPS actuel
      window.requestAnimationFrame(function () { // vue next tick ?
        const containerRect = this.logo_container.getBoundingClientRect();
        if ((containerRect.top + containerRect.height) < this.positionNextStep) {
          this.animStep2 = true;
        } else if (this.logo_png.classList.contains("animStep2")) {
          this.animStep2 = false;
        }
      }.bind(this));
    },
    onResize () {
      clearTimeout(this.timer_resize);
      this.timer_resize = setTimeout(function () {
        // constantes 20% et 58% -> cf. CSS
        const lotoFlagPos = this.logo_png.getBoundingClientRect().height * 0.58;
        const logoTop = this.logo_container.getBoundingClientRect().height * 0.2;
        this.positionNextStep = Math.floor(logoTop + lotoFlagPos);
        this.onScroll();
      }.bind(this), 75);
    }
  }
}
</script>

<style>
/* TODO: SCSS */
#homepage-header {
  height: 90vh;
  background-image: url("../../assets/acteurs.svg"),
  url("../../assets/classroom.webp");
  background-size: contain, cover;
  background-repeat: no-repeat;
  background-position: center 80%, center;
  background-attachment: fixed;
  position: relative;
}
#homepage-header>img {
  position: fixed;
  top: 20%;
  width: auto;
  height: auto;
  max-width: 80vw;
  max-height: 50vh;
  z-index: 5;
  /*centre horizontal comme la position fixed est cheloue*/
    transform: translateX(-50%);
}
#homepage-header>img.animStep2 {
  position: relative;
  top: 100%;
  transform: translateY(-58%); /*barre se trouve à 58% du logo*/
}
</style>
