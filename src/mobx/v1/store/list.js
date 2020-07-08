import { observable, action } from "mobx";

export class InputState {
  @observable
  value: string;

  @action
  onChange(newValue: string) {
    this.value = newValue;
  }
}
