<template>
  <div class="container">
    <header-app></header-app>
    <hr>
      <server-index></server-index>
    <hr>
    <footer-app></footer-app>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import ServerIndex from './components/ServerIndex.vue'

export default {
  components: {
    'header-app': Header,
    'footer-app': Footer,
    'server-index': ServerIndex
  }
}
</script>

<style>

</style>
