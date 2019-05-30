import { Component, OnInit } from '@angular/core';
import { colorScheme } from '@app/configs/ngx-charts.colors';

@Component({
  selector: 'app-pie-charts',
  templateUrl: './pie-charts.component.html',
  styleUrls: ['./pie-charts.component.scss']
})

export class PieChartsComponent implements OnInit {

  constructor() { }

  pieBasicData = [
    { "name": "Malcolm Tien", "value": 40632 },
    { "name": "Leida Crandall", "value": 49737 },
    { "name": "Lasandra Wiggs", "value": 36745 },
    { "name": "Megan Chitwood", "value": 36240 },
    { "name": "Megan Chitwood", "value": 33000 },
    { "name": "Marica Ake", "value": 35800 }
  ];

  view: Array<number> = [700, 300];

  colorScheme = {domain: colorScheme };

  ngOnInit() {
    this.getWidth();

    window.onresize = () => {
      this.getWidth();
    }
  }
  /**
   * this is for chart responsiveness to center of card
   */
  getWidth () {
    let element: HTMLElement = document.querySelector('.pie-chart-parent');
    this.view = [element.offsetWidth - 50, 300];
  }
}
