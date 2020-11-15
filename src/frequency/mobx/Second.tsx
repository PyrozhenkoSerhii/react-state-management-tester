import * as React from "react";
import { observer } from "mobx-react";
import { StoreContext } from "./store";

const { useContext } = React;

export const SecondComponent = observer((): JSX.Element => {
  const { counter } = useContext(StoreContext);

  return (
    <div>{counter}</div>
  );
});
