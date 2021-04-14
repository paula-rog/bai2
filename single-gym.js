Vue.component("single-gym", {
  props: ["gymData", "getGyms", "setGyms"],
  data: function () {
    return {
      gymid: this.gymData.id,
      city: this.gymData.city,
      name: this.gymData.name,
      address: this.gymData.address,
      phone_nr: this.gymData.phone_nr,
      openingHours: this.gymData.days,
    };
  },
  template: `
      <div style="padding: 20px">
        <div>{{city}}</div>
        <div>{{name}}</div>
        <div>Adres: {{address}}</div>
        <div>Telefon: {{phone_nr}}</div>
        <div>Godziny otwarcia:</div>
        <div>Poniedziałek: {{openingHours.monday.from}}-{{openingHours.monday.to}}</div>
        <div>Wtorek: {{openingHours.tuesday.from}}-{{openingHours.tuesday.to}}</div>
        <div>Środa: {{openingHours.wednesday.from}}-{{openingHours.wednesday.to}}</div>
        <div>Czwartek: {{openingHours.thursday.from}}-{{openingHours.thursday.to}}</div>
        <div>Piątek: {{openingHours.friday.from}}-{{openingHours.friday.to}}</div>
        <div>Sobota: {{openingHours.saturday.from}}-{{openingHours.saturday.to}}</div>
        <div>Niedziela: {{openingHours.sunday.from}}-{{openingHours.sunday.to}}</div>
        <button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#editModal" v-on:click="getEditId">
          Edytuj
        </button>
        <button type="button" class="btn btn-outline-danger" v-on:click="deleteGym">
          Usuń
        </button>
      </div>
    `,
  methods: {
    getEditId: function () {
      this.$emit("getGymId", this.gymid);
    },
    deleteGym: function () {
      const gyms = this.getGyms();

      for (const gym in gyms) {
        if (gyms[gym].id === this.gymid) {
          const index = gyms.indexOf(gyms[gym]);
          gyms.splice(index, 1);
        }
      }

      this.setGyms(gyms);
      this.getGyms();
      this.$emit("update");
    },
  },
});
