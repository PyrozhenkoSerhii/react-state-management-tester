import * as React from "react";
import { useSelector } from "react-redux";

import { StyledText } from "../styled";
import { IApplicationState } from "./store";
import { PLAYER_HEIGHT, PLAYER_WIDTH } from "../constants";

const { useRef, useEffect } = React;

export const SecondComponent = (): JSX.Element => {
  const dataUrl = useSelector((state: IApplicationState) => state.frequency.dataUrl);
  const destinationCanvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (destinationCanvas.current && dataUrl) {
      const image = new Image();
      image.src = dataUrl;
      destinationCanvas.current.width = PLAYER_WIDTH;
      destinationCanvas.current.height = PLAYER_HEIGHT;
      image.onload = () => {
        console.log("drawing");
        const destCanvasContext = destinationCanvas.current.getContext("2d");
        destCanvasContext.drawImage(image, 0, 0);
      };
    }
  }, [dataUrl, destinationCanvas]);

  return (
    <>
      <StyledText>Data from Redux store</StyledText>
      <canvas ref={destinationCanvas} style={{ width: `${PLAYER_WIDTH}px`, height: `${PLAYER_HEIGHT}px` }} />
    </>
  );
};
