import { observable, action } from "mobx";
import { createContext } from "react";

export class FrequencyUpdateTestStore {
  @observable counter = 0;

  @action updateCounter = (counter: number): void => {
    this.counter = counter;
  }
}

export const Store = new FrequencyUpdateTestStore();

export const StoreContext = createContext(Store);
