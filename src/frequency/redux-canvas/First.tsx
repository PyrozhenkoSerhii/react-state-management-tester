import * as React from "react";
import { useDispatch } from "react-redux";
import video from "../video.mp4";

import { StyledText } from "../styled";
import { updateData } from "./store";
import { INTERVAL, PLAYER_HEIGHT, PLAYER_WIDTH } from "../constants";

const { useRef, useEffect } = React;

export const FirstComponent = (): JSX.Element => {
  const dispatch = useDispatch();

  const player = useRef<HTMLVideoElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (player.current) {
      const context = canvas.current.getContext("2d");

      player.current.addEventListener("play", () => {
        canvas.current.width = player.current.videoWidth;
        canvas.current.height = player.current.videoHeight;
        setInterval(() => {
          context.drawImage(player.current, 0, 0);
          const dataUrl = canvas.current.toDataURL();
          dispatch(updateData(dataUrl));
        }, INTERVAL);
      });
    }
  }, [player]);

  return (
    <>
      <StyledText>Original Video</StyledText>
      <video
        src={video}
        autoPlay
        muted
        loop
        ref={player}
        style={{ width: `${PLAYER_WIDTH}px`, height: `${PLAYER_HEIGHT}px` }}
      />
      <canvas
        ref={canvas}
        style={{ width: `${PLAYER_WIDTH}px`, height: `${PLAYER_HEIGHT}px`, display: "none" }}
      />
    </>
  );
};
