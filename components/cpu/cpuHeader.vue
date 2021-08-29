<template>
  <header class="container row">
    <div class="col s12" style="display: flex;justify-content: center; align-items: center;">
      <div class="headerTxt">
        <h1>Upgrade yourself</h1>
        <p class="flow-text">
          Que vous souhaitez apprendre ou renforcer vos compétences en informatique, nous sommes là pour vous accompagner !
        </p>
      </div>
      <img src="@/assets/banner-artwork.png" class="headerImg">
    </div>
  </header>
</template>

<script>
export default {
  name: "CpuHeader"
}
</script>

<style scoped lang="scss">
.headerTxt {
  width: 30vw;
}
.headerImg {
  height: auto;
  max-width: 40vw;
  margin-left: 10vw;
}
@media screen and (min-width: 1050px), screen and (max-width: 720px) {
  .headerImg{ margin-left: 1em; }
}
@media screen and (max-width: 1550px) {
  .headerImg{ max-width: 30vw; }
}
@media screen and (max-width: 720px) {
  .headerTxt { width: 50vw; }
  .headerImg{ max-width: 30vw; }
}
@media screen and (max-width: 600px) {
  .headerImg{ display: none; }
  .headerTxt { width: 80vw; }
}
/* positionne le :before en tant que rectangle de fond */
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
