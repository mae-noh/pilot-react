<template>
  <div id="app">
    <div id="nav">
      <span v-if="$route.path == '/login'"><router-link to="/login">Login</router-link></span>
      <span v-else> <router-link to="/v1/users/me">UserInfo</router-link></span>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>