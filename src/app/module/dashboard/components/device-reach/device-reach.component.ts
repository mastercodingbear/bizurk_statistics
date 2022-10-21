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
      title: {
        text: 'Gender / Age',
        align: 'left',
        style: {
          fontSize: '20px',
          fontWeight: 'bold',
          fontFamily: undefined,
        },
      },
      chart: {
        animations: {
          speed: 400,
          animateGradually: {
            enabled: false,
          },
        },
        height: '100%',
        type: 'pie',
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
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        offsetX: 20,
      },
    };
  }

  ngOnInit(): void {}
}
