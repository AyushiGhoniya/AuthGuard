import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'auth', 
    component: AuthenticationComponent,
    children: [
      {
        path: 'login',
        component: LoginFormComponent,
      },
      {
        path: 'signup',
        component: SignUpFormComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    LoginFormComponent,
    SignUpFormComponent,
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthenticationModule { }
