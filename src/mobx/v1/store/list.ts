import { createContext } from "react";
import { find } from "lodash";
import { observable, action, runInAction } from "mobx";

import { fetchBlogList } from "../../../axios/blogs";
import { generateFilters } from "../../../utils/filters";

import { IBlog } from "../../../interfaces/Blog";
import { IBlogComment } from "../../../interfaces/Comment";
import {
  IBooleanFilter, IValueFilter, IRangeFilter, isBooleanFilter, isValueFilter, isRangeFilter,
} from "../../../interfaces/Filter";


class BlogListState {
  @observable defaultBlogs: Array<IBlog> = [];

  @observable blogs: Array<IBlog> = [];

  @observable defaultFilters: Array<IBooleanFilter|IValueFilter|IRangeFilter> = [];

  @observable filters: Array<IBooleanFilter|IValueFilter|IRangeFilter> = [];

  @observable loading = false;

  @observable error: string | null = null;

  @action fetchBlogList = async () => {
    this.loading = true;
    try {
      const blogs = await fetchBlogList();
      const filters = generateFilters(blogs);

      runInAction(() => {
        this.defaultFilters = filters;
        this.filters = filters;
        this.defaultBlogs = blogs;
        this.blogs = blogs;
        this.loading = false;
        this.error = null;
      });
    } catch (err) {
      this.loading = false;
      this.error = err;
    }
  }


  @action updateFilters = (title: string, value: boolean | number, secondValue: number) => {
    this.filters = this.filters.map((filter) => {
      if (filter.title !== title) return filter;
      const updated = filter;

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

  @action removeBlog = (id: string): void => {
    this.defaultBlogs = this.defaultBlogs.filter((blog) => blog._id !== id);
  }

  @action commentBlog = (id: string, comment: IBlogComment): void => {
    this.defaultBlogs = this.defaultBlogs.map((blog: IBlog) => (blog._id !== id ? blog
      : {
        ...blog,
        comments: [
          comment,
          ...blog.comments,
        ],
      }));
  }

  @action commentBlogComment = (blogId: string, commentId: string, comment: IBlogComment): void => {
    this.defaultBlogs = this.defaultBlogs.map((blog: IBlog) => (blog._id !== blogId ? blog
      : {
        ...blog,
        comments: blog.comments.map(
          (blogComment: IBlogComment) => (blogComment.id !== commentId ? blogComment
            : {
              ...blogComment,
              comments: [
                comment,
                ...blog.comments,
              ],
            }),
        ),
      }));
  }
}

export const blogListState = createContext(new BlogListState());
