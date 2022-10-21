import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'country-reach-progress',
  templateUrl: './country-reach-progress.component.html',
  styleUrls: ['./country-reach-progress.component.scss'],
})
export class CountryReachProgressComponent implements OnInit {
  @Input() country = '';
  @Input() percent = 0;
  public Math = Math;

  constructor() {}

  ngOnInit(): void {}
}
