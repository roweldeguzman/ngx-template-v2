import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@app/shared';

import { TypographyComponent } from './typography.component';
import { HeadingsComponent } from './headings/headings.component';
import { InlineTextComponent } from './inline-text/inline-text.component';
import { HelperClassComponent } from './helper-class/helper-class.component';
import { BlockquotesComponent } from './blockquotes/blockquotes.component';
import { ListsComponent } from './lists/lists.component';


@NgModule({
	imports: [
    RouterModule.forChild([
      { path: '', component: TypographyComponent }
    ]),
    CommonModule,
    FormsModule,
    SharedModule
	],
	declarations: [
    TypographyComponent,
    HeadingsComponent,
    InlineTextComponent,
    HelperClassComponent,
    BlockquotesComponent,
    ListsComponent
  ],
	schemas: [NO_ERRORS_SCHEMA]
})
export class TypographyModule { }
