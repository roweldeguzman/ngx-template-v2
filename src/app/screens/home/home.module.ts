
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ScreenActionComponent } from '@app/shared/components'
import { SharedModule } from '@app/shared';

import { HomeComponent } from './home.component';
import { MiniChartsComponent } from './mini-charts/mini-charts.component';

@NgModule({
	imports: [
    FormsModule,
    SharedModule,
    NgxChartsModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent }
    ]),
	],
	declarations: [
    HomeComponent,
    ScreenActionComponent,
    MiniChartsComponent
  ],
	schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule { }