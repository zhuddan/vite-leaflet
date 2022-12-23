<script setup lang="ts">
import L, { GeoJSON } from 'leaflet';
import yn_border from '@/libs/yn_border.json';
import yn_city from '@/libs/yn_city.json';
import yn_county from '@/libs/yn_county.json';
import type { Datum } from './data';
import { data } from './data';
import { computedAsync } from '@vueuse/core';
import LayerControl from './LayerControl';
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
const ynCity = new GeoJSON(yn_city as any, {
  style() {
    return {
      color: 'red',
    };
  },
}).setZIndex(10);
const ynCounty = new GeoJSON(yn_county as any, {
  style() {
    return {
      color: 'yellow',
    };
  },
}).setZIndex(9);
async function init() {
  await nextTick();
  const ynBorder = new GeoJSON(yn_border as any, {
    style() {
      return {
        color: 'pink',
        weight: 10,
      };
    },
  }).setZIndex(1111);

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
  // const layerControl = new L.Control.Layers({}, baseMaps, {
  //   collapsed: false,
  //   autoZIndex: false,
  //   sortLayers: true,
  //   // sortFunction(...arg) {
  //   //   const [layerA, layerB, nameA, nameB] = arg;
  //   //   console.log([nameA, nameB]);
  //   //   if (nameA == '县边界') return 1;
  //   //   return -1 ;
  //   // },
  // }).addTo(map);

  map.on('moveend', async () => {
    level.value = 10;
  });

  map.fitBounds(b, {
    padding: [20, 20],
  });
  map?.setMinZoom(map.getZoom());
  const lc = new LayerControl({ layers: baseMaps });
  // lc.addTo(map);
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
const ynCityVisible = ref(false);
const ynCountyVisible = ref(false);

watch(ynCityVisible, (_ynCityVisible) => {
  if (!map) return;
  if (_ynCityVisible)
    ynCity.addTo(map);

  else
    ynCity.remove();
});

watch(ynCountyVisible, async (_ynCountyVisible) => {
  if (!map) return;
  if (_ynCountyVisible) {
    if (ynCityVisible.value) {
      ynCityVisible.value = false;
      await nextTick();
      ynCounty.addTo(map);
      ynCityVisible.value = true;
    }
    else {
      ynCounty.addTo(map);
    }
  }
  else {
    ynCounty.remove();
  }
});
</script>

<template>
  <div>
    <v-switch
      v-model="ynCityVisible"
      label="市边界"
      color="primary"
      value="primary"
      hide-details
      float
    />
    <v-switch
      v-model="ynCountyVisible"
      label="县边界"
      color="primary"
      value="primary"
      hide-details
      float
    />
  </div>
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