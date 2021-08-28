<template lang="html">
  <div>
    <section id="team" class="container">
      <div v-for="category in member_list" :key="category.name" class="row">
        <div class="col s12 m4">
          <h3>{{ category.name }}</h3>
        </div>
        <div class="col s12 l8 row center">
          <div v-for="member in category.members" :key="member.picture" class="col s12" :class="get_equal_column_value(category.members.length,'m')">
            <span class="avatar"> <img :src="pic_url(member.picture)" :alt="'photo de ' + member.firstName"> </span>
            <h5>{{ member.firstName }} <span class="surname">{{ member.surName }}</span></h5>
            <p>{{ member.caption }}</p>
          </div>
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
          members: [
            { picture: "flo.jpg", firstName: "Florian", surName: "Le Gal", caption: "Président" },
            { picture: "logan.jpg", firstName: "Logan", surName: "Tann", caption: "Vice-Président" },
            { picture: "julie.jpg", firstName: "Julie", surName: "Pessey", caption: "Secrétaire" },
            { picture: "charles.jpg", firstName: "Charles-André", surName: "Goichot", caption: "Trésorier" }
          ]
        },
        {
          name: "Le pôle Evènementiel",
          members: [
            { picture: "fabien.jpg", firstName: "Fabien", surName: "Rondan", caption: "Pôle évènementiel" },
            { picture: "none.jpg", firstName: "Fabien", surName: "Ribeiro", caption: "Pôle évènementiel" },
            { picture: "guillaume.jpg", firstName: "Guillaume", surName: "Merchez", caption: "Pôle évènementiel" }
          ]
        },
        {
          name: "Le pôle Communication",
          members: [
            { picture: "seb.jpg", firstName: "Sébastien", surName: "Ramirez Meija", caption: "Pôle communication" },
            { picture: "marco.jpg", firstName: "Marco", surName: "Balamon", caption: "Pôle communication" },
            { picture: "alexis.jpg", firstName: "Alexis", surName: "Charpentreau", caption: "Pôle communication" }
          ]
        },
        {
          name: "Le pôle Audiovisuel",
          members: [
            { picture: "none.jpg", firstName: "Meryem", surName: "Guldas", caption: "Pôle audiovisuel" },
            { picture: "nico.jpg", firstName: "Nicolas", surName: "Cuzon", caption: "Pôle audiovisuel" }
          ]
        },
        {
          name: "Le pôle partenariat",
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
