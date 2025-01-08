import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AbsComponent } from './categories/abs/abs.component';
import { BackComponent } from './categories/back/back.component';
import { BicepsComponent } from './categories/biceps/biceps.component';
import { ChestComponent } from './categories/chest/chest.component';
import { LegsComponent } from './categories/legs/legs.component';
import { CrunchesVideoComponent } from './crunches-video/crunches-video.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component'; // Import CreateAccountComponent
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Login Page
  { path: 'create-account', component: CreateAccountComponent }, // Create Account Page
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default Redirect to Login
  {
    path: 'menu',
    component: MenuComponent,
    canActivate: [AuthGuard] // Guarded Route
  },
  {
    path: 'abs',
    component: AbsComponent,
    canActivate: [AuthGuard] // Guarded Route
  },
  {
    path: 'back',
    component: BackComponent,
    canActivate: [AuthGuard] // Guarded Route
  },
  {
    path: 'chest',
    component: ChestComponent,
    canActivate: [AuthGuard] // Guarded Route
  },
  {
    path: 'biceps',
    component: BicepsComponent,
    canActivate: [AuthGuard] // Guarded Route
  },
  {
    path: 'legs',
    component: LegsComponent,
    canActivate: [AuthGuard] // Guarded Route
  },
  {
    path: 'crunches-video',
    component: CrunchesVideoComponent,
    canActivate: [AuthGuard] // Guarded Route
  },
  { path: '**', redirectTo: '/login' } // Wildcard Redirect
];
