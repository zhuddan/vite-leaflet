const modules = import.meta.glob('./*.json');
interface DataType {
  createBy?: any;
  createTime?: any;
  data: Datum[][];
  fileIndex: number;
  latSize: number;
  lonSize: number;
  maxLat: number;
  maxLon: number;
  minLat: number;
  minLon: number;
  remark?: any;
  time: number;
  updateBy?: any;
  updateTime?: any;
}

export interface Datum {
  lat: number;
  lon: number;
  val: number;
}
export const data: Record<number, () => Promise<DataType>> = {};

for (const key in modules) {
  if (Object.prototype.hasOwnProperty.call(modules, key)) {
    const element = modules[key];
    data[key.replace(/\.|\/|json/g, '')] = element;
  }
}