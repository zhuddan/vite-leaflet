<script setup lang="ts">
import L from 'leaflet';
import yn_border from '@/libs/yn_border.json';
import yn_city from '@/libs/yn_city.json';
import yn_county from '@/libs/yn_county.json';
import type { Datum } from './data';
import { data } from './data';
import { computedAsync } from '@vueuse/core';
const mapRef = ref();

const result = ref<Record<number, Datum[]>>({});
const level = ref(10);
const currentPoint = computedAsync(
  async () => {
    return await getData();
  },
  [],
);

async function getData() {
  if (!data[level.value]) return [];
  if (!result[level.value]) {
    await data[level.value]().then((res) => {
      result.value[level.value] = res.data.flat();
    });
  }
  return result.value[level.value];
}
let map: Nullable<L.Map> = null;
async function init() {
  await nextTick();
  const ynBorder = L.geoJSON(yn_border as any, {
    style() {
      return {
        color: 'pink',
        weight: 10,
      };
    },
  }).setZIndex(1111);
  const ynCity = L.geoJSON(yn_city as any, {
    style() {
      return {
        color: 'red',
      };
    },
  }).setZIndex(10);
  const ynCounty = L.geoJSON(yn_county as any, {
    style() {
      return {
        color: 'yellow',
      };
    },
  }).setZIndex(9);
  const b = ynBorder.getBounds();
  map = L.map(mapRef.value!, {
    zoomSnap: .01,
    attributionControl: false,
  });
  ynBorder.addTo(map);

  const baseMaps = {
    市边界: ynCity,
    县边界: ynCounty,
  };
  const layerControl = new L.Control.Layers({}, baseMaps, {
    collapsed: false,
    autoZIndex: false,
    sortLayers: true,
    sortFunction(...arg) {
      const [layerA, layerB, nameA, nameB] = arg;
      console.log([nameA, nameB]);
      if (nameA == '县边界') return 1;
      return -1 ;
    },
  }).addTo(map);

  const _layerControlInputs = (layerControl as any)._layerControlInputs as HTMLInputElement[];
  _layerControlInputs.forEach((e) => {
    e.addEventListener('click', (it) => {
      console.log(it);
    });
  });
  console.log();
  map.on('moveend', async () => {
    level.value = 10;
  });

  map.fitBounds(b, {
    padding: [20, 20],
  });
  map?.setMinZoom(map.getZoom());
}

watch(currentPoint, draw, { deep: true });
async function draw() {
  currentPoint.value.forEach((e) => {
    const m = new L.Marker([e.lat, e.lon], {
      icon: L.divIcon({
        className: 'my-div-icon',
        html: `<span class='point'>${e.val.toFixed(2)}</span>`,
      }),
    }).addTo(map!);
  });
}

onMounted(init);
</script>

<template>
  <div ref="mapRef" class="map-container flex-fill">
  </div>
</template>

<style lang="scss">
.map-container {
  .point{
    position: relative;
    font-size: 1em;
    font-weight: 600;
    display: inline-block;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }

  .my-div-icon{
    border: none;
  }
}
</style>