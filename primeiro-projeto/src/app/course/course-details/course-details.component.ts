import { Component } from '@angular/core';

import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-details',
  standalone: true,
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent {
  portalName: string = "http://loiane.training";

  courses: string[];

  constructor(private courseService: CourseService) {
    this.courses = this.courseService.getCourses();
  }
}
