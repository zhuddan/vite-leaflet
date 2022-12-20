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
  const wmsUrl = 'http://192.168.1.80:9999/geoserver/yun-nan/wms';
  const wmsLayer = L.Geoserver.wms(wmsUrl, {
    layers: 'yun-nan:yn',
  });
  wmsLayer.addTo(map);
}
onMounted(init);
</script>

<template>
  <div ref="mapRef" class="map-container flex-fill">
  </div>
</template>

<style lang="scss">

</style>