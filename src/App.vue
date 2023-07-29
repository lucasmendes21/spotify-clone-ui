<template>
  <div class="flex">
    <Header />
    <div class="w-full max-h-full">
      <Navbar />
      <Content />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
import Content from './components/Content.vue'

export default {
  components: {
    Header,
    Navbar,
    Content
  }
}
</script>
