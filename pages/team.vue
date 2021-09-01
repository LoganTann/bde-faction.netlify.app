<template lang="html">
  <div>
    <SocialHead
      title="Membre du BDE Informatique Faction"
      description="Découvrez les 13 étudiants responsables du BDE"
    />
    <section id="team" class="container">
      <div v-for="category in member_list" :key="category.name" class="row">
        <div class="col s12 m4">
          <h3>{{ category.name }}</h3>
          <p>{{ category.desc }}</p>
        </div>
        <div class="col s12 l8 row center">
          <div v-for="member in category.members" :key="member.picture" class="col s12" :class="get_equal_column_value(category.members.length,'m')">
            <span class="avatar"> <img :src="pic_url(member.picture)" :alt="'photo de ' + member.firstName"> </span>
            <h5>{{ member.firstName }} <span class="surname">{{ member.surName }}</span></h5>
            <p>{{ member.caption }}</p>
          </div>
        </div>
      </div>

      <div class="row valign-wrapper">
        <div class="col s4 l2">
          <span class="avatar"> <img :src="pic_url('ibra.jpg')" alt="photo de Ibrahime"> </span>
        </div>
        <div class="col s8 l10">
          <h3 style="margin-top: 0;">
            Entrées et sortie de membres
          </h3>
          <p><b>Ibrahime Ahbib</b> (photo ci-contre) était Vice-Président de Faction et a participé à la création du groupe. Il a dû quitter ses fonctions pour des raisons personnelles.</p>
          <p><b>Fabien Ribeiro</b> était au pôle évènementiel de Sinfonia (la liste bde concurrente à faction) et a accepté de nous rejoindre pour nous assister dans la gestion des évènements.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Team',
  data () {
    return {
      materialBoxInstance: null,
      pics_path: "./assets/photos/", // TODO: webpack require pour que ce soit dans src/assets au lieu de public/assets ?
      member_list: [
        {
          name: "Le bureau",
          desc: "Le président représente le groupe tandis que le vice-président manage l'équipe. Quant aux autres rôles, ceux-ci sont assez explicites.",
          members: [
            { picture: "flo.jpg", firstName: "Florian", surName: "Le Gal", caption: "Président" },
            { picture: "logan.jpg", firstName: "Logan", surName: "Tann", caption: "Vice-Président" },
            { picture: "julie.jpg", firstName: "Julie", surName: "Pessey", caption: "Secrétaire" },
            { picture: "charles.jpg", firstName: "Charles-André", surName: "Goichot", caption: "Trésorier" }
          ]
        },
        {
          name: "Le pôle Evènementiel",
          desc: "Le pôle évènementiel se charge d'inventer et d'organiser les soirées ou sorties.",
          members: [
            { picture: "fabien.jpg", firstName: "Fabien", surName: "Rondan", caption: "Pôle évènementiel" },
            { picture: "none.jpg", firstName: "Fabien", surName: "Ribeiro", caption: "Pôle évènementiel" },
            { picture: "guillaume.jpg", firstName: "Guillaume", surName: "Merchez", caption: "Pôle évènementiel" }
          ]
        },
        {
          name: "Le pôle Communication",
          desc: "Manage notre superbe compte Insta, et poste aussi certaines annonces sur Discord.",
          members: [
            { picture: "seb.jpg", firstName: "Sébastien", surName: "Ramirez Meija", caption: "Pôle communication" },
            { picture: "marco.jpg", firstName: "Marco", surName: "Balamon", caption: "Pôle communication" },
            { picture: "alexis.jpg", firstName: "Alexis", surName: "Charpentreau", caption: "Pôle communication" }
          ]
        },
        {
          name: "Le pôle Audiovisuel",
          desc: "Crée les superbes infographies pour nos réseaux sociaux.",
          members: [
            { picture: "none.jpg", firstName: "Meryem", surName: "Guldas", caption: "Pôle audiovisuel" },
            { picture: "nico.jpg", firstName: "Nicolas", surName: "Cuzon", caption: "Pôle audiovisuel" }
          ]
        },
        {
          name: "Le pôle partenariat",
          desc: "Démarche les entreprises et organisations locales pour trouver des offres exclusives à notre département",
          members: [
            {
              picture: "youcef.jpg",
              firstName: "Youcef",
              surName: "Medileh",
              caption: "Pôle partenariat"
            }
          ]
        }
      ]
    };
  },
  computed: {
  },
  mounted () {
    const M = this.$M;
    M.AutoInit();
    const memberPics = document.querySelectorAll('#team .avatar img');
    this.materialBoxInstances = M.Materialbox.init(memberPics, {});
  },
  destroyed () {
    for (const pictureEvent of this.materialBoxInstances) {
      pictureEvent.destroy();
    }
    this.materialBoxInstances = null;
  },
  methods: {
    pic_url (picName) {
      return `${this.pics_path}${picName}`;
    },
    get_equal_column_value (arrayLength, columnName) {
      let value = 12;
      if (arrayLength > 4) {
        value = 3;
      } else if (arrayLength > 1) {
        value = 12 / arrayLength;
      }
      return `${columnName}${value}`
    }
  }
}
</script>

<style lang="css">
#team img {
  width: 10em;
  height: auto;

  max-width: 100%;
  border-radius: 50%;
  cursor: zoom-in;
}
#team img.active {
  cursor: zoom-out;
}
.person_card {
  margin: 0.5em;
  text-align: center;
}
.surname {
  font-variant: small-caps;
}

@media only screen and (min-width: 993px) {
  #team.container {
    width: 85%;
  }
}
</style>
