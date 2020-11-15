import * as React from "react";
import { useSelector } from "react-redux";
import { IApplicationState } from "./store";

export const SecondComponent = (): JSX.Element => {
  const counter = useSelector((state: IApplicationState) => state.frequency.counter);

  return (
    <div>{counter}</div>
  );
};
