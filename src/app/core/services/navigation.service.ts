import { Injectable } from '@angular/core';
import { Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class NavigationService {
  
  constructor() {}

  navigationInterceptor(event: RouterEvent) {
    if (event instanceof NavigationStart) {
      document.querySelector(".main-overlay").classList.add("active");
    }

    if (event instanceof NavigationEnd) {      

      setTimeout(()=> this.toggleSidebar('remove'), 50);

      if (document.querySelector(".main-overlay") !== null){
        document.querySelector(".main-overlay").classList.remove("active");
      }
    }

    if (event instanceof NavigationCancel) {
      console.info("Layout.component.ts", "NavigationCancel")
    }

    if (event instanceof NavigationError) {
      console.info("Layout.component.ts", "NavigationError")
    }
  }

  toggleSidebar(mode: string = 'toggle'): void {
    document.querySelectorAll(".hamburger--spring, aside, .aside-profile, .overlay, footer").forEach(element => {
      if (mode === 'toggle') element.classList.toggle("active")
      else element.classList.remove("active")
    });
  }
}