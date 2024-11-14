import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SinginComponent } from './singin/singin.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseNotFoundComponent } from './course-not-found/course-not-found.component';

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
  {
    path: 'curso/:id',
    component: CourseDetailComponent
  },
  {
    path: 'naoEncontrado',
    component: CourseNotFoundComponent
  },
];
