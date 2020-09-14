import * as React from "react";

import { getTrackers } from "../../../axios/tracker";
import { Tracker } from "../../../../server/tracker/model";

const { useEffect, useState } = React;

export const ChartPage = (): JSX.Element => {
  const [trackers, setTrackers] = useState<Array<Tracker>>([]);
  console.log(trackers);
  const fetchTrackers = async () => {
    try {
      const response = await getTrackers();
      setTrackers(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTrackers();
  }, []);

  return (
    <div>Chart</div>
  );
};
