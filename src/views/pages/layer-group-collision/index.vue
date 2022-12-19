<script setup lang="ts">
import Map from './map.vue';
const link = 'https://github.com/MazeMap/Leaflet.LayerGroup.Collision';
</script>

<template>
  <div class="fill-height d-flex flex-column ">
    <AppTitle :link="link" />
    <Map />
  </div>
</template>

<style scoped>

</style>