<script setup>
import Header from './components/Header.vue'
import Slider from './components/Slider.vue'
import AboutUs from './components/AboutUs.vue'
import Gallery from './components/Gallery.vue'

</script>

<template>


  <Header/>
  <Slider/>
  <AboutUs/>
  <Gallery/>


  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
body {
  margin: 0;
}
</style>
