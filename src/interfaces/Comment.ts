import { IUser } from "./User";

export interface IBlogComment {
  id: string;
  content: string;
  author: IUser;
  rating: number;
  comments: IBlogComment[];
}
