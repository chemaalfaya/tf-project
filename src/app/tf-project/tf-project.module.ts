import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TfProjectRoutingModule } from './tf-project-routing.module';
import { TfProjectComponent } from './tf-project.component';


@NgModule({
  imports: [
    CommonModule,
    TfProjectRoutingModule
  ],
  declarations: [TfProjectComponent]
})
export class TfProjectModule {
  static forRoot() {
    return {
      ngModule: TfProjectModule,
      providers: []
    };
  }
}
