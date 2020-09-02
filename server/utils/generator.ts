import { LoremIpsum } from "lorem-ipsum";
import { random, capitalize } from "lodash";

import { blogTags } from "../blogs/tags";

import { IBlog } from "../blogs/model";
import { IComment } from "../comments/model";
import { IUser } from "../users/model";


type TMockComment = Omit<IComment, "author"|"comments">;
type TMockBlog = Omit<IBlog, "author"|"comments"|"wordsCount">;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});


const generateTags = (): Array<string> => {
  const result: Array<string> = [];
  const amount = random(1, 3);

  while (result.length < amount) {
    let tag = null;
    do {
      tag = blogTags[random(0, blogTags.length - 1)];
    } while (result.includes(tag));

    result.push(tag);
  }

  return result;
};


export const generateBlog = (amount: number): Array<TMockBlog> => {
  const result: Array<TMockBlog> = [];

  while (result.length < amount) {
    result.push({
      title: capitalize(lorem.generateWords(random(2, 5))),
      rating: random(-100, 100),
      tags: generateTags(),
      content: lorem.generateParagraphs(random(1, 3)),
      image: "https://picsum.photos/200/300",
    });
  }

  return result;
};


export const generateComments = (amount: number): Array<TMockComment> => {
  const result: Array<TMockComment> = [];

  while (result.length < amount) {
    result.push({
      rating: random(-100, 100),
      content: lorem.generateSentences(random(1, 3)),
    });
  }

  return result;
};


export const generateUsers = (amount: number): Array<IUser> => {
  const result: Array<IUser> = [];

  while (result.length < amount) {
    result.push({
      email: `${lorem.generateWords(1)}@gmail.com`,
      username: lorem.generateWords(2),
      image: "https://picsum.photos/200/300",
    });
  }

  return result;
};
