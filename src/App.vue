<template> 
    
    <Login></Login>
     <p>{{$store.state.name}}</p>

    <!--
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/main">About</router-link>
      </div>
      <router-view/>
    -->
</template>

<script>
import Login from './views/Login.vue'

export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style>
  @import 'styles.css';
</style>
