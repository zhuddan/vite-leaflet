import L from 'leaflet';
interface LayerControlOption {
  layers?: Record<string, L.Layer>;
}
export default class LayerControl extends L.Control {
  private _container!: HTMLDivElement;
  private _map!: L.Map;
  private _section!: HTMLElement;
  private _baseLayersList!: HTMLDivElement;
  private _separator!: HTMLDivElement;
  private _overlaysList!: HTMLDivElement;
  _layers: any;
  _lastZIndex: any;
  constructor(options: LayerControlOption = {}) {
    super();
    for (const i in options.layers)
      this._addLayer(options.layers[i], i);
  }

  _addLayer(layer: L.Layer, name: string, overlay = false) {
    overlay;
    // if (this._map)
    //   layer.on('add remove', this._onLayerChange, this);

    // this._layers.push({
    //   layer,
    //   name,
    //   overlay,
    // });

    // if (this.options.autoZIndex && layer.setZIndex) {
    //   this._lastZIndex++;
    //   layer.setZIndex(this._lastZIndex);
    // }

    // this._expandIfNotCollapsed();
  }

  _expandIfNotCollapsed() {
    throw new Error('Method not implemented.');
  }

  onAdd(map: L.Map): HTMLElement {
    this.initLayout();
    this._map = map;
    return this._container;
  }

  protected initLayout() {
    const className = 'leaflet-control-layers';
    const container = L.DomUtil.create('div', className);
    container.setAttribute('aria-haspopup', 'true');
    L.DomEvent.disableClickPropagation(container);
    L.DomEvent.disableScrollPropagation(container);
    this._container = container;
    const section = this._section = L.DomUtil.create('section', `${className}-list`);
    this._baseLayersList = L.DomUtil.create('div', `${className}-base`, section);
    this._separator = L.DomUtil.create('div', `${className}-separator`, section);
    this._overlaysList = L.DomUtil.create('div', `${className}-overlays`, section);
    container.appendChild(section);
  }

  addTo(map: L.Map): this {
    super.addTo.call(this, map);
    return this;
  }
}
