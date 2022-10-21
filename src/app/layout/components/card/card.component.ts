import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() head: string = "";
  @Input() count: number = 0;
  @Input() increase: number = 0;
  public Math = Math;


  constructor() { }

  ngOnInit(): void {
  }

}
