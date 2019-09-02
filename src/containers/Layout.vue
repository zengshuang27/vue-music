<template>
  <div>
    <TopNav />
    <router-view></router-view>
  </div>
</template>

<script>
import TopNav from '../components/TopNav'

export default {
  name: 'Layout',
  data () {
    return {
      
    }
  },
  components:{
    TopNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
