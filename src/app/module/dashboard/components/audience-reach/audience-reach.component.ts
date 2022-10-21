import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audience-reach',
  templateUrl: './audience-reach.component.html',
  styleUrls: ['./audience-reach.component.scss'],
})
export class AudienceReachComponent implements OnInit {
  public chartOptions: any;

  constructor() {
    this.chartOptions = {
      chart: {
        width: '100%',
        height: '100%',
        type: 'line',
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      //colors: ["#3F51B5", '#2196F3'],
      series: [
        {
          name: 'Total',
          data: [0.7, 2, 0.7, 3, 0.75, 1.5, 2.5, 1],
        },
        {
          name: 'Follower',
          data: [0, 0, 0, 0, 0, 0, 0, 0],
        },
      ],
      title: {
        text: 'Audience reach',
        align: 'left',
        offsetY: 25,
        offsetX: 20,
      },
      markers: {
        size: 6,
        colors: ['#E786D7', '#7F7FD5'],
        strokeWidth: 0,
        hover: {
          size: 8,
          sizeOffset: 0,
        },
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
      colors: ['#7F7FD5', '#E786D7'],
      labels: [
        '31/01',
        '01/02',
        '02/02',
        '03/02',
        '04/02',
        '05/02',
        '06/02',
        '07/02',
      ],
      xaxis: {
        tooltip: {
          enabled: false,
        },
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        offsetY: -20,
      },
    };
  }

  ngOnInit(): void {}
}
