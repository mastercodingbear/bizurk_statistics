import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-audience-reach',
  templateUrl: './audience-reach.component.html',
  encapsulation: ViewEncapsulation.None,
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
        offsetY: 20,
        style: {
          fontSize: '20px',
          fontWeight: 'bold',
          fontFamily: undefined,
        },
      },
      markers: {
        size: 3,
        strokeWidth: 0,
        hover: {
          size: 5,
          sizeOffset: 0,
        },
      },
      grid: {
        show: true,
        borderColor: '#4D4D4D',
        strokeDashArray: 0,
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
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: true,
          borderType: 'solid',
          height: 5,
          offsetX: 0,
          offsetY: 0,
        },
      },
      yaxis: {
        tickAmount: 4,
        min: 0,
        max: 3,
        axisTicks: {
          show: true,
          borderType: 'solid',
          height: 5,
          offsetX: -1,
          offsetY: 1,
        },
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        offsetY: -20,
        // markers: {
        //   customHTML: function () {
        //     return '<input type="checkbox" name="audience-total" id="audience-total" class="bg-transparent checked:text-transparent checked:hover:border-primary checked:border-primary focus:ring-0 focus:ring-offset-0 checked:focus:border-primary w-4 h-4 rounded-[5px] border-[1.5px] border-primary focus:outline-none"/>';
        //   },
        // },
      },
    };
  }

  ngOnInit(): void {}
}
