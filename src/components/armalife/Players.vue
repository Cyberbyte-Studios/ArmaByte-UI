<template>
  <section class="content">
    <div class="row center-block">
      <h2>Data tables</h2>
      <div class="col-md-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Data Table With Full Features</h3>
          </div>
          <!-- /.box-header -->
          <div class="box-body">
            <div class="dataTables_wrapper form-inline dt-bootstrap" id="example1_wrapper">
              <div class="row">
                <div class="col-sm-6">
                  <div id="example1_length" class="dataTables_length">

                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-12">
                  <table aria-describedby="example1_info" role="grid" id="example1" class="table table-bordered table-striped dataTable">
                    <thead>
                    <tr>
                      <th>life.player.uid</th>
                      <th>life.general.name</th>
                      <th>life.general.pid</th>
                      <th>life.player.cash</th>
                      <th>life.player.bank</th>
                      <th>life.player.rank.cop</th>
                      <th>life.player.rank.medic</th>
                      <th>life.player.rank.donator</th>
                      <th>life.player.rank.admin</th>
                    </tr>
                    </thead>

                    <tfoot>
                    <tr>
                      <th>life.player.uid</th>
                      <th>life.general.name</th>
                      <th>life.general.pid</th>
                      <th>life.player.cash</th>
                      <th>life.player.bank</th>
                      <th>life.player.rank.cop</th>
                      <th>life.player.rank.medic</th>
                      <th>life.player.rank.donator</th>
                      <th>life.player.rank.admin</th>
                    </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
            <!-- /.box-body -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from 'jquery'

// Require needed datatables modules
require('datatables.net')
require('datatables.net-bs')

module.exports = {
  name: 'Tables',
  mounted: function () {
    this.$nextTick(function () {
      $('#example1').DataTable({
        processing: true,
        serverSide: true,
        ajax: {
          url: 'http://localhost/api/armalife/datatable/players',
          type: 'GET',
          data: {
            _token: 'Ca1P1Dw54RRt9qhjiWtqmz6Ck5qPEkTEwEUBLvHL'
          }
        }
      })
    })
  }
}
</script>

<style>
@import url('/static/js/plugins/datatables/dataTables.bootstrap.css');

table.dataTable thead .sorting:after, table.dataTable thead .sorting_asc:after, table.dataTable thead .sorting_desc:after {
  font-family: 'FontAwesome';
}

table.dataTable thead .sorting:after {
  content: "\f0dc";
}

table.dataTable thead .sorting_asc:after {
  content: "\f0dd";
}

table.dataTable thead .sorting_desc:after {
  content: "\f0de";
}
</style>
