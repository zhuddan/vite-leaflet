<script setup lang="ts">
import { cities } from '@/libs/cities';
import L from '@/leaflet';
import { useLeafletMap } from '@/hooks/map/useLeafletMap';
const mapRef = ref();
useLeafletMap(mapRef, init);
function init(map: L.Map) {
  const collisionLayer = L.LayerGroup.collision({ margin: 5 });
  for (let i = 0; i < cities.features.length; i++) {
    const feat = cities.features[i];
    const labelClass = `city-label city-label-${feat.properties.scalerank}`;
    const marker = L.marker(L.GeoJSON.coordsToLatLng(feat.geometry.coordinates as any), {
      icon: L.divIcon({
        html: `<span class='${labelClass}'>${feat.properties.name}</span>`,
      }),
      interactive: false,
    });
    collisionLayer.addLayer(marker);
  }
  collisionLayer.addTo(map);
}
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