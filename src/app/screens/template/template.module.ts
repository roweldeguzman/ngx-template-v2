
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@app/shared'
import { TemplateComponent } from './template.component';
import { BasicComponent } from './basic/basic.component';
import { NoHeaderComponent } from './no-header/no-header.component';
import { MaterialComponent } from './material/material.component';

@NgModule({
	imports: [
    RouterModule.forChild([
      { path: '', component: TemplateComponent }
    ]),
    CommonModule,
    FormsModule,
    SharedModule
	],
	declarations: [
    TemplateComponent,
    BasicComponent,
    NoHeaderComponent,
    MaterialComponent
  ],
	schemas: [NO_ERRORS_SCHEMA]
})
export class TemplateModule { }
