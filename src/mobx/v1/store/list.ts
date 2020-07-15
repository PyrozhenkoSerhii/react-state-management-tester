import { observable, action, runInAction } from "mobx";

import { blogsAPI } from "../../../axios/api";

import { IBlog } from "../../../interfaces/Blog";
import { IBlogComment } from "../../../interfaces/Comment";

export class BlogListState {
  @observable blogs: IBlog[];

  @observable error = false;

  @observable loading = false;

  @action fetchBlogs = async (): void => {
    this.loading = true;
    try {
      const blogsPromise = await blogsAPI.getBlogList();

      runInAction(() => {
        this.blogs = blogsPromise.data;
      });
    } catch (err) {
      runInAction(() => {
        this.error = true;
      });
    } finally {
      this.loading = false;
    }
  }


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
