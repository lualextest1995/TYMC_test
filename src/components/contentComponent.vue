<template>
  <div class="content">
    <menuComponent />
    <div class="top">
      <picChart />
      <barChart />
      <lineChart />
    </div>
    <div class="middle">
      <mixChart />
      <barChart />
      <lineChart />
    </div>
    <div class="bottom">
      <div class="table">
        <tableComponent />
      </div>
      <div class="tableContainer">
        <div class="left">
          <tableComponent />
        </div>
        <div class="right">
          <tableComponent />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import menuComponent from './MenuComponent.vue'
import picChart from './picChart.vue'
import mixChart from './mixChart.vue'
import barChart from './barChart.vue'
import lineChart from './lineChart.vue'
import tableComponent from './tableComponent.vue'
</script>

<style lang="scss" scoped>
.content {
  max-height: calc(100vh - 100px);
  position: relative;
  .top,
  .middle,
  .bottom {
    margin-left: 60px;
  }
  .top,
  .middle {
    height: 170px;
    display: flex;
  }
  .bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 230px;
    .table {
      width: 98%;
    }
    .tableContainer {
      display: flex;
      width: 100%;
      .left,
      .right {
        flex: 1;
        margin: 0 20px;
        border: 1px solid black;
      }
    }
  }
}
</style>
