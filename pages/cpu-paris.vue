<template lang="html">
  <div id="cpu-paris">
    <cpu-header />

    <section class="row container">
      <div class="col s12">
        <h2>Vocations ?</h2>
        <p class="">
          CPU-Paris est un concept de club programmation inter-campus qui sera testé durant l'année 2021-2022.<br>
          Ce club a plusieurs objectifs, mais l'intérêt principal est d'inciter les étudiants à trouver de la motivation pour réaliser un projet et en tirer de l'expérience.
        </p>
      </div>
      <div class="col s12 m10 push-m1 l6">
        <h3 class="flow-text">
          <icon>explore</icon> Apprenez la programmation de manière concrète
        </h3>
        <p>Nous croyons fermement que concrétiser une idée au sein d'un projet est le meilleur moyen de progresser en programmation.</p>
        <p>Et pourtant, le pédagogie employée à l'université n'encourage pas à trouver de la motivation ou de la curiosité à l'informatique... C'est pourquoi <b>nous souhaitons accompagner les étudiants pour créer une équipe et développer leurs propres idées</b> !</p>

        <ul class="collapsible popout">
          <li>
            <div class="collapsible-header">
              <icon>timeline</icon>Déroulement d'une année type
            </div>
            <div class="collapsible-body">
              <ul class="browser-default">
                <li>La phase de recrutement débute <b>dès la rentrée</b>. Nous ferons de la communication pour trouver des membres, mais aussi des personnes pouvant participer au développement du club (helpers).</li>
                <li>
                  <b>Courant octobre</b>, nous vous inviterons à proposer des idées de projets (<em>Ex : un jeu vidéo, un site dynamique pour surmonter le burn out, une application mobile pour les commerçants...</em>). <br>
                  Les membres montent leur équipe pour réaliser ce projet. Le but est avant tout de trouver de la motivation pour y contribuer, peu importe votre niveau actuel.
                </li>
                <li><b>Tout au long de l'année</b>, vous construirez ce projet en étant accompagné par notre équipe (étudiants expérimentés voire des professionnels bénévoles).</li>
                <li><b>En fin d'année</b>, nous pourrons tous ensemble mettre en avant les projets que vous avez réalisé. Selon le succès et les moyens du club, un soutien matériel peut également être envisagé (partage d'une license google play ou d'un serveur dédié pour publier vos applications)</li>
              </ul>
              <p>Si vous travaillez déjà sur un projet, vous pouvez le soumettre et bénéficier de notre accompagnement. Vous pouvez également choisir de travailler seul.</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="col s12 m10 push-m1 l6">
        <h3 class="flow-text">
          <icon>school</icon> Bénéficiez de nos initiatives
        </h3>
        <p>Rejoindre le club ne vous oblige pas forcément à créer votre projet chez nous ! Nous ferons de nombreuses initiatives pour développer votre curiosité ou vous expérimenter.</p>
        <ul class="collection">
          <li class="collection-item avatar">
            <icon circle>
              developer_mode
            </icon> Nous prévoyons d'organiser <b>des ateliers de découverte sur des thématiques variées</b> (cybersécurité, web, applicatif, embarqué, audiovisuel, jeu vidéo, robotique...)
          </li>
          <li class="collection-item avatar">
            <icon circle>
              book
            </icon> Vous aurez <b>accès à des cours exclusifs</b> pour l'apprentissage de nouveaux langages, d’outils ou de paradigmes de programmation
          </li>
          <li class="collection-item avatar">
            <icon circle>
              question_answer
            </icon> Contre toute attente, des <b>canaux de discussions</b> seront <b>dédiés à l'entraide</b> (pratique pour les devoirs)
          </li>
          <li class="collection-item avatar">
            <icon circle>
              whatshot
            </icon> Enfin, nous envisageons d'organiser des évènements tel que des <b>conférences, hackatons/gamejams ou partenariats</b> avec de grandes entreprises
          </li>
        </ul>
      </div>
      <div class="col s12 m10 push-m1 l6">
        <h3 class="flow-text">
          <icon>supervisor_account</icon> Contribuez au développement du club
        </h3>
        <p>Proposer autant d'offres ne pourra se faire sans contributions. Si vous avez des connaissances particulières sur un domaine, n'hésitez pas à vous proposer notre aide !</p>
      </div>
    </section>

    <section id="join">
      <div class="container row white-text">
        <iframe
          class="col s12 m6 l6 xl4"
          src="https://discord.com/widget?id=877136874760712192&theme=dark"
          width="100%"
          height="500"
          allowtransparency="true"
          frameborder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        />

        <div class="col s12 m6 push-xl1">
          <h2>Nous rejoindre</h2>
          <p>Intégrer le club est totalement gratuit et accessible à tous niveaux. La plupart des ressources que nous créerons (cours...) seront également disposées en accès libre.</p>
          <p>
            Comme son nom l'indique, le club est ouvert aux étudiants en Informatique de l'IUT de Paris et du Campus des Grands Moulins (Tous les deux composantes de l'Université de Paris).<br>
            Si vous ne faites pas partie de l'un des deux campus, nous pourrons tout de même vous accepter selon les effectifs actuels.
          </p>
          <p>Lien discord : <a href="https://discord.gg/4fcXmdbuuz">discord.gg/4fcXmdbuuz</a></p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'CPUParis',
  data () {
    return {
      collapsibleInstance: null
    };
  },
  head: {
    title: 'Club Programmation de l\'Université de Paris'
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

<style lang="css" scoped>
#join, h2 {
  position: relative;
}
#join:before, h2:before{
  content: "";
  position: absolute;
  z-index: -1;
}

section {
  font-size: 1.1em;
}
section .collection-item {
  font-size: 0.9em;
}
h2 {
  display:inline-block;
}
h2::before{
  height: 20px;
  width: 90%;
  bottom: 5px;
  background: #b2ebf2;
}

#join {
  margin: 3.5em 0;
}
#join h2::before {
  background: #ffa000;
}
#join::before {
  height: calc(100% + 6em);
  width: 75%;
  top: -3em; right: 0;
  background:/* url(@/assets/bg-pattern.png) repeat */ #8a1538;
  border-radius: 2em 0 0 2em;
}
@media screen and (max-width: 600px) {
  #join::before {
    width: 95%;
  }
}
</style>
