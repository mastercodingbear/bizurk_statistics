import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-gender-reach',
  templateUrl: './gender-reach.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./gender-reach.component.scss'],
})
export class GenderReachComponent implements OnInit {
  public chartOptions: any;

  constructor() {
    this.chartOptions = {
      title: {
        text: 'Gender / Age',
        align: 'left',
        offsetY: 20,
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
        width: '100%',
        height: '100%',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '70%',
          borderRadius: 5,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
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
        tickAmount: 2,
        axisTicks: {
          show: true,
          borderType: 'solid',
          color: '#979797',
          height: 5,
          offsetX: -1,
          offsetY: 1,
        },
        labels: {
          show: true,
          align: 'right',
          minWidth: 0,
          maxWidth: 160,
          offsetX: 0,
          offsetY: 0,
          rotate: 0,
          formatter: (value: number) => {
            return `${value} %`;
          },
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
      fill: {
        opacity: 1,
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        offsetY: -20,
        markers: {
          width: 16,
          height: 16,
          radius: 5,
        },
      },
    };
  }

  ngOnInit(): void {}
}
