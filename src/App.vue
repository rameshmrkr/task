<template>
  <div id="app">
  <div class="github">
  <div class="header  wrapper">
      <div class="container">
        <div class="logo">
          <p> Dev Jobs </p>
        </div>
        <div class="theme">
            <md-switch v-model="boolean" @change="changeTheme" class="md-primary">
            {{boolean ?"light" : "dark"}}
            </md-switch>
        </div>  
      </div>
    </div>
  </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>

export default {
  name: 'App',
  data () {
    return {
      boolean:false
    }
  },
  methods: {
    changeTheme:function(){
      this.$material.theming.theme = this.boolean ? "dark":"default";
    }
  },
  mounted: function () {
    this.$material.theming.theme = "default";
  },
}
</script>
