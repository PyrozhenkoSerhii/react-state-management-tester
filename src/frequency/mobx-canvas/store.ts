import { observable, action } from "mobx";
import { createContext } from "react";

export class FrequencyUpdateTestStore {
  @observable dataUrl: string = null;

  @action updateData = (dataUrl: string): void => {
    this.dataUrl = dataUrl;
  }
}

export const Store = new FrequencyUpdateTestStore();

export const StoreContext = createContext(Store);
