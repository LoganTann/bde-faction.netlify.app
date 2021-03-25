<template>
  <header id="homepage-header" class="center">
    <img class="" src="../assets/logo.png" alt="Logo BDE Faction - IUT de Paris 2021-2022">
  </header>
</template>

<script>
export default {
  name: 'homepage-header',
  mounted() {
    console.log("homepage is mounted")
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
