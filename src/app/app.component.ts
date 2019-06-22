import { Component, OnInit } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  constructor() {
    setTheme('bs4');
  }

  ngOnInit() {
    setTimeout(()=> document.querySelector('.preloader-base').remove(), 300)
    
  }
}
