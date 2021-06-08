import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { TechnologiesComponent } from './technologies/technologies.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'technologies'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
