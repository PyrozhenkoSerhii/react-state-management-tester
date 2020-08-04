import { sumBy } from "lodash";

import {
  IBooleanFilter, IRangeFilter, IValueFilter, FilterTypeEnum,
} from "../interfaces/Filter";
import { blogTags } from "../../server/blogs/tags";
import { IBlog } from "../interfaces/Blog";


export const generateFilters = (
  blogs: Array<IBlog>,
): Array<IBooleanFilter|IValueFilter|IRangeFilter> => {
  const booleanFilters = blogTags.map((tag) => <IBooleanFilter>{
    title: tag,
    available: sumBy(blogs, ({ tags }) => +tags.includes(tag)),
    value: false,
    type: FilterTypeEnum.Boolean,
  });


  const valueFilters: Array<IValueFilter> = [{
    title: "count",
    value: 10,
    maxValue: blogs.length,
    minValue: 6,
    type: FilterTypeEnum.Value,
  }];


  const rangeFilters: Array<IRangeFilter> = [{
    title: "length",
    maxDefault: blogs.reduce((acc, { wordsCount }) => (acc > wordsCount ? acc : wordsCount), 0),
    max: 1000,
    minDefault: 0,
    min: 0,
    type: FilterTypeEnum.Range,
  }];

  return [...booleanFilters, ...valueFilters, ...rangeFilters];
};
