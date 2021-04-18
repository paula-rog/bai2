Vue.component("chart-city", {
    props: ['getGyms'],
    data: function () {
        return {
            gyms: this.getGyms(),
        };
    },
    computed: {
        gymsInCity: function() {
            const cities = this.gyms.map((gym) => gym.city)
            let count = {};
            cities.forEach(function(i) { count[i] = (count[i]||0) + 1;});
            return count;
        },
        labels: function () {
            return Object.keys(this.gymsInCity);
        },
        chartData: function () {
            return Object.values(this.gymsInCity);
        },
        ctx: function () {
            return document
                .getElementById("gymsInCityChart")
                .getContext("2d");
        },
        chart: function () {
            return new Chart(this.ctx, {
                type: "doughnut",
                data: {
                    labels: this.labels,
                    datasets: [
                        {
                            backgroundColor: [
                                "rgba(255, 99, 132, 0.2)",
                                "rgba(54, 162, 235, 0.2)",
                                "rgba(255, 206, 86, 0.2)",
                                "rgba(75, 192, 192, 0.2)",
                                "rgba(153, 102, 255, 0.2)",
                                "rgba(255, 159, 64, 0.2)",
                            ],
                            borderColor: [
                                "rgba(255, 99, 132, 0.4)",
                                "rgba(54, 162, 235, 0.4)",
                                "rgba(255, 206, 86, 0.4)",
                                "rgba(75, 192, 192, 0.4)",
                                "rgba(153, 102, 255, 0.4)",
                                "rgba(255, 159, 64, 0.4)",
                            ],
                            data: this.chartData,
                        },
                    ],
                },
                plugins: [
                  {
                    beforeInit: function (chart, options) {
                      chart.legend.afterFit = function () {
                        this.height = this.height + 20;
                      };
                    },
                  },
                ],
            });
        },
    },
    mounted: function () {
        return this.chart;
    },
    template: `
            <section class="chart">
            <canvas
                id="gymsInCityChart"
                width="500"
                height="200"
                aria-label="Number of gyms in each city"
                role="img"
            >
                <p>Your browser does not support the canvas element.</p>
            </canvas>
            </section>
          `,
});
