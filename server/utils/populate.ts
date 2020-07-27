import "./database";
import { connection, STATES } from "mongoose";
import { random } from "lodash";

import { BlogModel, IBlog } from "../blogs/model";
import { UserModel } from "../users/model";
import { CommentModel, IComment } from "../comments/model";

import { mockBlogs } from "./mocks/blogs";
import { mockUsers } from "./mocks/users";
import { mockComments } from "./mocks/comment";

const populate = async () => {
  if (connection.readyState !== STATES.connected && connection.readyState !== STATES.connecting) {
    return;
  }

  await UserModel.deleteMany({});

  const users = await UserModel.insertMany(mockUsers);

  const usersId = users.map((user) => user._id);


  await CommentModel.deleteMany({});

  const comments = await CommentModel.insertMany(mockComments.map((comment) => <IComment>{
    ...comment,
    author: usersId[random(0, usersId.length - 1)],
    comments: [],
  }));

  const commentsIds = comments.map((comment) => comment._id);


  await BlogModel.deleteMany({});

  await BlogModel.insertMany(mockBlogs.map((blog) => <IBlog>{
    ...blog,
    author: usersId[random(0, usersId.length - 1)],
    comments: commentsIds[random(0, commentsIds.length - 1)],
  }));
};


populate();
