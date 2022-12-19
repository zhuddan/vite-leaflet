<script setup lang="ts">
import { cities } from '@/libs/cities';
import L from '@/leaflet';
import { useLeafletMap } from '@/hooks/map/useLeafletMap';
const mapRef = ref();

function init() {
  const center = L.latLng(24.81, 102.4);
  const map = L.map(mapRef.value!, {
    zoom: 10,
    center,
    preferCanvas: true,
    attributionControl: false,
  });
  const wmsLayer = L.Geoserver.wms('http://localhost:9999/geoserver/yun-nan/wms', {
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
.map-container {

  .city-label {
    background: white;
    position: relative;
    display: inline-block;
    white-space: nowrap;
    font-size: 18px;
    padding: 0 10px;
    transform: translateY(-50%);
    top: 50%;
    left: 15px;
  }

  .city-label-0 {
    font-size: 20px;
  }

  .city-label-1 {
    font-size: 19px;
  }

  .city-label-2 {
    font-size: 18px;
  }

  .city-label-3 {
    font-size: 17px;
  }

  .city-label-4 {
    font-size: 16px;
  }

  .city-label-5 {
    font-size: 15px;
  }

  .city-label-6 {
    font-size: 14px;
  }

  .city-label-7 {
    font-size: 13px;
  }

  .city-label-8 {
    font-size: 12px;
  }

  .city-label-9 {
    font-size: 11px;
  }

  .city-label-10 {
    font-size: 10px;
  }

  .leaflet-marker-icon{
    border-radius: 20px;
  }

  .point{
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background-color: red;
    display: block;
  }
}
</style>