<script setup lang="ts">
import AppBar from '@/components/App/Bar/AppBar.vue';
import AppDrawer from '@/components/App/Drawer/AppDrawer.vue';
</script>

<template>
  <v-app>
    <AppBar />
    <AppDrawer />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style scoped>

</style>