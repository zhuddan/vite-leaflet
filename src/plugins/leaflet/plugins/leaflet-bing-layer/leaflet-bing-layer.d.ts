/// <reference types="leaflet" />

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as L from 'leaflet';

declare module 'leaflet' {
  namespace tileLayer {
    export function bing(baseLayerUrl: any, options?: any): any;
  }
}
