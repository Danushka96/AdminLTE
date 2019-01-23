import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {Dashboard2Component} from './dashboard2/dashboard2.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'dashboard2', component: Dashboard2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent, Dashboard2Component];
