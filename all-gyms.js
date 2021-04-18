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
  template: `
      <div class="padding-20">
        <div v-if="loading">
          <div class="loader">Loading...</div>
        </div>
        <div v-else :key="rerenders" class="d-flex flex-row flex-wrap">
          <div class="d-flex flex-row flex-wrap justify-content-center width-100 padding-20">
            <chart-city class="single-chart-width" :getGyms=getGyms></chart-city>
            <chart-open class="single-chart-width" :getGyms=getGyms></chart-open>
          </div>
          <div class="d-flex flex-row flex-wrap width-100 justify-content-around">
            <div v-for="gym in gyms" class="single-gym-width">
                <single-gym :gymData=gym :getGyms=getGyms :setGyms=setGyms v-on:getGymId=getGymId v-on:update=reloadGyms></single-gym>
            </div>
          </div>
        </div>
        <add-modal :getGyms=getGyms :setGyms=setGyms v-on:update=reloadGyms></add-modal>
        <edit-modal :gymId=selectedGymId :getGyms=getGyms :setGyms=setGyms v-on:update=reloadGyms></edit-modal>
      </div>
    `,
  methods: {
    fetchData: async function () {
      await fetch("https://my.api.mockaroo.com/gyms?key=7d3e0910")
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
      const savedGyms = localStorage.getItem("gyms");
      return JSON.parse(savedGyms);
    },
    setGyms: function (gyms) {
      this.gyms = gyms;
      localStorage.setItem("gyms", JSON.stringify(gyms));
    },
    reloadGyms: function () {
      this.forceRerender();
    },
    getGymId: function (id) {
      this.selectedGymId = id;
    },
  },
});
