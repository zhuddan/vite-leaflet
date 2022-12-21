<script setup lang="ts">
import L from 'leaflet';
import { useDateFormat, useNow } from '@vueuse/core';

const mapRef = ref();
const box = ref();

const Kitten = L.TileLayer.extend({
  createTile(coords: any) {
    const tile = document.createElement('canvas');

    const tileSize = this.getTileSize();
    tile.setAttribute('width', tileSize.x);
    tile.setAttribute('height', tileSize.y);
    tile.style.border = '1px solid red';
    const ctx = tile.getContext('2d')!;

    // Draw whatever is needed in the canvas context
    // For example, circles which get bigger as we zoom in
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.arc(tileSize.x / 2, tileSize.x / 2, 4 + coords.z * 4, 0, 2 * Math.PI, false);
    ctx.fill();

    return tile;
  },
  getAttribution() {
    return '<a href=\'https://placekitten.com/attribution.html\'>PlaceKitten</a>';
  },
});

function init() {
  const center = L.latLng(22, 110);
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
  new Kitten().addTo(map);
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