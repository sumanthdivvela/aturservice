<template>
  <div id="app">
    <Main msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Main from './components/main/Main.vue'

export default {
  name: 'app',
  components: {
    Main
  }
}
</script>

<style>

@font-face {
  font-family: 'iconfont';
  src: url('./assets/fonts/iconfont.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

[data-icon]:before {
    font-family: iconfont!important;
    font-style: normal!important;
    font-weight: 400!important;
    font-variant: normal!important;
    text-transform: none!important;
    speak: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

[data-icon]:before {
  padding: 4px;
    content: attr(data-icon);
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}

body{
   margin: 0px;
  
}
</style>
