import * as React from "react";
import { Checkbox, Input, Slider } from "antd";
import { observer } from "mobx-react";
import {
  IBooleanFilter, IValueFilter, IRangeFilter, isBooleanFilter, isRangeFilter, isValueFilter,
} from "../../interfaces/Filter";

import {
  BooleanFilterItem, FiltersWrapper, RangeFilterItem, ValueFilterItem,
} from "./styled";

type TProps = {
  filters: Array<IBooleanFilter|IRangeFilter|IValueFilter>;
  onChange: (title: string, value: boolean | number, secondValue?: number) => void;
}

export const Filters = observer(({ filters, onChange }: TProps): JSX.Element => (
  <FiltersWrapper>
    {filters.map((filter) => {
      if (isBooleanFilter(filter)) {
        return (
          <BooleanFilterItem key={filter.title}>
            <Checkbox
              id={filter.title}
              checked={filter.value}
              onChange={({ target }) => onChange(filter.title, target.checked)}
            >
              {filter.title}
            </Checkbox>
          </BooleanFilterItem>
        );
      } if (isValueFilter(filter)) {
        return (
          <ValueFilterItem key={filter.title}>
            <Input
              value={filter.value}
              onChange={({ target }) => onChange(filter.title, Number(target.value))}
              placeholder={filter.title}
            />
          </ValueFilterItem>
        );
      } if (isRangeFilter(filter)) {
        return (
          <RangeFilterItem key={filter.title}>
            <Slider
              style={{ width: "100%" }}
              range
              defaultValue={[filter.min, filter.max]}
              max={filter.maxDefault}
              min={filter.minDefault}
              onChange={(
                [currentMin, currentMax],
              ) => onChange(filter.title, currentMin, currentMax)}
            />
          </RangeFilterItem>
        );
      }
      return (
        <div>Unknown filter</div>
      );
    })}
  </FiltersWrapper>
));
