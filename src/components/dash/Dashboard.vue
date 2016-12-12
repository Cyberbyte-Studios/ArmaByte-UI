<template>
  <!-- Main content -->
  <section class='content'>
    <!-- Info boxes -->
    <div class='row'>
      <div class='col-md-3 col-sm-6 col-xs-12'>
        <div class='info-box'>
          <span class='info-box-icon bg-aqua'><i class='ion ion-ios-gear-outline'></i></span>

          <div class='info-box-content'>
            <span class='info-box-text'>CPU Traffic</span>
            <span class='info-box-number'>90<small>%</small></span>
          </div>
          <!-- /.info-box-content -->
        </div>
        <!-- /.info-box -->
      </div>
      <!-- /.col -->
      <div class='col-md-3 col-sm-6 col-xs-12'>
        <div class='info-box'>
          <span class='info-box-icon bg-red'><i class='fa fa-google-plus'></i></span>

          <div class='info-box-content'>
            <span class='info-box-text'>Likes</span>
            <span class='info-box-number'>41,410</span>
          </div>
          <!-- /.info-box-content -->
        </div>
        <!-- /.info-box -->
      </div>
      <!-- /.col -->

      <!-- fix for small devices only -->
      <div class='clearfix visible-sm-block'></div>

      <div class='col-md-3 col-sm-6 col-xs-12'>
        <div class='info-box'>
          <span class='info-box-icon bg-green'><i class='ion ion-ios-cart-outline'></i></span>

          <div class='info-box-content'>
            <span class='info-box-text'>Sales</span>
            <span class='info-box-number'>760</span>
          </div>
          <!-- /.info-box-content -->
        </div>
        <!-- /.info-box -->
      </div>
      <!-- /.col -->
      <div class='col-md-3 col-sm-6 col-xs-12'>
        <div class='info-box'>
          <span class='info-box-icon bg-yellow'><i class='ion ion-ios-people-outline'></i></span>

          <div class='info-box-content'>
            <span class='info-box-text'>New Members</span>
            <span class='info-box-number'>2,000</span>
          </div>
          <!-- /.info-box-content -->
        </div>
        <!-- /.info-box -->
      </div>
      <!-- /.col -->
    </div>
    <!-- /.row -->

    <div class='col-xs-12'>
      <div class="box">
        <div class="box-header with-border">
          <h3 class="box-title"></h3>
          <div class="box-body">
            <div class="col-sm-6 col-xs-12">
              <p class="text-center">
                <strong>Web Traffic Overview</strong>
              </p>
              <canvas id="trafficBar" ></canvas>
            </div>
            <hr class="visible-xs">
            <div class="col-sm-6 col-xs-12">
              <p class="text-center">
                <strong>Player Sides</strong>
              </p>
              <player-side-chart :chartData="dashboard.sides"/>
            </div>
          </div>
        </div>
        <small class="space"><b>Pro Tip</b> Don't forget to star us on github!</small>
      </div>
    </div>
    <!-- /.row -->

    <!-- Main row -->
    <div class='row'>
      <div class='col-md-3 col-sm-6 col-xs-12'>
        <div class='info-box bg-yellow'>
          <span class='info-box-icon'><i class='ion ion-ios-pricetag-outline'></i></span>

          <div class='info-box-content'>
            <span class='info-box-text'>Inventory</span>
            <span class='info-box-number'>5,200</span>

            <div class='progress'>
              <div class='progress-bar' style='width: 50%'></div>
            </div>
                <span class='progress-description'>
                  50% Increase
                </span>
          </div>
          <!-- /.info-box-content -->
        </div>
      </div>
      <div class='col-md-3 col-sm-6 col-xs-12'>
        <div class='info-box bg-green'>
          <span class='info-box-icon'><i class='ion ion-ios-heart-outline'></i></span>

          <div class='info-box-content'>
            <span class='info-box-text'>Mentions</span>
            <span class='info-box-number'>92,050</span>

            <div class='progress'>
              <div class='progress-bar' style='width: 20%'></div>
            </div>
                <span class='progress-description'>
                  20% Increase
                </span>
          </div>
          <!-- /.info-box-content -->
        </div>
      </div>
      <div class='col-md-3 col-sm-6 col-xs-12'>
        <div class='info-box bg-red'>
          <span class='info-box-icon'><i class='ion ion-ios-cloud-download-outline'></i></span>

          <div class='info-box-content'>
            <span class='info-box-text'>Downloads</span>
            <span class='info-box-number'>114,381</span>

            <div class='progress'>
              <div class='progress-bar' style='width: 70%'></div>
            </div>
                <span class='progress-description'>
                  70% Increase
                </span>
          </div>
          <!-- /.info-box-content -->
        </div>
      </div>
      <div class='col-md-3 col-sm-6 col-xs-12'>
        <div class='info-box bg-aqua'>
          <span class='info-box-icon'><i class='ion-ios-chatbubble-outline'></i></span>

          <div class='info-box-content'>
            <span class='info-box-text'>Direct Messages</span>
            <span class='info-box-number'>163,921</span>

            <div class='progress'>
              <div class='progress-bar' style='width: 40%'></div>
            </div>
                <span class='progress-description'>
                  40% Increase
                </span>
          </div>
          <!-- /.info-box-content -->
        </div>
      </div>
    </div>
    <!-- /.row -->
  </section>
  <!-- /.content -->
</template>

<script>
import PlayerSideChart from '../charts/PlayerSideChart'

module.exports = {
  name: 'Dashboard',
  data: function () {
    return {
      dashboard: {
        sides: {
          labels: ['civ', 'cop', 'med'],
          datasets: [{
            label: 'thing',
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)'
            ],
            data: [10, 20, 30]
          }]
        }
      }
    }
  },
  components: { PlayerSideChart },
  computed: {
    personalNumbers: function () {
      return [12, 1000000, 10000]
    }
  },
  methods: {
    getDashboardStats: function () {
      this.$http.get('armalife/dashboard').then((response) => {
        console.log(response.data)
      }, (response) => {
        console.log('Unable to get dashboard data', response)
      })
    }
  },
  mounted: function () {
    this.getDashboardStats()
  }
}
</script>
<style>
.info-box {
  cursor: pointer;
}
.info-box-content {
  text-align: center;
  vertical-align: middle;
  display: inherit;
}
.fullCanvas {
  width: 100%;
}
</style>
