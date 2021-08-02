<template lang="html">
  <div>
    <Navbar />
    <section id="team" class="container">
      <div v-for="category in member_list" :key="category.name" class="row">
        <div class="col s12 m4">
          <h3>{{ category.name }}</h3>
        </div>
        <div class="col s12 l8 row center">
          <div v-for="member in category.members" :key="member.picture" class="col s12" :class="get_equal_column_value(category.members.length,'m')">
            <span class="avatar"> <img :src="pic_url(member.picture)"> </span>
            <h5>{{ member.firstName }} <span class="surname">{{ member.surName }}</span></h5>
            <p>{{ member.caption }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

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

<script>
export default {
  name: 'Team',
  data () {
    return {
      materialBoxInstance: null,
      pics_path: "./assets/photos/", // TODO: webpack require pour que ce soit dans src/assets au lieu de public/assets ?
      member_list: [
        {
          name: "Le pôle exécutif",
          members: [
            { picture: "flo.jpg", firstName: "Florian", surName: "Le Gal", caption: "président" },
            { picture: "ibra.jpg", firstName: "Ibrahime", surname: "Ahbib", caption: "Vice-Président" },
            { picture: "julie.jpg", firstName: "Julie", surname: "Pessey", caption: "Secrétaire" },
            { picture: "charles.jpg", firstName: "Charles-André", surname: "Goichot", caption: "Trésorier" }
          ]
        },
        {
          name: "Le pôle partenariat",
          members: [
            { picture: "logan.jpg", firstName: "Logan", surName: "Tann", caption: "" },
            { picture: "nico.jpg", firstName: "Nicolas", surName: "Cuzon", caption: "" },
            { picture: "youcef.jpg", firstName: "Youcef", surName: "Medileh", caption: "" }
          ]
        },
        {
          name: "Le pôle Communication",
          members: [
            { picture: "seb.jpg", firstName: "Sébastien", surName: "Ramirez Meija", caption: "" },
            { picture: "marco.jpg", firstName: "Marco", surName: "Balamon", caption: "" },
            { picture: "alexis.jpg", firstName: "Alexis", surName: "Charpentreau", caption: "" }
          ]
        },
        {
          name: "Le pôle Evènementiel",
          members: [
            { picture: "fabien.jpg", firstName: "Fabien", surName: "Rondan", caption: "" },
            { picture: "guillaume.jpg", firstName: "Guillaume", surName: "Merchez", caption: "" }
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
    const member_pics = document.querySelectorAll('#team .avatar img');
    this.materialBoxInstances = M.Materialbox.init(member_pics, {});
  },
  destroyed () {
    for (const picture_event of this.materialBoxInstances) {
      picture_event.destroy();
    }
    this.materialBoxInstances = null;
  },
  methods: {
    pic_url (pic_name) {
      return `${this.pics_path}${pic_name}`;
    },
    get_equal_column_value (arrayLength, columnName) {
      let value; // TODO : rendre un poil plus stable
      switch (arrayLength) {
        case 2:
        case 4:
        case 3:
          value = 12 / arrayLength;
          break;
        default:
          value = 12;
      }
      return `${columnName}${value}`
    }
  }
}
</script>
