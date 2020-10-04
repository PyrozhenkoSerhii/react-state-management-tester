import * as React from "react";
import { Series } from "devextreme-react/chart";

import { TrackerActions, TrackerSources } from "../../../../shared/interfaces";

export const prettifyKey = (key: string): string => key.toLowerCase().replace("_", " ");

export const renderSeries = (
  source: TrackerSources, action: TrackerActions,
): Array<JSX.Element> => {
  const series: Array<JSX.Element> = [];

  switch (source) {
    case TrackerSources.REDUX_V1:
    case TrackerSources.REDUX_V2:
      if (action === TrackerActions.FETCH_BLOG_LIST) {
        series.push(<Series
          valueField="dispatchSagaTime"
          name="Dispatch saga time"
        />);
      }
      series.push(<Series
        valueField="dispatchReducerTime"
        name="Dispatch reduce Time"
      />);
      series.push(<Series
        valueField="commitTime"
        name="Commit time"
      />);
      break;
    case TrackerSources.MOBX_V1:
    case TrackerSources.MOBX_V2:
      series.push(<Series
        valueField="commitTime"
        name="Commit time"
      />);
      series.push(<Series
        valueField="initTime"
        name="Init Time"
      />);
      break;
    case TrackerSources.CONTEXT_V1:
    default:
      break;
  }

  return series;
};
