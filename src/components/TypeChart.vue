<template>
  <canvas id="chart-container">
  </canvas>
</template>

<script>
import Chart from 'chart.js';

const backgroundColor = [
  'rgba(253, 193, 181, 0.3)',
  'rgba(134, 58, 234, 0.3)',
  'rgba(255, 206, 86, 0.3)',
  'rgba(75, 192, 192, 0.3)',
  'rgba(113, 102, 255, 0.3)',
  'rgba(245, 78, 27, 0.3)'
]

const borderColor = [
  'rgba(253, 193, 181, 1)',
  'rgba(134, 58, 234, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(113, 102, 255, 1)',
  'rgba(245, 78, 27, 1)'
]

export default {
    name: 'TypeChart',
    props: ['data', 'labels', 'options', 'title', 'type'],
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
                    this.chart = new Chart(self, {
                        type: this.type,
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