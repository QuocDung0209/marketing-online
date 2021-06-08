import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    TechnologiesComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }
