<script setup lang="ts">
import L from 'leaflet';
import { useDateFormat, useNow } from '@vueuse/core';

const mapRef = ref();
const box = ref();
function init() {
  const center = L.latLng(40.712216, -74.22655);
  const map = L.map(mapRef.value!, {
    zoom: 10,
    center,
    preferCanvas: true,
    attributionControl: false,
    zoomControl: false,

  });

  const k = 'AmDsXBzY8Vh5E4NDfpjlGP4PfIt4fP8-Zv-dxLv3lIzAbqjYWq0Ysf4687hC0gja';
  const bingLayer = L.tileLayer.bing(k, {
    imagerySet: 'CanvasDark',
  });
  bingLayer.addTo(map);

  const div = new L.Popup({
    interactive: true,
    content: box.value!,
    closeButton: false,
  }).setLatLng(center);

  const tooltip = L.tooltip()
    .setLatLng(center)
    .setContent('Hello world!<br />This is a nice tooltip.')
    .addTo(map);

  const imageUrl = 'https://maps.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
    imageBounds: L.LatLngBoundsExpression = [[40.712216, -74.22655], [40.773941, -74.12544]];
  L.imageOverlay(imageUrl, imageBounds).addTo(map);
}

const formatted = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss');
onMounted(init);
</script>

<template>
  <div ref="box" class="box">
    <p class="text-t color bg-red pa-2">
      {{ formatted }}
    </p>
  </div>
  <div ref="mapRef" class="map-container flex-fill">
  </div>
</template>

<style lang="scss">

</style>