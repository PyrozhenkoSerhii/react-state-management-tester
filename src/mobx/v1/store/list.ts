import { createContext } from "react";

import { observable, action, flow } from "mobx";

import { blogsAPI } from "../../../axios/blogs";
import { generateFilters } from "../../../utils/filters";

import { IBlog } from "../../../interfaces/Blog";
import { IBlogComment } from "../../../interfaces/Comment";
import { IAxiosResponse } from "../../../interfaces/AxiosResponse";
import { IBooleanFilter, IValueFilter, IRangeFilter } from "../../../interfaces/Filter";


class BlogListState {
  @observable defaultBlogs: Array<IBlog>;

  @observable defaultFilters: Array<IBooleanFilter|IValueFilter|IRangeFilter>;

  @observable loading = false;

  @observable error: string | null = null;

  fetchBlogList = flow(function* fetch() {
    this.loading = true;
    this.error = false;

    const { data, error }: IAxiosResponse<Array<IBlog>> = yield blogsAPI.fetchBlogList();

    this.defaultBlogs = data;
    this.error = error;
    this.loading = false;

    this.defaultFilters = generateFilters(data);
  })


  @action removeBlog = (id: string): void => {
    this.defaultBlogs = this.defaultBlogs.filter((blog) => blog.id !== id);
  }

  @action commentBlog = (id: string, comment: IBlogComment): void => {
    this.defaultBlogs = this.defaultBlogs.map((blog: IBlog) => (blog.id !== id ? blog
      : {
        ...blog,
        comments: [
          comment,
          ...blog.comments,
        ],
      }));
  }

  @action commentBlogComment = (blogId: string, commentId: string, comment: IBlogComment): void => {
    this.defaultBlogs = this.defaultBlogs.map((blog: IBlog) => (blog.id !== blogId ? blog
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
