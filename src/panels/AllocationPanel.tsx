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

  return (
    <>
      
           <img title="Plant" width="100" src={Plant}  />
      {/*{!data && <Loading />}
      <Chart style={{ opacity: data ? "1" : "0" }}>
        <ChartTitle text={"Plant"}></ChartTitle>
        
        <ChartSeries>
          <ChartSeriesItem type="donut" data={data}>
            <ChartSeriesLabels content={labelContent} background="none" color="#fff" />
          </ChartSeriesItem>
        </ChartSeries>
        <ChartLegend position={"bottom"} visible={true} />
        <ChartTooltip render={renderTooltip} />
      </Chart>*/}
    </>
  )
}
