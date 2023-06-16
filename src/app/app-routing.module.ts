import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormApplicationComponent } from './form-application/form-application.component';
import { SuccessMessageComponent } from './success-message/success-message.component';

const routes: Routes = [
  { path: '', redirectTo: 'application', pathMatch: 'full' },
  { path: 'application', component: FormApplicationComponent },
  { path: 'application/success', component: SuccessMessageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
