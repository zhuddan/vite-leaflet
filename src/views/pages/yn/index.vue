<script setup lang="ts">
import L, { GeoJSON } from 'leaflet';
import type { Datum } from './data';
import { data } from './data';
import axios from 'axios';
const mapRef = ref();
const pointLayer = new L.LayerGroup();
let map: Nullable<L.Map> = null;
let ynBorder: Nullable<L.GeoJSON> = null;
let ynCity: Nullable<L.GeoJSON> = null;
let ynCounty: Nullable<L.GeoJSON> = null;
const yn_county_wrap = new L.LayerGroup().setZIndex(9),
  yn_city_wrap = new L.LayerGroup().setZIndex(8),
  yn_border_wrap = new L.LayerGroup().setZIndex(10);
const isReady = ref(false);
const result = ref<Record<number, Datum[]>>({});
const level = ref(10);
const currentPoint = ref<Datum[]>([]);

async function getBoundsPoints() {
  const data = await getData();
  if (!map) {
    currentPoint.value = data;
    return;
  }
  const bounds = map.getBounds()!;
  const { lng: minLng, lat: minLat } = bounds.getSouthWest();
  const { lng: maxLng, lat: maxLat } = bounds.getNorthEast();
  currentPoint.value = data.filter((it) => {
    return it.lat >= minLat && it.lat <= maxLat
      && it.lon >= minLng && it.lon <= maxLng ;
  });
}

async function getData() {
  if (!data[level.value]) return [];
  if (!result[level.value]) {
    await data[level.value]().then((res) => {
      result.value[level.value] = res.data.flat();
    });
  }
  return result.value[level.value];
}

async function init() {
  const yn_county = (await axios.get('/geoJson/yn_county.json.gz', { responseType: 'json', decompress: true })).data;
  const yn_city = (await axios.get('/geoJson/yn_city.json.gz', { responseType: 'json', decompress: true })).data;
  const yn_border = (await axios.get('/geoJson/yn_border.json.gz', { responseType: 'json', decompress: true })).data;
  ynBorder = new GeoJSON(yn_border, {
    style() {
      return {
        color: '#111',
        weight: 1,
      };
    },
  });
  ynCity = new GeoJSON(yn_city, {
    style() {
      return {
        color: '#111',
        weight: 1,

      };
    },
  });
  ynCounty = new GeoJSON(yn_county, {
    style() {
      return {
        color: '#999',
        weight: 1,
      };
    },
  });
  const b = ynBorder.getBounds();
  map = L.map(mapRef.value!, {
    zoomSnap: .01,
    zoomDelta: .1,
    attributionControl: false,
  });
  yn_city_wrap.addTo(map);
  yn_border_wrap.addTo(map);
  yn_county_wrap.addTo(map);
  //
  yn_border_wrap.addLayer(ynBorder);
  yn_city_wrap.addLayer(ynCity);
  pointLayer.addTo(map);
  let isFirst = false;
  let minZoom = 0;
  const zoomExcess = 4.5;
  const maxLevel = 10;
  map.on('moveend', async () => {
    const currentZoom = map!.getZoom();
    if (!isFirst) {
      isFirst = true;
      minZoom = currentZoom;
      map?.setMinZoom(minZoom);
      map?.setMaxZoom(minZoom + zoomExcess);
    }
    const diff = currentZoom - minZoom;
    const o = Math.round(diff / zoomExcess * (maxLevel - 1));
    level.value = maxLevel - o;
    await nextTick();
    getBoundsPoints();
  });

  map.fitBounds(b, {
    padding: [20, 20],
  });
  isReady.value = true;
}
async function draw() {
  if (!isReady.value) return;
  await nextTick();
  const ls = pointLayer.getLayers();
  ls.forEach((e) => {
    pointLayer.removeLayer(e);
  });
  currentPoint.value.forEach((e) => {
    const m = new L.Marker([e.lat, e.lon], {
      icon: L.divIcon({
        className: 'my-div-icon',
        html: `<span class='m-point'>${e.val.toFixed(2)}</span>`,
      }),
    });
    pointLayer.addLayer(m);
  });
}

onMounted(init);
watch([currentPoint, isReady], draw, { deep: true });
const ynCountyVisible = ref(false);

watch(ynCountyVisible, (visible) => {
  if (!map) return;
  if (!ynCounty) return;
  if (visible)
    yn_county_wrap.addLayer(ynCounty);
  else
    yn_county_wrap.removeLayer(ynCounty);
});
</script>

<template>
  <div ref="mapRef" class="map-container flex-fill">
  </div>
</template>

<style lang="scss">
.map-container {
  .m-point{
    position: relative;
    font-size: 1.2em;
    display: inline-block;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    font-weight: 600;
  }

  .my-div-icon{
    border: none;
  }
}
</style>