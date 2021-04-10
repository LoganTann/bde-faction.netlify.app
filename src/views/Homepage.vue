<template>
  <div class="">

    <Header/>
    <section class="container flow-text">
      <LogoMargin/>

      <h2>Vous avez dit "Liste BDE" ?</h2>
      <p>
        Nous sommes <router-link to="/team">un groupe de 13 étudiants</router-link> candidatant pour devenir le futur BDE Informatique de l'IUT de Paris - Rives de Seine.<br>
        Parmi les différentes dénominations permettant de représenter une promotion, le BDE est l'entité la plus proche des élèves et a pour but principal d'organiser la vie étudiante et la réussite de ces derniers.
      </p>

      <p>Nb : En tant que liste candidate, nous n'avons pour le moment aucune action officielle vis à vis de notre département.</p>
    </section>

    <section id="contact" class=" container flow-text">
      <h2>Nous contacter</h2>
      <a href="https://www.instagram.com/listebde.faction/">Instagram</a>
      <p>Ou par mail sur &lt;liste@bde-faction.fr&gt;</p>

      <p><b>Site en cours de construction</b> : Nous ajouterons progressivement le contenu de notre site (section blog, ressouces etc.)</p>
    </section>

    <section>
      <router-link to="/blog/">Notre blog</router-link>
    </section>
  </div>
</template>

<script>
const Header = ()=>import('@/components/homepage/header.vue');
const LogoMargin = ()=>import('@/components/homepage/logo-margin.vue');

export default {
  name: 'Homepage',
  components: {
    Header,
    LogoMargin
  }
}
</script>

<style>
</style>
