import L from '@/leaflet';
import type { Ref } from 'vue';
import yn_border from '@/libs/yn_border.json';

export function useLeafletMap(mapRef: Ref, handle: (map: L.Map) => void) {
  let map: Nullable<L.Map> = null;
  // const center = L.latLng(24.81, 102.4);
  const center = L.latLng(0, 0);
  async function init() {
    map = L.map(mapRef.value!, {
      zoom: 2,
      center,
      preferCanvas: true,
    });
    L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '',
    }).addTo(map);
    L.geoJSON(yn_border as any).addTo(map);
    await nextTick();
    handle(map);
  }
  onMounted(init);
}