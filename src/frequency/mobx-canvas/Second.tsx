import * as React from "react";
import { observer } from "mobx-react";
import { StoreContext } from "./store";
import { PLAYER_HEIGHT, PLAYER_WIDTH } from "../constants";
import { StyledText } from "../styled";

const { useContext, useRef, useEffect } = React;

export const SecondComponent = observer((): JSX.Element => {
  const { dataUrl } = useContext(StoreContext);
  const destinationCanvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (destinationCanvas.current && dataUrl) {
      const image = new Image();
      image.src = dataUrl;
      destinationCanvas.current.width = PLAYER_WIDTH;
      destinationCanvas.current.height = PLAYER_HEIGHT;
      image.onload = () => {
        const destCanvasContext = destinationCanvas.current.getContext("2d");
        destCanvasContext.drawImage(image, 0, 0);
      };
    }
  }, [dataUrl, destinationCanvas]);

  return (
    <>
      <StyledText>Data from MobX store</StyledText>
      <canvas ref={destinationCanvas} style={{ width: `${PLAYER_WIDTH}px`, height: `${PLAYER_HEIGHT}px` }} />
    </>
  );
});
