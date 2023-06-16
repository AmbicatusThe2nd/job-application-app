import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormApplicationComponent } from './form-application/form-application.component';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AdminGuard } from 'src/guards/admin-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'application', pathMatch: 'full' },
  { path: 'application', component: FormApplicationComponent },
  { path: 'application/success', component: SuccessMessageComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
