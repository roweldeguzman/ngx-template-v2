import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScreensComponent } from './screens.component';

const routes: Routes = [
  { 
    path: '', 
    component: ScreensComponent,
    children: [
      { path: 'home', loadChildren: './home/home.module#HomeModule'},
      { path: 'typography', loadChildren: './typography/typography.module#TypographyModule'},
      { path: 'template', loadChildren: './template/template.module#TemplateModule'},
      { path: 'widget', loadChildren: './widget/widget.module#WidgetModule'},      
    ]
  },
  
  { path: '**', redirectTo: "/" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreensRouting { }
