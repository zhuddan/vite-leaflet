<script setup lang="ts">
const route = useRoute();
const active = computed(() => route.path === '/');
</script>

<template>
  <v-btn to="/" :active="active">
    home
  </v-btn>
</template>

<style scoped>

</style>