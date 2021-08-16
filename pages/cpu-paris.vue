<template lang="html">
  <div class="container">
    <Navbar />
    <section id="cpu-paris" class="">
      <h1>Progressez par la pratique avec nous !</h1>
      <p>Que vous souhaitez apprendre de nouvelles compétences ou les renforcer, nous sommes là pour vous accompagner !</p>
    </section>
    <section class="row">
      <div class="col s12">
      <h2>Concept ?</h2>
      <p class="">CPU-Paris est un concept de club programmation inter-campus qui sera testé durant l'année 2021-2022.
        Ce club a plusieurs objectifs, mais l'intéret principal est d'inciter les étudiants à trouver de la motivation pour réaliser un projet et en tirer de l'expérience.</p>
      </div>
      <div class="col s12 m6">

        <h3>Apprenez la programmation de manière concrète</h3>
        <p>Nous croyons fermement que concrétiser une idée au sein d'un projet est le meilleur moyen de progresser en programmation.<br>
          Et pourtant, le pédagogie employée à l'université n'encourage pas à trouver de la motivation ou de la curiosité à l'informatique...</p>
        <p>C'est pourquoi nous souhaitons d'accompagner les étudiants pour créer une équipe et développer un projet motivant !</p>

        <ul class="collapsible popout">
          <li>
            <div class="collapsible-header"><i class="material-icons">timeline</i>Déroulement d'une année type</div>
            <div class="collapsible-body">
              <ul class="browser-default">
                <li>La phase de recrutement débute <b>dès la rentrée</b>. Nous ferons de la communication pour trouver des membres, mais aussi des personnes pouvant participer au développement du club (helpers).</li>
                <li><b>Courant octobre</b>, nous vous inviterons à proposer des idées de projets (<em>Ex : un jeu vidéo, un site dynamique pour surmonter le burn out, une application mobile pour les commerçants...</em>). <br>
                  Les membres montent leur équipe pour réaliser ce projet. Le but est avant tout de trouver de la motivation pour y contribuer, peu importe votre niveau actuel.
                </li>
                <li><b>Tout au long de l'année</b>, vous construirez ce projet en étant accompagné par notre équipe (étudiants expérimentés voire des professionnels bénévoles).</li>
                <li><b>En fin d'année</b>, nous pourrons tous ensemble mettre en avant les projets que vous avez réalisé. Selon le succès et les moyens du club, un soutien matériel peut également être envisagé (partage d'une license google play ou d'un serveur dédié pour publier vos applications)</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="col s12 m6">
        <h3>Participez ou bénéficiez de nos initiatives</h3>
        <p>Rejoindre le club ne vous oblige pas forcément à créer votre projet chez nous ! Vous pourrez aussi bénéficier de nombreuses initiatives ne nécessitant pas un investissement sur l'année.</p>
        <ul class="collection">
          <li class="collection-item">Nous prévoyons d'organiser des ateliers de découverte sur des thématiques variées (cybersécurité, web, applicatif, embarqué, audiovisuel, jeu vidéo, robotique...)</li>
          <li class="collection-item">Vous aurez accès à des cours exclusifs pour l'apprentissage de nouveaux langages, d’outils ou de paradigmes de programmation</li>
          <li class="collection-item">Enfin, nous envisageons d'organiser des évènements tel que des conférences, hackatons/gamejams ou partenariats avec de grandes entreprises</li>
        </ul>
      </div>
      <div class="col s12 m6">
        <h3>Contribuez au développement du club</h3>
        <p>Proposer autant d'objectif ne pourra se faire sans contributions. Si vous avez des connaissances particulières sur un domaine, n'hésitez pas à vous proposer notre aide !</p>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'Team',
  data () {
    return {
      collapsibleInstance: null
    };
  },
  computed: {
  },
  mounted () {
    const M = this.$M;
    const elems = document.querySelector(".collapsible");
    M.AutoInit();
    this.collapsibleInstance = M.Collapsible.init(elems, {});
  },
  destroyed () {
    this.collapsibleInstance.destroy();
    this.collapsibleInstance = null;
  },
  methods: {

  }
});
</script>

<style lang="css">
section {
  font-size: 1.1em;
}
section .collection-item {
  font-size: 1em;
}
</style>
