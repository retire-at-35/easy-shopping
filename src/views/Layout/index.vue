<script setup>
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutNav from './components/LayoutNav.vue'
import LayoutFooter from './components/LayoutFooter.vue'
</script>
<template>
  <LayoutNav />
  <LayoutHeader />
  <router-view />
  <LayoutFooter />
</template>