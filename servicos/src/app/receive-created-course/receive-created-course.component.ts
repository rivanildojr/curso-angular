import { Component, OnInit } from '@angular/core';

import { CoursesService } from './../courses/courses.service';

@Component({
  selector: 'app-receive-created-course',
  standalone: true,
  imports: [],
  templateUrl: './receive-created-course.component.html',
  styleUrl: './receive-created-course.component.css',
})
export class ReceiveCreatedCourseComponent implements OnInit {
  course: string = '';

  constructor(private coursesService: CoursesService){}

  ngOnInit(): void {
    this.coursesService.emitterCourseCreate.subscribe(course => this.course = course);
  }
}
