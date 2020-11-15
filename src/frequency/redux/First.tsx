import * as React from "react";
import { useDispatch } from "react-redux";
import { updateCounter } from "./store";
import { INTERVAL } from "../constants";

const { useState, useEffect } = React;

export const FirstComponent = (): JSX.Element => {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCounter((prevValue) => {
        dispatch(updateCounter(prevValue + 1));
        return prevValue + 1;
      });
    }, INTERVAL);
  }, []);

  return (
    <div>{counter}</div>
  );
};
