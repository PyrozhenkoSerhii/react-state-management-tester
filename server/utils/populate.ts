/* eslint-disable no-console */
import * as config from "config";
import * as mongoose from "mongoose";

import { random } from "lodash";

import { BlogModel, IBlog } from "../blogs/model";
import { UserModel } from "../users/model";
import { CommentModel, IComment } from "../comments/model";

import { mockBlogs } from "./mocks/blogs";
import { mockUsers } from "./mocks/users";
import { mockComments } from "./mocks/comment";


mongoose.connect(config.get("db.connectionString"), config.get("db.options")).then(
  () => console.log(`[API] Connection to ${config.get("db.databaseName")} db was established `),
  (err) => console.log(`[API] Error occured while connection to ${config.get("db.databaseName")} db: `, err),
);
mongoose.set("useCreateIndex", true);
mongoose.set("debug", (coll: string, method: string) => {
  console.log(`[Mongoose] Path: /${coll}, method: ${method}`);
});


const populate = async () => {
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
