import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HelperUtil } from '@app/core/util';
import { NavigationService } from '@app/core/services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [HelperUtil]
})
export class SidebarComponent implements OnInit {

  constructor(private route: Router, private navigation: NavigationService, private helper: HelperUtil) {}

  scrollbarDisableOnMobile: Boolean = false;

  ngOnInit() {}

  contains (name: string) : boolean{

    if (this.helper.in_array(name, this.route.url.split('/'))) return true;

    return false;
    
  }

  toggleSidebar () {
    this.navigation.toggleSidebar();    
  }

}
