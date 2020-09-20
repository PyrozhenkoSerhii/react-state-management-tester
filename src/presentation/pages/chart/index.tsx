import * as React from "react";
import { Spin, Select, InputNumber } from "antd";
import { useLocation, useHistory } from "react-router-dom";
import { parse, stringify } from "query-string";
import {
  Chart, Series, CommonSeriesSettings, Legend, ValueAxis, Title, Export, Tooltip,
} from "devextreme-react/chart";

import { TrackerActions, TrackerSources } from "../../../../shared/interfaces";
import { getTrackers } from "../../../axios/tracker";

import { PresentationTracker } from "./interafaces";
import { PresentationWrapper, SelectGroup } from "./styled";
import { prettifyKey } from "./utils";

const DEFAULT_LIMIT = 20;
const { useEffect, useState, useMemo } = React;
const { Option } = Select;

interface PageProps {
  id: number;
}

export const ChartPage = ({ id }: PageProps): JSX.Element => {
  const { search } = useLocation();
  const history = useHistory();

  const searchParams = useMemo(() => parse(search), [search]);

  const [trackers, setTrackers] = useState<Array<PresentationTracker>>([]);

  const [source, setSource] = useState<TrackerSources>(null);
  const [action, setAction] = useState<TrackerActions>(null);
  const [limit, setLimit] = useState<number>(null);

  useEffect(() => {
    const sourceParam = searchParams[`source${id}`];
    const actionParam = searchParams[`action${id}`];
    const limitParam = searchParams[`limit${id}`];

    setSource(sourceParam ? Number(sourceParam) : TrackerSources.REDUX_V1);
    setAction(actionParam ? Number(actionParam) : TrackerActions.CHECKBOX_FILTER);
    setLimit(limitParam ? Number(limitParam) : DEFAULT_LIMIT);
  }, [search]);

  const fetchTrackers = async () => {
    try {
      const response = await getTrackers({ source, action, limit });

      setTrackers(response.map<PresentationTracker>((t) => ({ ...t, ...t.averageTime })));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (source && action && limit) {
      fetchTrackers();
    }
  }, [source, action, limit]);

  const updateParam = (type: "action" | "source" | "limit") => (value: TrackerSources | TrackerActions | number) => {
    console.log(type);
    console.log(value);
    switch (type) {
      case "action":
        setAction(Number(value));
        searchParams[`action${id}`] = value.toString();
        history.push({
          search: stringify(searchParams),
        });
        break;
      case "source":
        setSource(Number(value));
        searchParams[`source${id}`] = value.toString();
        history.push({
          search: stringify(searchParams),
        });
        break;
      case "limit":
        setLimit(Number(value));
        searchParams[`limit${id}`] = value.toString();
        history.push({
          search: stringify(searchParams),
        });
        break;
      default:
        break;
    }
  };

  if (!trackers) {
    return <Spin />;
  }

  return (
    <PresentationWrapper>
      <SelectGroup>
        <Select id="source-select" value={source} onChange={updateParam("source")}>
          {Object.entries(TrackerSources)
            .filter(([, value]) => typeof value === "number")
            .map(([key, value]) => <Option key={value} value={value}>{prettifyKey(key)}</Option>)}
        </Select>
        <Select id="action-select" value={action} onChange={updateParam("action")}>
          {Object.entries(TrackerActions)
            .filter(([, value]) => typeof value === "number")
            .map(([key, value]) => <Option key={value} value={value}>{prettifyKey(key)}</Option>)}
        </Select>
        <InputNumber min={DEFAULT_LIMIT} max={50} value={limit} onChange={updateParam("limit")} />
      </SelectGroup>
      <Chart
        id="chart"
        title="Update time to affected objects"
        dataSource={trackers}
      >
        <CommonSeriesSettings argumentField="affectedItems" type="stackedBar" />
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
