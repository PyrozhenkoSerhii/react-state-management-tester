import * as React from "react";
import { Spin } from "antd";
import {
  Chart, Series, CommonSeriesSettings, Legend, ValueAxis, Title, Export, Tooltip,
} from "devextreme-react/chart";

import { getTrackers } from "../../../axios/tracker";
import { Tracker } from "../../../../server/tracker/model";

const { useEffect, useState } = React;

export const ChartPage = (): JSX.Element => {
  const [trackers, setTrackers] = useState<Array<Tracker>>([]);

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

  if (!trackers) {
    return <Spin />;
  }
  const data = trackers
    .map((t) => ({ ...t, ...t.time }))
    .sort((a, b) => (a.dataSize > b.dataSize ? 1 : -1));

  return (
    <Chart
      id="chart"
      title="Male Age Structure"
      dataSource={data}
    >
      <CommonSeriesSettings argumentField="_id" type="stackedBar" />
      <Series
        valueField="commitTime"
        name="Commit time"
      />
      <Series
        valueField="reduceTime"
        name="Reduce Time"
      />
      <ValueAxis position="left">
        <Title text="ms" />
      </ValueAxis>
      <Legend
        verticalAlignment="bottom"
        horizontalAlignment="center"
        itemTextPosition="top"
      />
      <Export enabled />
      <Tooltip
        enabled
        location="edge"
        customizeTooltip={(arg: any) => ({ text: `[Redux] ${arg.seriesName}: ${arg.valueText}ms` })}
      />
    </Chart>
  );
};
