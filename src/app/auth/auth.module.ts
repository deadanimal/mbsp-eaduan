import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollapseModule, ProgressbarModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';

import { AuthRoutes } from './auth.routing';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent, 
    ForgotComponent, 
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ProgressbarModule.forRoot(),
    CollapseModule.forRoot(),
    RouterModule.forChild(AuthRoutes),
    FormsModule
  ]
})
export class AuthModule { }
