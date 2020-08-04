export enum FilterTypeEnum {
  Boolean = 0,
  Value = 1,
  Range = 2,
}

interface IFilter {
  title: string;
  type: FilterTypeEnum;
}

export interface IBooleanFilter extends IFilter {
  value: boolean;
  available: number;
}

export interface IValueFilter extends IFilter {
  value: number;
  maxValue?: number;
  minValue?: number;
}

export interface IRangeFilter extends IFilter {
  min: number;
  max: number;
  minDefault: number;
  maxDefault: number;
}
