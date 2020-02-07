import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CanActivateService } from './auth/can-activate.service';
import { HomeComponent } from './home/home.component';
import { CanLoadService } from './auth/can-load.service';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  { 
    path: 'auth', 
    loadChildren: () => import('./authentication/authentication/authentication.module').then(module => module.AuthenticationModule),
    canLoad: [CanLoadService]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [CanActivateService]
  }
];

@NgModule({
  declarations: [
  ],
  imports: [
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
