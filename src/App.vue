<template>  
  <div id="app">
    <keep-alive> <router-view></router-view> </keep-alive>
    <MainTabBar/> 
  </div>
</template>

<script>
import MainTabBar from './components/MainTabBar.vue'
export default{
  components: {
    MainTabBar
  }
}
</script>

