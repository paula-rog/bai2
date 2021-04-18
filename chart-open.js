Vue.component("chart-open", {
    props: ['getGyms'],
    data: function () {
        return {
            gyms: this.getGyms(),
        };
    },
    computed: {
        dayToday: function () {
            const date = new Date();
            const weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
            return weekdays[date.getDay()];
        },
        getHour: function () {
            const date = new Date();
            return date.getHours();
        },
        gymsNowOpen: function () {
            let countOpen = 0;
            this.gyms.map((gym) => {
                if (parseInt(gym.days[`${this.dayToday}`].from) <= this.getHour && parseInt(gym.days[`${this.dayToday}`].to) >= this.getHour) {
                    countOpen += 1;
                }
            })
            return countOpen;
        },
        allGyms: function () {
            return this.gyms.length;
        },
        labels: function () {
            return ['Open', 'Closed'];
        },
        chartData: function () {
            return [this.gymsNowOpen, this.allGyms];
        },
        ctx: function () {
            return document
                .getElementById("currentlyOpenGymsChart")
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
                                "rgba(153, 102, 255, 0.2)",
                                "rgba(255, 99, 132, 0.2)",
                            ],
                            borderColor: [
                                "rgba(153, 102, 255, 0.4)",
                                "rgba(255, 99, 132, 0.4)",
                                "rgba(54, 162, 235, 0.4)",
                            ],
                            data: this.chartData,
                        },
                    ],
                },
            });
        },
    },
    mounted: function () {
        return this.chart;
    },
    template: `
            <section class="chart">
            <canvas
                id="currentlyOpenGymsChart"
                width="500"
                height="200"
                aria-label="Currently Open Gyms"
                role="img"
            >
                <p>Your browser does not support the canvas element.</p>
            </canvas>
            </section>
          `,
});
