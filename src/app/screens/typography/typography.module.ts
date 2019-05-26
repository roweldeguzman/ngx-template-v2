import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TypographyComponent } from './typography.component';

const routes: Routes = [
  { path: '', component: TypographyComponent }
];

@NgModule({
	imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
	],
	declarations: [
    TypographyComponent
  ],
	schemas: [NO_ERRORS_SCHEMA]
})
export class TypographyModule { }
