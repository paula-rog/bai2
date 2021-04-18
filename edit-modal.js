Vue.component("edit-modal", {
  props: ["gymId", "getGyms", "setGyms"],
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
  computed: {
    gymData: function () {
      const gyms = this.getGyms();
      for (const gym in gyms) {
        if (gyms[gym].id === this.gymId) {
          this.city = gyms[gym].city;
          this.name = gyms[gym].name;
          this.address = gyms[gym].address;
          this.phone_nr = gyms[gym].phone_nr;
          this.days.monday.from = gyms[gym].days.monday.from;
          this.days.monday.to = gyms[gym].days.monday.to;
          this.days.tuesday.from = gyms[gym].days.tuesday.from;
          this.days.tuesday.to = gyms[gym].days.tuesday.to;
          this.days.wednesday.from = gyms[gym].days.wednesday.from;
          this.days.wednesday.to = gyms[gym].days.wednesday.to;
          this.days.thursday.from = gyms[gym].days.thursday.from;
          this.days.thursday.to = gyms[gym].days.thursday.to;
          this.days.friday.from = gyms[gym].days.friday.from;
          this.days.friday.to = gyms[gym].days.friday.to;
          this.days.saturday.from = gyms[gym].days.saturday.from;
          this.days.saturday.to = gyms[gym].days.saturday.to;
          this.days.sunday.from = gyms[gym].days.sunday.from;
          this.days.sunday.to = gyms[gym].days.sunday.to;
        }
      }
    }
  },
  mounted: function () {
    var editModal = document.getElementById('editModal');
    editModal.addEventListener('hide.bs.modal', function () {
      document.getElementById('validate-edit-city').style.display = "none";
      document.getElementById('validate-edit-name').style.display = "none";
      document.getElementById('validate-edit-address').style.display = "none";
      document.getElementById('validate-edit-phone').style.display = "none";
      document.getElementById('validate-edit-monday').style.display = "none";
      document.getElementById('validate-edit-tuesday').style.display = "none";
      document.getElementById('validate-edit-wednesday').style.display = "none";
      document.getElementById('validate-edit-thursday').style.display = "none";
      document.getElementById('validate-edit-friday').style.display = "none";
      document.getElementById('validate-edit-saturday').style.display = "none";
      document.getElementById('validate-edit-sunday').style.display = "none";
    })
  },
  template: `
          <div
          class="modal fade"
          id="editModal"
          >
            {{gymData}}
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">
                    Edytuj siłownię
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
                      <input type="text" class="form-control" id="form-city" v-model="city" required>
                      <div class="invalid-feedback" id="validate-edit-city" style="display: none;">
                        Miasto jest wymagane.
                      </div>
                  </div>
                  <div class="mb-3">
                      <label for="form-name" class="form-label">Nazwa</label>
                      <input type="text" class="form-control" id="form-name" v-model="name" required>
                      <div class="invalid-feedback" id="validate-edit-name" style="display: none;">
                        Nazwa jest wymagana.
                      </div>
                  </div>
                  <div class="mb-3">
                      <label for="form-address" class="form-label">Adress</label>
                      <input type="text" class="form-control" id="form-address" v-model="address" required>
                      <div class="invalid-feedback" id="validate-edit-address" style="display: none;">
                        Adres jest wymagany.
                      </div>
                  </div>
                  <div class="mb-3">
                      <label for="form-phone" class="form-label">Nr telefonu</label>
                      <input type="text" class="form-control" id="form-phone" v-model="phone_nr" required>
                      <div class="invalid-feedback" id="validate-edit-phone" style="display: none;">
                        Numer telefonu jest wymagany.
                      </div>
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
                          <input type="time" class="form-control" id="form-time-monday-from" v-model="days.monday.from" required>
                      </div>
                      <div class="col">
                          <label for="form-time-monday-to" class="form-label">Do</label>
                          <input type="time" class="form-control" id="form-time-monday-to" v-model="days.monday.to" required>
                      </div>
                      <div class="invalid-feedback" id="validate-edit-monday" style="display: none;">
                        Niepoprawne godziny otwarcia.
                      </div>
                  </div>
                  <div class="mb-1">
                      Wtorek
                  </div>
                  <div class="row mb-3">
                      <div class="col">
                          <label for="form-time-tuesday-from" class="form-label">Od</label>
                          <input type="time" class="form-control" id="form-time-tuesday-from" v-model="days.tuesday.from" required>
                      </div>
                      <div class="col">
                          <label for="form-time-tuesday-to" class="form-label">Do</label>
                          <input type="time" class="form-control" id="form-time-tuesday-to" v-model="days.tuesday.to" required>
                      </div>
                      <div class="invalid-feedback" id="validate-edit-tuesday" style="display: none;">
                        Niepoprawne godziny otwarcia.
                      </div>
                  </div>
                  <div class="mb-1">
                      Środa
                  </div>
                  <div class="row mb-3">
                      <div class="col">
                          <label for="form-time-wednesday-from" class="form-label">Od</label>
                          <input type="time" class="form-control" id="form-time-wednesday-from" v-model="days.wednesday.from" required>
                      </div>
                      <div class="col">
                          <label for="form-time-wednesday-to" class="form-label">Do</label>
                          <input type="time" class="form-control" id="form-time-wednesday-to" v-model="days.wednesday.to" required>
                      </div>
                      <div class="invalid-feedback" id="validate-edit-wednesday" style="display: none;">
                        Niepoprawne godziny otwarcia.
                      </div>
                  </div>
                  <div class="mb-1">
                      Czwartek
                  </div>
                  <div class="row mb-3">
                      <div class="col">
                          <label for="form-time-thursday-from" class="form-label">Od</label>
                          <input type="time" class="form-control" id="form-time-thursday-from" v-model="days.thursday.from" required>
                      </div>
                      <div class="col">
                          <label for="form-time-thursday-to" class="form-label">Do</label>
                          <input type="time" class="form-control" id="form-time-thursday-to" v-model="days.thursday.to" required>
                      </div>
                      <div class="invalid-feedback" id="validate-edit-thursday" style="display: none;">
                        Niepoprawne godziny otwarcia.
                      </div>
                  </div>
                  <div class="mb-1">
                      Piątek
                  </div>
                  <div class="row mb-3">
                      <div class="col">
                          <label for="form-time-friday-from" class="form-label">Od</label>
                          <input type="time" class="form-control" id="form-time-friday-from" v-model="days.friday.from" required>
                      </div>
                      <div class="col">
                          <label for="form-time-friday-to" class="form-label">Do</label>
                          <input type="time" class="form-control" id="form-time-friday-to" v-model="days.friday.to" required>
                      </div>
                      <div class="invalid-feedback" id="validate-edit-friday" style="display: none;">
                        Niepoprawne godziny otwarcia.
                      </div>
                  </div>
                  <div class="mb-1">
                      Sobota
                  </div>
                  <div class="row mb-3">
                      <div class="col">
                          <label for="form-time-saturday-from" class="form-label">Od</label>
                          <input type="time" class="form-control" id="form-time-saturday-from" v-model="days.saturday.from" required>
                      </div>
                      <div class="col">
                          <label for="form-time-saturday-to" class="form-label">Do</label>
                          <input type="time" class="form-control" id="form-time-saturday-to" v-model="days.saturday.to" required>
                      </div>
                      <div class="invalid-feedback" id="validate-edit-saturday" style="display: none;">
                        Niepoprawne godziny otwarcia.
                      </div>
                  </div>
                  <div class="mb-1">
                      Niedziela
                  </div>
                  <div class="row mb-3">
                      <div class="col">
                          <label for="form-time-sunday-from" class="form-label">Od</label>
                          <input type="time" class="form-control" id="form-time-sunday-from" v-model="days.sunday.from" required>
                      </div>
                      <div class="col">
                          <label for="form-time-sunday-to" class="form-label">Do</label>
                          <input type="time" class="form-control" id="form-time-sunday-to" v-model="days.sunday.to" required>
                      </div>
                      <div class="invalid-feedback" id="validate-edit-sunday" style="display: none;">
                        Niepoprawne godziny otwarcia.
                      </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button"  id="close-edit-modal" class="btn btn-secondary" data-bs-dismiss="modal">
                    Anuluj
                  </button>
                  <button type="button" class="btn btn-primary" v-on:click="editGym">
                    Edytuj
                  </button>
                </div>
              </div>
            </div>
          </div>
        `,
  methods: {
    validate: function () {
      const errors = {};

      if (this.city.trim() === '') {
        document.getElementById('validate-edit-city').style.display = "block";
        errors.city = 'error';
      }
      if (this.name.trim() === '') {
        document.getElementById('validate-edit-name').style.display = "block";
        errors.name = 'error';
      }
      if (this.address.trim() === '') {
        document.getElementById('validate-edit-address').style.display = "block";
        errors.address = 'error';
      }
      if (this.phone_nr.trim() === '') {
        document.getElementById('validate-edit-phone').style.display = "block";
        errors.phone = 'error';
      }
      if (this.days.monday.from.trim() === '' ||
        this.days.monday.to.trim() === '' ||
        parseFloat(this.days.monday.from) >= parseFloat(this.days.monday.to)) {
        document.getElementById('validate-edit-monday').style.display = "block";
        errors.monday = 'error';
      }
      if (this.days.tuesday.from.trim() === '' ||
        this.days.tuesday.to.trim() === '' ||
        parseFloat(this.days.tuesday.from) >= parseFloat(this.days.tuesday.to)) {
        document.getElementById('validate-edit-tuesday').style.display = "block";
        errors.tuesday = 'error';
      }
      if (this.days.wednesday.from.trim() === '' ||
        this.days.wednesday.to.trim() === '' ||
        parseFloat(this.days.wednesday.from) >= parseFloat(this.days.wednesday.to)) {
        document.getElementById('validate-edit-wednesday').style.display = "block";
        errors.wednesday = 'error';
      }
      if (this.days.thursday.from.trim() === '' ||
        this.days.thursday.to.trim() === '' ||
        parseFloat(this.days.thursday.from) >= parseFloat(this.days.thursday.to)) {
        document.getElementById('validate-edit-thursday').style.display = "block";
        errors.thursday = 'error';
      }
      if (this.days.friday.from.trim() === '' ||
        this.days.friday.to.trim() === '' ||
        parseFloat(this.days.friday.from) >= parseFloat(this.days.friday.to)) {
        document.getElementById('validate-edit-friday').style.display = "block";
        errors.friday = 'error';
      }
      if (this.days.saturday.from.trim() === '' ||
        this.days.saturday.to.trim() === '' ||
        parseFloat(this.days.saturday.from) >= parseFloat(this.days.saturday.to)) {
        document.getElementById('validate-edit-saturday').style.display = "block";
        errors.saturday = 'error';
      }
      if (this.days.sunday.from.trim() === '' ||
        this.days.sunday.to.trim() === '' ||
        parseFloat(this.days.sunday.from) >= parseFloat(this.days.sunday.to)) {
        document.getElementById('validate-edit-sunday').style.display = "block";
        errors.sunday = 'error';
      }

      if (Object.keys(errors).length) {
        return false
      }
      return true
    },
    mockEditGym: function (newGym) {
      const gyms = this.getGyms();

      for (const gym in gyms) {
        if (gyms[gym].id === this.gymId) {
          const index = gyms.indexOf(gyms[gym]);
          gyms[index] = { ...newGym };
        }
      }

      this.setGyms(gyms);
      this.getGyms();
      this.$emit("update");
      document.getElementById("close-edit-modal").click();
    },
    editGym: function () {
      const newGym = {
        city: this.city,
        name: this.name,
        address: this.address,
        phone_nr: this.phone_nr,
        days: {
          monday: {
            from: this.days.monday.from,
            to: this.days.monday.to,
          },
          tuesday: {
            from: this.days.tuesday.from,
            to: this.days.tuesday.to,
          },
          wednesday: {
            from: this.days.wednesday.from,
            to: this.days.wednesday.to,
          },
          thursday: {
            from: this.days.thursday.from,
            to: this.days.thursday.to,
          },
          friday: {
            from: this.days.friday.from,
            to: this.days.friday.to,
          },
          saturday: {
            from: this.days.saturday.from,
            to: this.days.saturday.to,
          },
          sunday: {
            from: this.days.sunday.from,
            to: this.days.sunday.to,
          },
        },
      };

      if (this.validate()) {
        editGym(this.gymId, newGym, this.mockEditGym);
      }
    },
  },
});
