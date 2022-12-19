declare module 'leaflet' {
  namespace LayerGroup {
    class Collision extends LayerGroup {
      constructor(option?: CollisionConstructorOption);
    }
    function collision(option?: CollisionConstructorOption): L.LayerGroup.Collision;
  }

  namespace FeatureGroup{
    class Collision extends FeatureGroup {
      constructor(option?: CollisionConstructorOption);
    }
    function collision(option?: CollisionConstructorOption): L.FeatureGroup.Collision;
  }

  namespace GeoJSON{
    class Collision extends GeoJSON {
      constructor(option?: CollisionConstructorOption);
    }
    function collision(option?: CollisionConstructorOption): L.GeoJSON.Collision;
  }

  namespace layerGroup {
    function collision(option?: CollisionConstructorOption): L.LayerGroup.Collision;
  }

  namespace featureGroup {
    function collision(option?: CollisionConstructorOption): L.FeatureGroup.Collision;
  }

  namespace geoJson {
    function collision(option?: CollisionConstructorOption): L.GeoJSON.Collision;
  }
}

export default L;
