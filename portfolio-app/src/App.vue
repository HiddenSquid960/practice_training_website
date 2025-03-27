<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HomePage msg="Hello Vue 3.0 + Vite" />
</template>

<script>
import About from './components/About-Page/About.vue';
import HomePage from './components/Home-Page/HomePage.vue';
import Projects from './components/Projects-Page/Projects.vue';

export default {
  name: 'App',
  components: {
    HomePage,
    About,
  }
}
</script>
