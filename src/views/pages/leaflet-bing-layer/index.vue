<script setup lang="ts">
import L from 'leaflet';
const mapRef = ref();
function init() {
  const center = L.latLng(24.81, 102.4);
  const map = L.map(mapRef.value!, {
    zoom: 10,
    center,
    preferCanvas: true,
    attributionControl: false,
  });

  const k = 'AmDsXBzY8Vh5E4NDfpjlGP4PfIt4fP8-Zv-dxLv3lIzAbqjYWq0Ysf4687hC0gja';
  const bingLayer = L.tileLayer.bing(k, {
    imagerySet: 'CanvasDark',
  });
  bingLayer.addTo(map);
}
onMounted(init);
</script>

<template>
  <div ref="mapRef" class="map-container flex-fill">
  </div>
</template>

<style lang="scss">

</style>