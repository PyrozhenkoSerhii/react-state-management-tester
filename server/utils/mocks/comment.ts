import { IComment } from "../../comments/model";

type TMockComment = Omit<IComment, "author"|"comments">;

export const mockComments: Array<TMockComment> = [
  {
    content: "Some comment",
    rating: 0,
  },
  {
    content: "Other comment",
    rating: 0,
  },
  {
    content: "Random comment",
    rating: 0,
  },
];
