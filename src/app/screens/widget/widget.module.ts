
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@app/shared'
import { WidgetComponent } from './widget.component';


@NgModule({
	imports: [
    RouterModule.forChild([
      { path: '', component: WidgetComponent }
    ]),
    CommonModule,
    FormsModule,
    SharedModule
	],
	declarations: [
    WidgetComponent
  ],
	schemas: [NO_ERRORS_SCHEMA]
})
export class WidgetModule { }
