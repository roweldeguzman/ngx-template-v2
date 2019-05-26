import { Component, OnInit } from '@angular/core';
import { NavigationService } from '@app/core/services';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit {

  constructor(private navigation: NavigationService) { }

  ngOnInit() {
  }

  toggleSidebar ():void {
    this.navigation.toggleSidebar();
  }
}
