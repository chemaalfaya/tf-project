import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TfProjectComponent } from './tf-project.component';


const routes: Routes = [
  { path: '', component: TfProjectComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TfProjectRoutingModule { }
