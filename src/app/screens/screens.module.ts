import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ScreensComponent }      from './screens.component';
import { HeaderComponent } from '../core/header/header.component';
import { SidebarComponent  } from '../core/sidebar/sidebar.component'


const routes: Routes = [
	{
		path: '', component: ScreensComponent
	},{
    path: '**', redirectTo: "/"
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
		CommonModule	
  ],
  declarations: [
    ScreensComponent,
    HeaderComponent,
    SidebarComponent
	],
	providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})

export class ScreensModule { }