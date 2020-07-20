import { createContext } from "react";

import { observable, action, flow } from "mobx";

import { blogsAPI } from "../../../axios/blogs";

import { IBlog } from "../../../interfaces/Blog";
import { IBlogComment } from "../../../interfaces/Comment";
import { IAxiosResponse } from "../../../interfaces/AxiosResponse";

class BlogListState {
  @observable blogs: IBlog[];

  @observable loading = false;

  @observable error: string | null = null;


  fetchBlogList = flow(function* fetch() {
    this.loading = true;
    this.error = false;

    const { data, error }: IAxiosResponse<Array<IBlog>> = yield blogsAPI.fetchBlogList();

    this.blogs = data;
    this.error = error;
    this.loading = false;
  })


  @action removeBlog = (id: string): void => {
    this.blogs = this.blogs.filter((blog) => blog.id !== id);
  }

  @action commentBlog = (id: string, comment: IBlogComment): void => {
    this.blogs.map((blog: IBlog) => (blog.id !== id ? blog
      : {
        ...blog,
        comments: [
          comment,
          ...blog.comments,
        ],
      }));
  }

  @action commentBlogComment = (blogId: string, commentId: string, comment: IBlogComment): void => {
    this.blogs.map((blog: IBlog) => (blog.id !== blogId ? blog
      : blog.comments.map((blogComment: IBlogComment) => (blogComment.id !== commentId ? blogComment
        : {
          ...blogComment,
          comments: [
            comment,
            ...blog.comments,
          ],
        }))));
  }
}

export const blogListState = createContext(new BlogListState());
