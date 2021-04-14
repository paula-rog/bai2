Vue.component("all-gyms", {
  data: function () {
    return {
      rerenders: 0,
      loading: true,
      selectedGymId: null,
      gyms: [],
    };
  },
  created() {
    this.fetchData();
  },
  update() {
    console.log("Update");
  },
  template: `
      <div>
        <div v-if="loading">
            <div>Loading</div>
        </div>
        <div v-else :key="rerenders" class="d-flex flex-row flex-wrap">
            <div v-for="gym in gyms">
                <single-gym :gymData=gym :getGyms=getGyms :setGyms=setGyms v-on:getGymId=getGymId v-on:update=reloadGyms></single-gym>
            </div>
        </div>
        <add-modal :getGyms=getGyms :setGyms=setGyms v-on:update=reloadGyms></add-modal>
        <edit-modal :gymId=selectedGymId :getGyms=getGyms :setGyms=setGyms></edit-modal>
      </div>
    `,
  methods: {
    fetchData: async function () {
      await fetch("https://my.api.mockaroo.com/gyms?key=77a9da90")
        .then((response) => response.json())
        .then((data) => {
          this.loading = false;
          this.render = false;
          this.gyms = data;
          localStorage.setItem("gyms", JSON.stringify(this.gyms));
        })
        .catch((error) => {
          this.loading = false;
          console.error(error);
        });
    },
    forceRerender() {
      this.rerenders += 1;
    },
    getGyms: function () {
      this.loading = false;
      const savedGyms = localStorage.getItem("gyms");
      return JSON.parse(savedGyms);
    },
    setGyms: function (gyms) {
      this.loading = true;
      this.gyms = gyms;
      localStorage.setItem("gyms", JSON.stringify(gyms));
    },
    reloadGyms: function () {
      console.log("Emited");
      this.forceRerender();
    },
    getGymId: function (id) {
      this.selectedGymId = id;
    },
  },
});