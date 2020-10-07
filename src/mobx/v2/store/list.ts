import { createContext } from "react";
import { observable, runInAction, computed } from "mobx";

import { fetchBlogList } from "../../../axios/blogs";
import { generateFilters, isBlogPasses } from "../../../utils/filters";

import { IBlog } from "../../../interfaces/Blog";
import {
  IBooleanFilter, IValueFilter, IRangeFilter, isBooleanFilter, isValueFilter, isRangeFilter,
} from "../../../interfaces/Filter";

import { TrackerService } from "../../../services/tracker";
import { TrackerActions, TrackerSources, TrackerPositions } from "../../../../shared/interfaces";

let trackingComputed = false;

class BlogListState {
  @observable defaultBlogs: Array<IBlog> = [];

  @observable defaultFilters: Array<IBooleanFilter|IValueFilter|IRangeFilter> = [];

  @observable filters: Array<IBooleanFilter|IValueFilter|IRangeFilter> = [];

  @observable loading = false;

  @observable error: string | null = null;

  fetchBlogList = async (limit: number) => {
    TrackerService.setTimeStamps({
      source: TrackerSources.MOBX_V2,
      position: TrackerPositions.MOBX_ACTION_INIT,
      action: TrackerActions.FETCH_BLOG_LIST,
      state: "finished",
      time: Date.now(),
    });
    this.loading = true;
    try {
      const blogs = await fetchBlogList({ limit });
      const filters = generateFilters(blogs);

      TrackerService.setTimeStamps({
        source: TrackerSources.MOBX_V2,
        position: TrackerPositions.MOBX_ACTION_COMMIT,
        action: TrackerActions.FETCH_BLOG_LIST,
        state: "started",
        time: Date.now(),
        affectedItems: blogs.length,
      });
      runInAction(() => {
        this.defaultFilters = filters;
        this.filters = filters;
        this.defaultBlogs = blogs;
        this.loading = false;
        this.error = null;
      });
    } catch (err) {
      this.loading = false;
      this.error = err;
    }
  }

  updateFilters = (title: string, value: boolean | number, secondValue: number) => {
    TrackerService.setTimeStamps({
      source: TrackerSources.MOBX_V2,
      position: TrackerPositions.MOBX_ACTION_INIT,
      action: TrackerActions.CHECKBOX_FILTER,
      state: "finished",
      time: Date.now(),
    });

    if (!trackingComputed) {
      trackingComputed = true;
    }

    this.filters = this.filters.map((filter) => {
      if (filter.title !== title) return filter;
      const updated = { ...filter };

      if (isBooleanFilter(updated)) {
        updated.value = !updated.value;
      } else if (isValueFilter(updated)) {
        updated.value = Number(value);
      } else if (isRangeFilter(updated)) {
        updated.min = Number(value);
        updated.max = Number(secondValue);
      }

      return updated;
    });
  }

  @computed get blogs() {
    const blogs: Array<IBlog> = [];

    this.defaultBlogs.forEach((blog) => {
      if (isBlogPasses(blog, this.filters)) {
        blogs.push(blog);
      }
    });

    if (trackingComputed) {
      TrackerService.setTimeStamps({
        source: TrackerSources.MOBX_V2,
        position: TrackerPositions.MOBX_ACTION_COMMIT,
        action: TrackerActions.CHECKBOX_FILTER,
        state: "started",
        time: Date.now(),
      });
    }
    return blogs;
  }
}

export const blogListState = createContext(new BlogListState());
