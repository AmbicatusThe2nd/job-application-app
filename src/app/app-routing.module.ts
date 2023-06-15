import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormApplicationComponent } from './form-application/form-application.component';

const routes: Routes = [
  { path: '', redirectTo: 'application', pathMatch: 'full' },
  { path: 'application', component: FormApplicationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
