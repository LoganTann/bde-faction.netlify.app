<template>
  <div class="homepage">
    <HomepageHeader />
    <section class="container flow-text">
      <HomepageLogoMargin />

      <h2>Fiers d'être acteurs de la vie étudiante</h2>
      <blockquote class="i">Qui ne connaît pas la signification de BDE n'a probablement pas connu une véritable vie de campus...</blockquote>
      <p>
        Le Bureau des Etudiants, c'est un groupe d'élèves ambitieux ayant une volonté très simple : organiser la vie étudiante et la réussite de tous au sein de notre département.<br />
        Cette année, nous sommes <NuxtLink to="/team">13 étudiants (FACTION)</NuxtLink> à avoir été élus pour administrer le BDE Informatique de notre campus, l'IUT de Paris - Rives de Seine.
      </p>
    </section>

    <section id="contact" class="container flow-text">
      <h2>Contactez-nous !</h2>
      <p class="">Envie de travailler ensemble ? Que vous soyez un étudiant, une association ou une entreprise, nous sommes ouvert à toute proposition (partenariat, création de projets ou proposition d'évènements)</p>
      <div class="row">
        <ul class="collection with-header col s12 m10 l8 offset-m1 offset-l2">
          <li class="collection-header center"><h4>Notre carte de visite</h4></li>
          <li class="collection-item avatar"><i class="circle material-icons">favorite</i> Si vous êtes proche des jeunes, peut être qu'un petit DM sur <a href="https://www.instagram.com/listebde.faction/">notre Instagram</a> vous conviendra ?</li>
          <li class="collection-item avatar"><i class="circle material-icons">email</i> Pour les plus sérieux, nous avons un également un mail : &lt;liste@bde-faction.fr&gt;</li>
          <li class="collection-item avatar"><i class="circle material-icons">chat</i> Voisin de classe ? Réponse garantie sur notre discord !</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style>
  .i {
    font-style: italic;
  }
  .collection-item {
    font-size: 0.8em;
  }
</style>

<script lang="ts">

export default {
    transition(to, from) {
      if (!from) {
        return 'slide-left'
      }
      return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
    }
};
</script>


