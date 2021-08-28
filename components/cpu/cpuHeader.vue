<template>
  <header class="container row">
    <div class="col s12" style="display: flex;justify-content: center; align-items: center;">
      <div style="width: 30%;">
        <h1>Upgrade yourself</h1>
        <p class="flow-text">
          Que vous souhaitez apprendre ou renforcer vos compétences en informatique, nous sommes là pour vous accompagner !
        </p>
      </div>
      <div style="width: 10%" />
      <img src="@/assets/banner-artwork.png">
    </div>
  </header>
</template>

<script>
export default {
  name: "CpuHeader"
}
</script>

<style scoped lang="scss">
/* positionne le :before en tant que rectangle de fond
   todo : transformer en component
*/
header {
  position:relative;

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    //
    top: -10%;
    left: 0;
    width: 100%;
    height: 120%;
    background: #f7f3f5;
    border-radius: 0 0 3em 3em;
    transform: rotate(3deg);
  }

  & img {
    width: 400px;
  }
}
</style>
