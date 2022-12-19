import L from 'leaflet';
interface WMSOptions {
  layers: string;
}
declare module 'leaflet' {
  namespace Geoserver{
    function wms(url: string, wmsOptions: WMSOptions): L.Layer;
  }
}

export default L;
