<template>
  <div class="homepage">
    <HomepageHeader />
    <section class="container flow-text">
      <HomepageLogoMargin />

      <h1 style="display: none /* seo >>*/">
        Fiers d'être acteurs de la vie étudiante
      </h1>
      <blockquote class="i">
        Qui ne connaît pas la signification de BDE n'a probablement pas connu une véritable vie de campus...
      </blockquote>
      <p>
        Le Bureau des Étudiants, c'est un groupe d'élèves ambitieux ayant une volonté très simple : organiser la vie étudiante et la réussite de tous au sein de notre département.<br>
        Cette année, nous sommes <NuxtLink to="/team">
          13 étudiants (FACTION)
        </NuxtLink> à avoir été élus pour administrer le BDE Informatique de notre campus, l'IUT de Paris - Rives de Seine.
      </p>
    </section>

    <section class="container">
      <h2>Notre blog</h2>
      <p class="flow-text">
        Voici les derniers articles postés sur notre blog :
      </p>
      <article-last />
    </section>

    <section id="contact" class="container flow-text">
      <h2>Contactez-nous !</h2>
      <p class="">
        Envie de travailler ensemble ? Que vous soyez un étudiant, une association ou une entreprise, nous sommes ouvert à toute proposition (partenariat, création de projets ou proposition d'évènements)
      </p>
      <div class="row">
        <ul class="collection with-header col s12 m10 l8 offset-m1 offset-l2">
          <li class="collection-header center">
            <h4>Notre carte de visite</h4>
          </li>
          <li class="collection-item avatar">
            <img alt="instagram logo" src="@/assets/instagram_icon.webp" class="circle" style="border-radius: 0"> Si vous êtes proche des jeunes, peut être qu'un petit DM sur <a href="https://www.instagram.com/bde.faction/">notre Instagram</a> vous conviendra ?
          </li>
          <li class="collection-item avatar">
            <img alt="e-mail logo" src="@/assets/email_icon.svg" class="circle" style="transform: scale(1.15)"> Pour les plus sérieux, nous avons un également un mail : &lt;liste@bde-faction.fr&gt;
          </li>
          <li class="collection-item avatar">
            <img alt="discord logo" src="@/assets/discord_icon.svg" class="circle" style="border-radius: 0"> Voisin de classe ? Réponse garantie sur notre <a href="https://discord.gg/6XPHk23">discord</a> !
          </li>
          <li class="collection-item avatar">
            <img alt="twitch logo" src="@/assets/twitch_icon.svg" class="circle" style="border-radius: 0"> Nous effectuerons également quelques évènements <a href="https://www.twitch.tv/bde_faction">sur twitch</a>, pensez à vous abonner !
          </li>
          <li />
        </ul>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
});
</script>

<style>
.i {
  font-style: italic;
}
.collection-item {
  font-size: 0.8em;
}
</style>
