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
        gymsNowOpen: function () {
            const date = new Date();
            let countOpen = 0;
            this.gyms.map((gym) => {
                const hourFrom = gym.days[`${this.dayToday}`].from.split(':');
                const hourTo = gym.days[`${this.dayToday}`].to.split(':');

                if (parseInt(hourFrom[0]) === parseInt(date.getHours())) {
                    if (parseInt(hourFrom[1]) <= parseInt(date.getMinutes())) {
                        countOpen += 1;
                    }
                } else if ((parseInt(hourTo[0]) === parseInt(date.getHours()))) {
                    if (parseInt(hourFrom[1]) >= parseInt(date.getMinutes())) {
                        countOpen += 1;
                    }
                } else if (parseInt(hourFrom[0]) <= parseInt(date.getHours()) && parseInt(hourTo[0]) >= parseInt(date.getHours())) {
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
            return [this.gymsNowOpen, this.allGyms - this.gymsNowOpen];
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
