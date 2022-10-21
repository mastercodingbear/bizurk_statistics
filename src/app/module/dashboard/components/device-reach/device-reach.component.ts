import { Component, OnInit } from '@angular/core';
import { ApexOptions } from 'ng-apexcharts';

@Component({
  selector: 'app-device-reach',
  templateUrl: './device-reach.component.html',
  styleUrls: ['./device-reach.component.scss'],
})
export class DeviceReachComponent implements OnInit {
  public chartOptions: any;
  constructor() {
    this.chartOptions = {
      chart: {
        animations: {
          speed: 400,
          animateGradually: {
            enabled: false,
          },
        },
        fontFamily: 'inherit',
        foreColor: 'inherit',
        height: '100%',
        type: 'pie',
        sparkline: {
          enabled: true,
        },
      },
      colors: ['#E786D7', '#7F7FD5'],
      dataLabels: {
        enabled: true,
        textAnchor: 'middle',
      },
      labels: ['Desktop', 'Mobile'],
      plotOptions: {
        pie: {
          startAngle: 40,
          endAngle: 400,
          customScale: 0.9,
          expandOnClick: true,
        },
      },
      states: {
        hover: {
          filter: {
            type: 'none',
          },
        },
        active: {
          filter: {
            type: 'none',
          },
        },
      },
      series: [14, 86],
    };
  }

  ngOnInit(): void {}
}
