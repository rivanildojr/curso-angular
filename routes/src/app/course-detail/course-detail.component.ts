import { CoursesService } from './../courses/courses.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css',
})
export class CourseDetailComponent implements OnInit, OnDestroy {
  id!: number;
  course: any = null;
  inscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService,
  ) {}

  ngOnInit(): void {
    this.inscription = this.route.params.subscribe((params: any) => {
      this.id = params['id'];

      this.course = this.coursesService.getCourse(Number(this.id));

      if (!this.course) {
        this.router.navigate(['/naoEncontrado']);
      }
    });
  }

  ngOnDestroy(): void {
    this.inscription.unsubscribe();
  }
}
