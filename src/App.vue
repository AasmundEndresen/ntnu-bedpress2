<template>
  <div id="nav">
    <honeybadger-logo class="logo" />
  </div>
  <router-view />
  <img
    src="./assets/mclaren.jpg"
    class="bg"
  >
</template>

<script setup>
import { HoneybadgerLogo } from './assets/svg'
import { useStore} from 'vuex'
const store = useStore()

store.dispatch('getCurrencies')
</script>

<style>
@import url('./assets/fonts/index.css');
:root, * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  --primary-color: #133b64;
}
#app {
  font-family: 'Montserrat';
  font-weight: 700;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--primary-color);
}

.bg {
  display: block;
  position: absolute;
  top: 0px;
  left: 0;
  z-index: -1;
  max-width: 100vw;
  opacity: 0.1;
}

.logo {
  max-width: 720px;
}

#nav {
  padding: 30px;
  overflow: hidden;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
