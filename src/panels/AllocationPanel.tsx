import React from "react";
import Plant from "../Plant.png";
import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
  ChartTitle,
  ChartTooltip,
  PlotAreaClickEvent
} from "@progress/kendo-react-charts";

import { getFundAllocation } from "../services/dataService";
import Loading from "../layout/Loading";
import { Allocation } from "../data/models";

const labelContent = (e: any) => (`${e.value}%`);

const renderTooltip = (e: any) => {
  return <div>{e.point ? e.point.category : ""}</div>;
};

export default function AllocationPanel() {
  const [data, setData] = React.useState<Allocation[]>();
  React.useEffect(() => {
    getFundAllocation().then((data: Allocation[]) => {
      setData(data);
    })
  }, []);

  
}
