<template>
  <div id="nav">
    <router-link to="/Designer">Designer</router-link> |
    <router-link to="/Editor">Editor</router-link> |
    <router-link to="/MDesign">MaterialDesign</router-link> |
    <router-link to="/DevEx">DevExpress</router-link> |
    <router-link to="/about">Control</router-link> |
    <router-link to="/DevExTest">DevExTest</router-link> |
    <router-link to="/DevExTestApi">DevExTestApi</router-link> |
    <router-link to="/SyncFusionTest">SyncFusionTest</router-link> |
    <router-link to="/VuetifyTest">VuetifyTest</router-link>
  </div>
</template>

<script>
export default {
  name: "AppNavigation"
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 5px;

  a {
    font-weight: bold;
    color: $maincolorfont;

    &.router-link-exact-active {
      color: $maincolorgrey;
    }
  }
}
</style>
