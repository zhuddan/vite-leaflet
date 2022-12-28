import type { ControlPosition, ZoomPanOptions } from 'leaflet';
import L from 'leaflet';
import { merge } from 'lodash-es';
interface HomeButtonControlOptions {
  position: ControlPosition;
  text: string;
  title: string;
  className: string;
  //
  center?: L.LatLng | [number, number];
  zoom?: number;
  bounds?: L.LatLngBounds;
  padding?: L.PointExpression | [number, number];
  zoomPanOptions?: ZoomPanOptions;
}

const defaultHomeButtonControlOptions: HomeButtonControlOptions = {
  position: 'topleft',
  text: 'Default Extent',
  title: 'Zoom to default extent',
  className: 'leaflet-control-defaultextent',
  zoomPanOptions: {
    duration: 1e-1,
    animate: true,
  },
};

const bgBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAAHeTXxYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAVJJREFUeNpi/P//PwMyYIIx3N3dF8AFgByQsngQmxFdC0AAoQggK2fAlIEBgADCMAQZsCC5AVnVx507dwowgHSCsJub239kGoQBAginsUy47ELxL7J9YKOAAh+AbH6YINABjDgdgNMOnK4CCCC8oUDQxegA6NgGECbKJqDCC0BKH03dRaAPDfDZpE9IDKfzQGEHDj9qBQRAAFE39OinCS1VE4wnASD1HklIEBiKH3DahEUDCLyHimNN+AZYNCBrNMDqPHz+QI5oXAFxEKro4MDGE/2SEUCAkWUT3cKBbhYB040CTYMOWnXFIwktBKa1BKpYBM1HB3CUhfCCFIgd0DMqURZB89sGIJYnIYQeAnEA0MILxBQpDlAL+CmI+49QCw8QFXRYCguQAciuNUB3EK7agoVEl14AGuSA5BCQi+0HVT4i5CNHND56qioAYoGRWQQBAFdTvSRsYWMmAAAAAElFTkSuQmCC';

export class HomeButtonControl extends L.Control {
  private _container!: HTMLDivElement;
  private _map!: L.Map;
  options: HomeButtonControlOptions;
  constructor(opt: Partial<HomeButtonControlOptions> = {}) {
    super({
      position: 'topleft',
    });
    this.options = merge(defaultHomeButtonControlOptions, opt);
  }

  onAdd(map: L.Map) {
    this._map = map;
    return this._initLayout();
  }

  private _initLayout() {
    const container = L.DomUtil.create('div', `leaflet-bar ${
    this.options.className}`);
    this._container = container;
    this._createExtentButton();
    L.DomEvent.disableClickPropagation(container);
    this._map.whenReady(this._whenReady, this);
    return this._container;
  }

  _createExtentButton() {
    const link = L.DomUtil.create('a', `${this.options.className}-toggle`,
      this._container);
    link.href = '#';
    link.innerHTML = this.options.text;
    link.title = this.options.title;
    // style
    link.style.textIndent = '-9999px';
    link.style.whiteSpace = 'nowrap';
    link.style.backgroundImage = `url(${bgBase64})`;
    link.style.width = '30px';
    link.style.height = '30px';
    link.style.display = 'block';
    //
    L.DomEvent
      .on(link, 'mousedown dblclick', L.DomEvent.stopPropagation)
      .on(link, 'click', L.DomEvent.stop)
      .on(link, 'click', this._zoomToDefault, this);
    return link;
  }

  _whenReady() {
    if (
      this.options.bounds == undefined
      && this.options.zoom == undefined
      && this.options.center == undefined
    ) {
      this.options.center = this._map.getCenter();
      this.options.zoom = this._map.getZoom();
      return this;
    }

    if (this.options.bounds != undefined) {
      this.options.bounds = this.options.bounds;
      this.options.padding = this.options.padding || [0, 0];
      return this;
    }

    this.options.center = this.options.center;
    this.options.zoom = this.options.zoom;

    return this;
  }

  _zoomToDefault() {
    if (this.options.bounds) {
      this._map.fitBounds(this.options.bounds, {
        padding: this.options.padding,
      });
    }
    else {
      this._map.flyTo(this.options.center!, this.options.zoom, this.options.zoomPanOptions);
    }
  }
}