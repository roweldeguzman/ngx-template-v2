import { Component, OnInit } from '@angular/core';
import { Router, Event as RouterEvent } from '@angular/router';
import { NavigationService } from '@app/core/services';

@Component({
  selector: 'app-screens',
  templateUrl: './screens.component.html'
})

export class ScreensComponent implements OnInit {

  constructor(private router: Router, private navigation: NavigationService) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.navigation.navigationInterceptor(event);
    });
  }

  ngOnInit() {
    if (this.router.url == '/'){
      this.router.navigate(["/home"]);
    }
  }
}
