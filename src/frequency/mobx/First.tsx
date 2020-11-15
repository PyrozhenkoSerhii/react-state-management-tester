import * as React from "react";

import { Store } from "./store";
import { INTERVAL } from "../constants";

const { useState, useEffect } = React;

export const FirstComponent = (): JSX.Element => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCounter((prevValue) => {
        Store.updateCounter(prevValue + 1);
        return prevValue + 1;
      });
    }, INTERVAL);
  }, []);

  return (
    <div>{counter}</div>
  );
};
