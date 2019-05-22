import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  
  
  ngOnInit() {
    setTimeout(()=> document.querySelector('.preloader-base').remove(), 300)
    
  }
}
