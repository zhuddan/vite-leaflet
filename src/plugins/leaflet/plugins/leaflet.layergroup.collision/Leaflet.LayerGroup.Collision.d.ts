/// <reference types="leaflet" />

import type * as L from 'leaflet';
declare module 'leaflet' {
  namespace LayerGroup {
    export class Collision extends LayerGroup {
      constructor(option?: CollisionConstructorOption);
    }
    export function collision(option?: CollisionConstructorOption): L.LayerGroup.Collision;
  }

  namespace FeatureGroup{
    export class Collision extends FeatureGroup {
      constructor(option?: CollisionConstructorOption);
    }
    export function collision(option?: CollisionConstructorOption): L.FeatureGroup.Collision;
  }

  namespace GeoJSON{
    export class Collision extends GeoJSON {
      constructor(option?: CollisionConstructorOption);
    }
    export function collision(option?: CollisionConstructorOption): L.GeoJSON.Collision;
  }

  namespace layerGroup {
    export function collision(option?: CollisionConstructorOption): L.LayerGroup.Collision;
  }

  namespace featureGroup {
    export function collision(option?: CollisionConstructorOption): L.FeatureGroup.Collision;
  }

  namespace geoJson {
    export function collision(option?: CollisionConstructorOption): L.GeoJSON.Collision;
  }
}

