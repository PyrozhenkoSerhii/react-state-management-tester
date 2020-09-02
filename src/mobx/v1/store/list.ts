import { createContext } from "react";
import { find } from "lodash";
import { observable, action, flow } from "mobx";

import { blogsAPI } from "../../../axios/blogs";
import { generateFilters } from "../../../utils/filters";

import { IBlog } from "../../../interfaces/Blog";
import { IBlogComment } from "../../../interfaces/Comment";
import { IAxiosResponse } from "../../../interfaces/AxiosResponse";
import {
  IBooleanFilter, IValueFilter, IRangeFilter, isBooleanFilter, isValueFilter, isRangeFilter,
} from "../../../interfaces/Filter";


class BlogListState {
  @observable defaultBlogs: Array<IBlog>;

  @observable blogs: Array<IBlog>;

  @observable defaultFilters: Array<IBooleanFilter|IValueFilter|IRangeFilter>;

  @observable filters: Array<IBooleanFilter|IValueFilter|IRangeFilter>;

  @observable loading = false;

  @observable error: string | null = null;

  fetchBlogList = flow(function* fetch() {
    this.loading = true;
    this.error = false;

    const { data, error }: IAxiosResponse<Array<IBlog>> = yield blogsAPI.fetchBlogList();

    this.defaultBlogs = data;
    this.blogs = data;
    this.error = error;
    this.loading = false;

    const filters = generateFilters(data);
    this.defaultFilters = filters;
    this.filters = filters;
  })


  @action updateFilters = (title: string, value: boolean | number, secondValue: number) => {
    const filter = find(this.filters, { title });

    if (isBooleanFilter(filter)) {
      filter.value = !!value;
    } else if (isValueFilter(filter)) {
      filter.value = Number(value);
    } else if (isRangeFilter(filter)) {
      filter.min = Number(value);
      filter.max = Number(secondValue);
    }
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
