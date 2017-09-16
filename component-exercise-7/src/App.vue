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

import Header from './Header.vue'
import Footer from './Footer.vue'
import ServerIndex from './ServerIndex.vue'

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
