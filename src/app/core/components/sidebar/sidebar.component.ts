import { Component } from '@angular/core';

import { HelperUtil } from '@app/core/util';
import { NavigationService } from '@app/core/services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [HelperUtil]
})
export class SidebarComponent {

  constructor(private navigation: NavigationService) {}

  toggleSidebar () {
    this.navigation.toggleSidebar();    
  }

}
