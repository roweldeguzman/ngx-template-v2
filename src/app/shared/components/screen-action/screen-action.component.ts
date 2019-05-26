import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-screen-action',
  templateUrl: './screen-action.component.html',
  styleUrls: ['./screen-action.component.scss']
})
export class ScreenActionComponent implements OnInit {

  constructor() { }

  @Input() title: string;
  @Input() subTitle: string;
  @Input() action: boolean = false; // wither show action buttons or not
  
  ngOnInit() {
  }

}
