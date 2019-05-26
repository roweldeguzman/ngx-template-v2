import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-charts',
  templateUrl: './mini-charts.component.html',
  styleUrls: ['./mini-charts.component.scss']
})
export class MiniChartsComponent implements OnInit {

  constructor() { }
  data = [
    { "name": "Jan", "value": 2500 },
    { "name": "Feb", "value": 2000 },
    { "name": "Mar", "value": 3000 },
    { "name": "Apr", "value": 4000 },
    { "name": "May", "value": 5000 },
    { "name": "Jun", "value": 6000 },
    { "name": "Jul", "value": 7000 },
    { "name": "Aug", "value": 8000 },
    { "name": "Sep", "value": 9000 },
    { "name": "Oct", "value": 10000 },
    { "name": "Nov", "value": 11000 },
    { "name": "Dec", "value": 12000 }
  ];

  lineData = [
    { "name": "Jan", "value": 12000 },
    { "name": "Feb", "value": 8000 },
    { "name": "Mar", "value": 3000 },
    { "name": "Apr", "value": 4000 },
    { "name": "May", "value": 5000 },
    { "name": "Jun", "value": 6000 },
    { "name": "Jul", "value": 9000 },
    { "name": "Aug", "value": 2000 },
    { "name": "Sep", "value": 7000 },
    { "name": "Oct", "value": 10000 },
    { "name": "Nov", "value": 11000 },
    { "name": "Dec", "value": 2500 }
  ];

  sales = [
    {
      "name": "Sale",
      "series": this.lineData
    }
  ]
  tickets = [
    {
      "name": "Ticket Support",
      "series": this.lineData
    }
  
  ]
  viewVertical: Array<number> = [150, 75];
  viewLine: Array<number> = [150, 75];
  gradient = false;
  colorScheme = {
    domain: ['#FFFFFF']
  };
  ngOnInit() {
  }

}
