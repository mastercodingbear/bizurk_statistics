import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApexOptions } from 'ng-apexcharts';

@Component({
  selector: 'app-device-reach',
  templateUrl: './device-reach.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./device-reach.component.scss'],
})
export class DeviceReachComponent implements OnInit {
  public chartOptions: any;
  constructor() {
    this.chartOptions = {
      title: {
        text: 'Reach by device',
        align: 'left',
        style: {
          fontSize: '20px',
          fontWeight: 'bold',
          fontFamily: undefined,
        },
        offsetX: 24,
        offsetY: 20,
      },
      chart: {
        animations: {
          speed: 400,
        },
        height: '100%',
        type: 'pie',
        events: {
          animationEnd: function (ctx: any, opts: any) {
            console.log(ctx);
            console.log(opts);
            ctx.toggleDataPointSelection(0, 1);
          },
        },
      },
      colors: ['#E786D7', '#7F7FD5'],
      dataLabels: {
        enabled: true,
        textAnchor: 'start',
        style: {
          fontSize: '18px',
        },
        offsetX: 10,
        offsetY: 10,
        dropShadow: {
          enabled: false,
        },
        formatter: function (val: number) {
          return `${val}%`;
        },
      },
      labels: ['Desktop', 'Mobile'],
      plotOptions: {
        pie: {
          startAngle: 40,
          endAngle: 400,
          customScale: 0.75,
          expandOnClick: true,
          offsetY: 20,
          offsetX: -30,
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
        position: 'right',
        floating: true,
        offsetY: 60,
      },
      yaxis: {
        crosshairs: {
          show: true,
          position: 'back',
          stroke: {
            color: '#b6b6b6',
            width: 1,
            dashArray: 0,
          },
        },
      },
      stroke: {
        show: true,
        width: 10,
        colors: '#FDFDFF',
      },
    };
  }

  ngOnInit(): void {}
}
