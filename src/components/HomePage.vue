<template>
  <div class="main-page">
    <div class="logo">
      <img src="../../static/logo.png" class="logo">
    </div>
    <div class="search-area">
      <el-input class="search-bar" v-model="searchUserID">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
        <router-link slot="append" :to="`/user/${searchUserID}`">
          <el-button icon="el-icon-search"></el-button>
        </router-link>
      </el-input>
      <div class="search-button-area">
        <router-link :to="`/user/${item}`" v-for="item in userList" :key="item" class="search-button">
          <el-button size="medium" type="primary" round plain>{{item}}</el-button>
        </router-link>
        <el-button class="search-button" icon="el-icon-refresh" size="medium" type="primary" round plain @click="getUserID"></el-button>
      </div>
    </div>
    <div class="footer">
      <p class="group-name">NTFKG</p>
    </div>
    <vue-canvas-nest :config="{color: '55, 140, 193', opacity: 1, zIndex: -2, count: 200}"></vue-canvas-nest>
  </div>
</template>

<script>
  import vueCanvasNest from 'vue-canvas-nest'

  export default {
    name: 'HomePage',
    data() {
      return {
        userList: [],
        searchUserID: ''
      }
    },
    components: {
      vueCanvasNest
    },
    methods: {
      getUserID() {
        this.$ajax.get('http://localhost:5000/uid_rec').then(response => {
          const data = response.data
          this.userList = data.uid_rec
        })
      }
    },
    mounted() {
      this.getUserID()
    }
  }
</script>

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

  .main-page {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .logo {
    width: 200px;
    margin-left: auto;
    margin-right: auto;
  }

  .search-area {
    margin-left: auto;
    margin-right: auto;
    width: 60%;
    max-width: 720px;
    min-width: 200px;
  }

  .search-bar {
    margin-top: 20px;
  }

  .search-button-area {
    margin-top: 20px;
  }

  .search-button {
    margin: 20px 10px 10px 0;
  }

  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 56px;
    text-align: left;
    font-size: 0.8rem;
    display: block;
    background: #f2f2f2;
    border-top: 1px solid #e4e4e4;
  }

  .group-name {
    font-size: 28px;
    font-weight: 700;
    margin-top: 10px;
    color: #a2a2a2;
    text-align: center;
  }

</style>
