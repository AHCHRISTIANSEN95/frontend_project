<template>
  <div id="app">
    <div id="nav">
      <NavigationMenu/>
    </div>
    <router-view/>
    <BottomMenu/>
  </div>
  
</template>

<style lang="scss">
@import'./assets/styles/master.scss';


</style>

<script>
// @ is an alias to /src
import BottomMenu from './components/BottomMenu.vue'
import NavigationMenu from './components/NavigationMenu.vue'

export default {
  components: {
    BottomMenu,
    NavigationMenu
  }
}


</script>

