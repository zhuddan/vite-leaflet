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

  const popup = L.popup();

  function onMapClick(e: any) {

  }
  function onLocationError(e: any) {
    console.log(e.message);
  }

  map.on('locationerror', onLocationError);
  function onLocationFound(e: any) {
    const radius = e.accuracy;

    L.marker(e.latlng).addTo(map)
      .bindPopup(`You are within ${radius} meters from this point`).openPopup();

    L.circle(e.latlng, radius).addTo(map);
  }

  map.on('locationfound', onLocationFound);

  map.on('mousemove', onMapClick);
}
onMounted(init);
</script>

<template>
  <div ref="mapRef" class="map-container flex-fill">
  </div>
</template>

<style lang="scss">

</style>