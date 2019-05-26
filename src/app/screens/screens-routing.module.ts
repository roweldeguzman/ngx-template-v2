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
      { path: 'widgets/widget', loadChildren: './widgets/widget/widget.module#WidgetModule'},
      { path: 'widgets/template', loadChildren: './widgets/template/template.module#TemplateModule'},
    ]
  },
  
  { path: '**', redirectTo: "/" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreensRouting { }
