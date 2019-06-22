import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { HelperUtil } from '@app/core/util';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  constructor(private route: Router, private helper: HelperUtil) { }

  scrollbarDisableOnMobile: Boolean = false;

  contains (name: string) : boolean{

    if (this.helper.in_array(name, this.route.url.split('/'))) return true;

    return false;
    
  }

}
