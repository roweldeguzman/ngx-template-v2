
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { WidgetComponent } from './widget.component';

const routes: Routes = [
  { path: '', component: WidgetComponent }
];

@NgModule({
	imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
	],
	declarations: [
    WidgetComponent
  ],
	schemas: [NO_ERRORS_SCHEMA]
})
export class WidgetModule { }
