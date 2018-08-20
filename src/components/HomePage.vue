<template>
  <div class="hello">
    <div class="logo">
      <img src="../assets/logo.png">
    </div>
    <div class="search-bar">
      <el-input
        placeholder="请输入内容"
        v-model="input23">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-button v-for="item in userList">{{item}}</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      userList :[
        '1',
        '2',
        '3',
        '4',
        '5'
      ],
      searchUserID: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
