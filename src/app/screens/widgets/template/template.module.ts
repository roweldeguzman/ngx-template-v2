
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TemplateComponent } from './template.component';

const routes: Routes = [
  { path: '', component: TemplateComponent }
];

@NgModule({
	imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
	],
	declarations: [
    TemplateComponent
  ],
	schemas: [NO_ERRORS_SCHEMA]
})
export class TemplateModule { }
