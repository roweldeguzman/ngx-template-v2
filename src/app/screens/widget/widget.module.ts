
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@app/shared'
import { WidgetComponent } from './widget.component';
import { ImageHoverComponent } from './image-hover/image-hover.component';
import { CardBlogComponent } from './card-blog/card-blog.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { TabsComponent } from './tabs/tabs.component';
import { TodoComponent } from './todo/todo.component';


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
    WidgetComponent,
    ImageHoverComponent,
    CardBlogComponent,
    TaskListComponent,
    ContactInfoComponent,
    TabsComponent,
    TodoComponent
  ],
	schemas: [NO_ERRORS_SCHEMA]
})
export class WidgetModule { }
