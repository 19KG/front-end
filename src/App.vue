<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .el-rate__icon {
    font-size: 30px;
  }

  .el-rate__text {
    font-size: 30px;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .el-loading-mask.is-fullscreen .el-loading-spinner .circular {
    height: 100px;
    width: 100px;
  }

  .el-loading-spinner {
    top: 40%;
  }

  .el-loading-spinner .el-loading-text {
    margin: 10px 0;
    font-size: 18px;
  }

</style>
