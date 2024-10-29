import { Component, OnInit } from '@angular/core';

import { CoursesService } from './../courses/courses.service';

import { ReceiveCreatedCourseComponent } from '../receive-created-course/receive-created-course.component';

@Component({
  selector: 'app-create-course',
  standalone: true,
  imports: [ReceiveCreatedCourseComponent],
  templateUrl: './create-course.component.html',
  styleUrl: './create-course.component.css',
  providers: [CoursesService],
})
export class CreateCourseComponent implements OnInit {
  courses: string[] = [];

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.courses = this.coursesService.getCourses();
  }

  onAddCourse(course: string): void {
    this.coursesService.addCourse(course);
  }
}
