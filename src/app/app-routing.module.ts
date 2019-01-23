import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {Dashboard2Component} from './dashboard2/dashboard2.component';
import {TopNavComponent} from './top-nav/top-nav.component';
import {BoxedComponent} from './boxed/boxed.component';
import {WidgetsComponent} from './widgets/widgets.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'dashboard2', component: Dashboard2Component},
  { path: 'top-nav', component: TopNavComponent},
  { path: 'boxed', component: BoxedComponent},
  { path: 'widgets', component: WidgetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  DashboardComponent,
  Dashboard2Component,
  TopNavComponent,
  BoxedComponent,
  WidgetsComponent
];
