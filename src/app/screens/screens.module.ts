import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { ScreensRouting } from './screens-routing.module';
import { ScreensComponent } from './screens.component';
import {
  HeaderComponent,
  SearchComponent,
  HamburgerComponent,
  TopNavigationComponent,

  LoaderComponent,

  SidebarComponent,
  LoggedUserComponent,
  NavigationComponent,

  FooterComponent
} from '@app/core/components';
import { SharedModule } from '@app/shared';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
	suppressScrollX: true
};

@NgModule({
  imports: [
    ScreensRouting,
    CommonModule,
    PerfectScrollbarModule,
    SharedModule
  ],
  declarations: [
    ScreensComponent,
    HeaderComponent,
    SearchComponent,
    TopNavigationComponent,
    
    LoaderComponent,

    HamburgerComponent,
    SidebarComponent,
    LoggedUserComponent,
    NavigationComponent,

    FooterComponent
	],
	providers: [{
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }],
  schemas: [NO_ERRORS_SCHEMA]
})

export class ScreensModule { }