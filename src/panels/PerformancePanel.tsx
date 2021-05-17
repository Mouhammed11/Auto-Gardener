// @ts-nocheck
import React from "react";
import db from '../data/firebase.config';

import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartTitle,
} from "@progress/kendo-react-charts";

import { getPerformance } from "../services/dataService";
import Loading from "../layout/Loading";

var DataRef = db.ref('info/');

export default function PerformancePanel() {
  const [data, setData] = React.useState<string[]>();
  const [time, setTime] = React.useState<string[]>();
  React.useEffect(() => {
    const subscription = DataRef.on('value', (snapshot) => {
      const gdata = snapshot.val();
      
      const moisture = [];
      const timestamps = [];
  for (const [key, value] of Object.entries(gdata)) {
      moisture.push(value.moisture);
      var date = new Date(value.time);
      var hours = date.getHours();
      timestamps.push(hours);
}
      setTime(timestamps);
      setData(moisture);
    });
    // Specify how to clean up after this effect:
    return function cleanup() {
      DataRef.off('value');
    };
  });


  

  return (
    <>
      {!data && <Loading />}
      <Chart style={{ opacity: data ? "1" : "0" }}>
        <ChartTitle text="Water usage over time" />
        <ChartCategoryAxis>
          <ChartCategoryAxisItem categories={time} />
        </ChartCategoryAxis>
        <ChartSeries>
          <ChartSeriesItem type="line" data={data} />
        </ChartSeries>
      </Chart>
    </>
  )
}
