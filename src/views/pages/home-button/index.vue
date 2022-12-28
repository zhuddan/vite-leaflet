<script setup lang="ts">
import L from 'leaflet';

import axios from 'axios';
import { HomeButtonControl } from './HomeButtonControl';
const mapRef = ref();
async function init() {
  const yn_border = (await axios.get('/geoJson/yn_border.json.gz', { responseType: 'json', decompress: true })).data;
  const border = new L.LatLngBounds([29.225562098500056, 106.19688062850005], [21.142788784250072, 97.5279147990001]);
  const map = L.map(mapRef.value!, {
    zoomSnap: .01,
    zoomDelta: .1,
    preferCanvas: true,
    attributionControl: false,
  });
  const wmsUrl = 'http://192.168.1.80:9999/geoserver/yun-nan/wms';
  L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '',
  }).addTo(map).setZIndex(0);
  L.Geoserver.wms(wmsUrl, {
    layers: 'yun-nan:yn',
  }).addTo(map).setZIndex(1);
  new L.GeoJSON(yn_border, {}).setZIndex(2).addTo(map);
  map.fitBounds(border);
  new HomeButtonControl().addTo(map);
  L.control.scale({
    imperial: false,
  }).addTo(map);
}
onMounted(init);
</script>

<template>
  <div ref="mapRef" class="map-container flex-fill">
  </div>
</template>

<style lang="scss">

</style>