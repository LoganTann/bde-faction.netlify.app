<template>
  <div class="">

    <HomepageHeader/>
    <section class="container">
      <HomepageLogoMargin/>

      <h2>Vous avez dit "Liste BDE" ?</h2>
      <p>
        Nous sommes un groupe de 13 étudiants candidatant pour devenir le futur BDE Informatique de l'IUT de Paris - Rives de Seine.<br>
        Parmi les différentes dénominations permettant de représenter une promotion, le BDE est l'entité la plus proche des élèves et a pour but principal d'organiser la vie étudiante et la réussite de ces derniers.
      </p>

      <p>Nb : En tant que liste candidate, nous n'avons pour le moment aucune action officielle vis à vis de notre département.</p>
    </section>

    <section id="contact" class=" container">
      <h2>Nous contacter</h2>
      <a href="https://www.instagram.com/listebde.faction/">Instagram</a>
      <p>Ou par mail sur &lt;liste@bde-faction.fr&gt;</p>
      <!-- TODO: créer un Instagram widget https://www.instagram.com/listebde.faction/?__a=1-->
    </section>


    <section id="projets" class=" container">
      <h2>Projets en cours</h2>
    </section>


    <section id="projets" class=" container">
      <h2>Ils nous soutiennent</h2>
    </section>

  </div>
</template>

<script>
import HomepageHeader from './homepage-header.vue'
import HomepageLogoMargin from './homepage-logo-margin.vue'

export default {
  name: 'Homepage',
  components: {
    HomepageHeader,
    HomepageLogoMargin
  },
  data() {
    return {

    };
  },
  mounted() {
  }
}
</script>

<style scoped>
</style>
