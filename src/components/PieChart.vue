<template>
  <canvas id="chart-container">
  </canvas>
</template>

<script>
import Chart from 'chart.js';

const backgroundColor = [
  'rgba(28, 22, 23, 0.3)',
  'rgba(54, 162, 235, 0.3)',
  'rgba(255, 206, 86, 0.3)',
  'rgba(75, 192, 192, 0.3)',
  'rgba(153, 102, 255, 0.3)',
  'rgba(255, 159, 64, 0.3)'
]

const borderColor = [
  'rgba(255, 99, 132, 1)',
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)'
]

export default {
    name: 'PieChart',
    props: ['data', 'labels', 'options', 'title'],
    data() {
        return {
            chart: null
        }
    },
    watch:{
        data: {
            handler() {
                this.renderChart();
            }
        }
    },
    methods: {
        renderChart() {
            let self = this.$el.getContext('2d');

            try {
                if (this.chart) {
                    this.chart.destroy();
                }
                if (this.data) {
                    console.log(this.labels);
                    console.log('____');
                    console.log(this.options);
                    console.log('____');
                    console.log(this.data);
                    console.log('____');
                    console.log(this.title);
                    console.log('____');
                    this.chart = new Chart(self, {
                        type: 'doughnut',
                        data: {
                            labels: this.labels,
                            datasets: [{
                                data: this.data,
                                backgroundColor: this.generateColors(this.data.length, backgroundColor),
                                borderColor: this.generateColors(this.data.length, borderColor),
                                borderWidth: 1
                            }]
                        },
                        options: {}
                    });
                    console.log(this.chart);
                }
            }
            catch(e) {
                console.warn('Problème trouvé ! Regarde : ' + e);
            }
        },
        generateColors(size, colorList){
            let result = [];
            for(let i = 0; i < size; i++){
                result[i] = colorList[i % colorList.length]
            }
            return result;
        }
    }
}
</script>