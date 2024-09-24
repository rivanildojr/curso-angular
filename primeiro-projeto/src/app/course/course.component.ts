import { Component } from '@angular/core';

import { CourseDetailsComponent } from './course-details/course-details.component';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CourseDetailsComponent],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent {

}
