Vue.component("edit-modal", {
  props: ["gymId", "getGyms", "setGyms"],
  data: function () {
    return {
      gymid: this.gymId,
    };
  },
  computed: {
    gymData: function () {
      const gyms = this.getGyms();
      for (const gym in gyms) {
        if (gyms[gym].id === this.gymid) {
          return gyms[gym].id;
        }
      }
    }
  },
  template: `
          <div
          class="modal fade"
          id="editModal"
          >
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
                {{gymData}}
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
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
    editGym: function () {
      const gyms = this.getGyms();
      const newGym = {
        city: this.city,
        name: this.name,
        address: this.address,
        phone_nr: this.phone_nr,
        days: { ...this.days },
      };

      for (const gym in gyms) {
        if (gyms[gym].id === this.gymid) {
          const index = gyms.indexOf(gyms[gym]);
          gyms[index] = newGym;
        }
      }

      this.setGyms(gyms);
      this.getGyms();
      this.$emit("update");
    },
  },
});
