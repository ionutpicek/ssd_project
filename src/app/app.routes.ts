import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AbsComponent } from './abs/abs.component';
import { LegsComponent } from './legs/legs.component';
import { CrunchesVideoComponent } from './crunches-video/crunches-video.component';

export const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' }, // Default route
  { path: 'menu', component: MenuComponent },
  { path: 'abs', component: AbsComponent },
  { path: 'legs', component: LegsComponent },
  { path: 'crunches-video', component: CrunchesVideoComponent },
];
