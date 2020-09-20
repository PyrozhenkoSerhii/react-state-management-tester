import * as React from "react";
import { Spin, Select, InputNumber, Checkbox } from "antd";
import {
  Chart, Series, CommonSeriesSettings, Legend, ValueAxis, Title, Export, Tooltip,
} from "devextreme-react/chart";

import { PresentationTracker } from "./interafaces";
import { TrackerActions, TrackerSources } from "../../../../shared/interfaces";

import { getTrackers } from "../../../axios/tracker";
import { PresentationWrapper, SelectGroup } from "./styled";

const DEFAULT_LIMIT = 10;
const { useEffect, useState } = React;
const { Option } = Select;

export const ChartPage = (): JSX.Element => {
  const [trackers, setTrackers] = useState<Array<PresentationTracker>>([]);

  const [source, setSource] = useState<TrackerSources>(TrackerSources.REDUX_V1);
  const [action, setAction] = useState<TrackerActions>(TrackerActions.FETCH_BLOG_LIST);
  const [limit, setLimit] = useState<number>(DEFAULT_LIMIT);
  const [sortByDataAmount, setSortByDataAmount] = useState<boolean>(false);

  const fetchTrackers = async () => {
    try {
      const response = await getTrackers({ source, action, limit });

      setTrackers(response.map<PresentationTracker>((t) => ({ ...t, ...t.time })));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTrackers();
  }, [source, action, limit]);

  const [sortedTrackers, setSortedTrackers] = useState<Array<PresentationTracker>>([]);

  useEffect(() => {
    setSortedTrackers(sortByDataAmount
      ? trackers.sort((
        a: PresentationTracker, b: PresentationTracker,
      ) => (a.affectedItems > b.affectedItems ? 1 : -1))
      : trackers);
  }, [trackers, sortByDataAmount]);

  if (!sortedTrackers) {
    return <Spin />;
  }

  console.log(sortedTrackers);

  return (
    <PresentationWrapper>
      <SelectGroup>
        <Select
          id="source-select"
          defaultValue={TrackerSources.REDUX_V1}
          onChange={(value) => setSource(Number(value))}
        >
          {Object.entries(TrackerSources)
            .filter(([, value]) => typeof value === "number")
            .map(([key, value]) => <Option key={value} value={value}>{key}</Option>)}
        </Select>
        <Select
          id="action-select"
          defaultValue={TrackerActions.FETCH_BLOG_LIST}
          onChange={(value) => setAction(Number(value))}
        >
          {Object.entries(TrackerActions)
            .filter(([, value]) => typeof value === "number")
            .map(([key, value]) => <Option key={value} value={value}>{key}</Option>)}
        </Select>
        <InputNumber
          min={DEFAULT_LIMIT}
          max={50}
          defaultValue={DEFAULT_LIMIT}
          onChange={(value) => setLimit(Number(value))}
        />
        <Checkbox
          checked={sortByDataAmount}
          onChange={() => setSortByDataAmount(((prevValue) => !prevValue))}
        >
          Sort by data amount
        </Checkbox>
      </SelectGroup>
      <Chart
        id="chart"
        title="Critical points"
        dataSource={sortedTrackers}
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
    </PresentationWrapper>
  );
};
