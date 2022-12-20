/// <reference types="leaflet" />

import type * as L from 'leaflet';

declare module 'leaflet' {
  namespace Geoserver {
    export function wms(baseLayerUrl: string, options?: any): L.FeatureGroup;
    export function wfs(baseLayerUrl: string, options?: any): L.FeatureGroup;
    export function legend(baseLayerUrl: string, options?: any): L.FeatureGroup;
    export function wmsImage(baseLayerUrl: string, options?: any): L.FeatureGroup;
  }
}
// FeatureGroup