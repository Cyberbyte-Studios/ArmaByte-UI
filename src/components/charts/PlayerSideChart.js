import { Pie, reactiveProp } from 'vue-chartjs'

export default Pie.extend({
  mixins: [reactiveProp],
  props: ['chartData', 'options'],
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
})
