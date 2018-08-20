<template>
  <div>
    <div class="userAvatar">
      <img src="../assets/logo.png">
    </div>
    <div class="carousel-div">
      <el-carousel :interval="4000" type="card" height="500px">
        <el-carousel-item v-for="item in 5" :key="item">
          <img v-bind:src="'/static/' + item.toString() + '.jpg'" class="carousel-img">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
  export default {
    name: "UserPage",
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .carousel-div {
    width: 640px;
    margin-left: auto;
    margin-right: auto;
  }

  .carousel-img {
    height: 500px;
  }
</style>
