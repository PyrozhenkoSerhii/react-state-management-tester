import { IUser } from "./User";
import { IBlogComment } from "./Comment";

export interface IBlog {
  id: string;
  title: string;
  content: string;
  image: string;
  author: IUser;
  comments: Array<IBlogComment>;
  rating: number;
  tags: Array<string>;
}
