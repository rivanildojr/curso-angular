import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SinginComponent } from './singin/singin.component';
import { CoursesComponent } from './courses/courses.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: SinginComponent
  },
  {
    path: 'cursos',
    component: CoursesComponent
  },
];
