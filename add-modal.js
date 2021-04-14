Vue.component("add-modal", {
  props: ["getGyms", "setGyms"],
  data: function () {
    return {
      city: "",
      name: "",
      address: "",
      phone_nr: "",
      days: {
        monday: {
          from: "",
          to: "",
        },
        tuesday: {
          from: "",
          to: "",
        },
        wednesday: {
          from: "",
          to: "",
        },
        thursday: {
          from: "",
          to: "",
        },
        friday: {
          from: "",
          to: "",
        },
        saturday: {
          from: "",
          to: "",
        },
        sunday: {
          from: "",
          to: "",
        },
      },
    };
  },
  template: `
        <div
        class="modal fade"
        id="addModal"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">
                  Dodaj siłownię
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                  <div class="mb-3">
                      <label for="form-city" class="form-label">Miasto</label>
                      <input type="text" class="form-control" id="form-city" v-model="city">
                  </div>
                  <div class="mb-3">
                      <label for="form-name" class="form-label">Nazwa</label>
                      <input type="text" class="form-control" id="form-name" v-model="name">
                  </div>
                  <div class="mb-3">
                      <label for="form-address" class="form-label">Adress</label>
                      <input type="text" class="form-control" id="form-address" v-model="address">
                  </div>
                  <div class="mb-3">
                      <label for="form-phone" class="form-label">Nr telefonu</label>
                      <input type="text" class="form-control" id="form-phone" v-model="phone_nr">
                  </div>
                  <div class="mb-2">
                      Godziny otwarcia
                  </div>
                  <div class="mb-1">
                      Poniedziałek
                  </div>
                  <div class="row mb-3">
                      <div class="col">
                          <label for="form-time-monday-from" class="form-label">Od</label>
                          <input type="time" class="form-control" id="form-time-monday-from" v-model="days.monday.from">
                      </div>
                      <div class="col">
                          <label for="form-time-monday-to" class="form-label">Do</label>
                          <input type="time" class="form-control" id="form-time-monday-to" v-model="days.monday.to">
                      </div>
                  </div>
                  <div class="mb-1">
                      Wtorek
                  </div>
                  <div class="row mb-3">
                      <div class="col">
                          <label for="form-time-tuesday-from" class="form-label">Od</label>
                          <input type="time" class="form-control" id="form-time-tuesday-from" v-model="days.tuesday.from">
                      </div>
                      <div class="col">
                          <label for="form-time-tuesday-to" class="form-label">Do</label>
                          <input type="time" class="form-control" id="form-time-tuesday-to" v-model="days.tuesday.to">
                      </div>
                  </div>
                  <div class="mb-1">
                      Środa
                  </div>
                  <div class="row mb-3">
                      <div class="col">
                          <label for="form-time-wednesday-from" class="form-label">Od</label>
                          <input type="time" class="form-control" id="form-time-wednesday-from" v-model="days.wednesday.from">
                      </div>
                      <div class="col">
                          <label for="form-time-wednesday-to" class="form-label">Do</label>
                          <input type="time" class="form-control" id="form-time-wednesday-to" v-model="days.wednesday.to">
                      </div>
                  </div>
                  <div class="mb-1">
                      Czwartek
                  </div>
                  <div class="row mb-3">
                      <div class="col">
                          <label for="form-time-thursday-from" class="form-label">Od</label>
                          <input type="time" class="form-control" id="form-time-thursday-from" v-model="days.thursday.from">
                      </div>
                      <div class="col">
                          <label for="form-time-thursday-to" class="form-label">Do</label>
                          <input type="time" class="form-control" id="form-time-thursday-to" v-model="days.thursday.to">
                      </div>
                  </div>
                  <div class="mb-1">
                      Piątek
                  </div>
                  <div class="row mb-3">
                      <div class="col">
                          <label for="form-time-friday-from" class="form-label">Od</label>
                          <input type="time" class="form-control" id="form-time-friday-from" v-model="days.friday.from">
                      </div>
                      <div class="col">
                          <label for="form-time-friday-to" class="form-label">Do</label>
                          <input type="time" class="form-control" id="form-time-friday-to" v-model="days.friday.to">
                      </div>
                  </div>
                  <div class="mb-1">
                      Sobota
                  </div>
                  <div class="row mb-3">
                      <div class="col">
                          <label for="form-time-saturday-from" class="form-label">Od</label>
                          <input type="time" class="form-control" id="form-time-saturday-from" v-model="days.saturday.from">
                      </div>
                      <div class="col">
                          <label for="form-time-saturday-to" class="form-label">Do</label>
                          <input type="time" class="form-control" id="form-time-saturday-to" v-model="days.saturday.to">
                      </div>
                  </div>
                  <div class="mb-1">
                      Niedziela
                  </div>
                  <div class="row mb-3">
                      <div class="col">
                          <label for="form-time-sunday-from" class="form-label">Od</label>
                          <input type="time" class="form-control" id="form-time-sunday-from" v-model="days.sunday.from">
                      </div>
                      <div class="col">
                          <label for="form-time-sunday-to" class="form-label">Do</label>
                          <input type="time" class="form-control" id="form-time-sunday-to" v-model="days.sunday.to">
                      </div>
                  </div>
              </div>
              <div class="modal-footer">
                <button type="button" id="close-add-modal" class="btn btn-secondary" data-bs-dismiss="modal">
                  Anuluj
                </button>
                <button type="button" class="btn btn-primary" v-on:click="addNewGym">
                  Dodaj
                </button>
              </div>
            </div>
          </div>
        </div>
      `,
  methods: {
    addNewGym: function () {
      const gyms = this.getGyms();
      const newGym = {
        city: this.city,
        name: this.name,
        address: this.address,
        phone_nr: this.phone_nr,
        days: { ...this.days },
      };

      gyms.unshift({ ...newGym });

      this.setGyms(gyms);
      this.getGyms();
      this.$emit("update");
      document.getElementById("close-add-modal").click();
    },
  },
});
