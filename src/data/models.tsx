import { TooltipPoint } from "@progress/kendo-react-charts";

export interface FundInfo {
  managers: [{
    firstName: string,
    lastName: string,
    position: string
  }],
  quarters: [{
    title: string,
    details: [{
      name: string,
      value: string
    }]
  }]
}

export interface Allocation {
  category: string,
  value: number
}

export interface Position {
  humidity: string,
  moisture: string,
  temperatureC: string,
  temperatureF: string
}
