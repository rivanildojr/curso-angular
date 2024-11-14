import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';
import { RouterLink } from '@angular/router';

import { MatActionList } from '@angular/material/list'

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [MatActionList, RouterLink],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
  courses: any[] = [];

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.courses = this.coursesService.getCourses();
  }
}
