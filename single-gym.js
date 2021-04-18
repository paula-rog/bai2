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
      <div class="card" style="padding: 20px; margin: 20px">
        <div class="card-body">
          <h5 class="card-subtitle mb-2 text-muted">{{city}}</h5>
          <h4 class="card-title" style="height: 65px">{{name}}</h4>
          <h6>Adres:</h6> 
          <p class="card-text">{{address}}</p>
          <h6>Telefon:</h6>
          <p class="card-text">{{phone_nr}}</p>
          <h6 class="card-text">Godziny otwarcia:</h6>
          <div><span style="font-weight: 500">Poniedziałek:</span> {{openingHours.monday.from}}-{{openingHours.monday.to}}</div>
          <div><span style="font-weight: 500">Wtorek:</span> {{openingHours.tuesday.from}}-{{openingHours.tuesday.to}}</div>
          <div><span style="font-weight: 500">Środa:</span> {{openingHours.wednesday.from}}-{{openingHours.wednesday.to}}</div>
          <div><span style="font-weight: 500">Czwartek:</span> {{openingHours.thursday.from}}-{{openingHours.thursday.to}}</div>
          <div><span style="font-weight: 500">Piątek:</span> {{openingHours.friday.from}}-{{openingHours.friday.to}}</div>
          <div><span style="font-weight: 500">Sobota:</span> {{openingHours.saturday.from}}-{{openingHours.saturday.to}}</div>
          <div><span style="font-weight: 500">Niedziela:</span> {{openingHours.sunday.from}}-{{openingHours.sunday.to}}</div>
          <div style="margin-top: 20px">
            <button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#editModal" v-on:click="getEditId">
              Edytuj
            </button>
            <button type="button" class="btn btn-outline-danger" v-on:click="deleteGym">
              Usuń
            </button>
          </div>
        </div>
      </div>
    `,
  methods: {
    getEditId: function () {
      this.$emit("getGymId", this.gymid);
    },
    mockDeleteGym: function () {
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
    deleteGym: function () {
      deleteGym(this.gymid, this.mockDeleteGym)
    },
  },
});
