import { IUser } from "./User";
import { IBlogComment } from "./Comment";

export interface IBlog {
  _id: string;
  title: string;
  content: string;
  wordsCount: number;
  image: string;
  author: IUser;
  comments: Array<IBlogComment>;
  rating: number;
  tags: Array<string>;
}
