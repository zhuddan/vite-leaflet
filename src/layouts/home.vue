<script setup lang="ts">
import AppBar from '@/components/App/Bar/AppBar.vue';
</script>

<template>
  <v-app>
    <AppBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style scoped>

</style>