// @ts-nocheck
import React from "react";
import { Grid, GridCellProps, GridColumn } from "@progress/kendo-react-grid";

import { getPositions } from "../services/dataService";
import Loading from "../layout/Loading";
import { Position } from "../data/models";
import db from '../data/firebase.config';

const NumberCell = (props: GridCellProps) => {
  const field = props.field || "";
  const startingValue = props.dataItem[field];
  let finalValue = (startingValue / 1000000).toFixed(2) + "M";
  if (startingValue > 1000000000) {
    finalValue = (startingValue / 1000000000).toFixed(2) + "B";
  }

  return <td>{finalValue}</td>
}

const ChangeCell = (props: GridCellProps) => {
  const field = props.field || "";
  const value = props.dataItem[field];
  return (
    <td className={value > 0 ? "change-up" : "change-down"}>
      {value}%
    </td>
  );
}

var DataRef = db.ref('info/');
export default function PositionsPanel() {
  const [positions, setPositions] = React.useState<Position[]>();
  
    



  React.useEffect(() => {
    const subscription = DataRef.on('value', (snapshot) => {
      const data = snapshot.val();
      console.log(data)
      const positions = [];
  for (const [key, value] of Object.entries(data)) {
      const position = 
      {
          'humidity': value.humidity,
          'moisture': value.moisture,
          'temperatureC': value.temperatureC,
          'temperatureF': value.temperatureF
      };
  positions.push(position);
}
      
      setPositions(positions);
    });
    // Specify how to clean up after this effect:
    return function cleanup() {
      DataRef.off('value');
    };
  });

  return (
    <>
      {!positions && <Loading />}
      <Grid
        data={positions}
        style={{ opacity: positions ? "1" : "0" }}
      >
        
        <GridColumn title="Humidity" field="humidity" />
        <GridColumn title="Moisture(%)" field="moisture" /*cell={ChangeCell}*/ />
        <GridColumn title="TemperatureC" field="temperatureC" /*cell={ChangeCell}*/ />
        <GridColumn title="TemperatureF" field="temperatureF" /*cell={NumberCell}*/ />
        {/*<GridColumn title="Market Cap" field="market_cap" cell={NumberCell} />*/}
      </Grid>
    </>
  )
}
