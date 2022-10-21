import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};

@Component({
  selector: 'app-gender-reach',
  templateUrl: './gender-reach.component.html',
  styleUrls: ['./gender-reach.component.scss'],
})
export class GenderReachComponent implements OnInit {
  public chartOptions: any;

  constructor() {
    this.chartOptions = {
      title: {
        text: 'Gender / Age',
        align: 'left',
        style: {
          fontSize: '20px',
          fontWeight: 'bold',
          fontFamily: undefined,
        },
      },
      series: [
        {
          name: 'women',
          data: [1, 1, 1, 33, 20, 1, 10, 1],
        },
        {
          name: 'men',
          data: [1, 20, 20, 20, 1, 1, 1, 8],
        },
      ],
      colors: ['#E786D7', '#7F7FD5'],
      chart: {
        type: 'bar',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '70%',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
      },
      xaxis: {
        categories: [
          '<18',
          '18-21',
          '21-24',
          '24-27',
          '27-30',
          '30-35',
          '35-40',
          '40>',
        ],
      },
      yaxis: {
        min: 0,
        max: 40,
        logBase: 400,
        tickAmount: 10,
      },
      grid: {
        show: true,
        borderColor: '#4D4D4D',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
      },
    };
  }

  ngOnInit(): void {}
}
