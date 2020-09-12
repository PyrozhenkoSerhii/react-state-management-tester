import { sumBy } from "lodash";

import {
  IBooleanFilter, IRangeFilter, IValueFilter,
  FilterTypeEnum, isBooleanFilter, isRangeFilter,
} from "../interfaces/Filter";
import { blogTags } from "../../server/blogs/tags";
import { IBlog } from "../interfaces/Blog";


export const generateFilters = (
  blogs: Array<IBlog>,
): Array<IBooleanFilter|IValueFilter|IRangeFilter> => {
  let booleanFilters = blogTags.map((tag) => <IBooleanFilter>{
    title: tag,
    available: sumBy(blogs, ({ tags }) => +tags.includes(tag)),
    value: false,
    type: FilterTypeEnum.Boolean,
  });

  booleanFilters = [...booleanFilters, {
    title: "positive-only",
    available: sumBy(blogs, ({ rating }) => +(rating > 0)),
    value: false,
    type: FilterTypeEnum.Boolean,
  }];

  const maxWords = blogs.reduce((acc, { wordsCount }) => (acc > wordsCount ? acc : wordsCount), 0);
  const rangeFilters: Array<IRangeFilter> = [{
    title: "length",
    maxDefault: maxWords,
    max: maxWords,
    minDefault: 0,
    min: 0,
    type: FilterTypeEnum.Range,
  }];

  return [...booleanFilters, ...rangeFilters];
};

export const isBlogPasses = (
  blog: IBlog,
  filters: Array<IBooleanFilter|IValueFilter|IRangeFilter>,
): boolean => {
  for (let i = 0; i < filters.length; i += 1) {
    const filter = filters[i];
    if (isBooleanFilter(filter)) {
      // Tag filters
      if (blogTags.includes(filter.title)) {
        if (filter.value && !blog.tags.includes(filter.title)) {
          return false;
        }
      }
      // Positive only filter
      if (filter.title === "positive-only") {
        if (filter.value && blog.rating <= 0) {
          return false;
        }
      }
    } else if (isRangeFilter(filter)) {
      switch (filter.title) {
        case "length":
          if (blog.wordsCount > filter.max || blog.wordsCount < filter.min) {
            return false;
          }
          break;
        default:
          break;
      }
    }
  }
  return true;
};
