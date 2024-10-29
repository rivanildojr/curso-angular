import { Component, OnInit } from '@angular/core';

import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
  providers: [CoursesService]
})
export class CoursesComponent implements OnInit {
  courses: string[] = [];

  // coursesService: CoursesService;

  constructor(private coursesService: CoursesService) {
    // this.coursesService = new CoursesService();
    // this.coursesService = _coursesService;
  }

  ngOnInit(): void {
    this.courses = this.coursesService.getCourses();

    CoursesService.createdNewCourse.subscribe(course => this.courses.push(course));
  }
}
