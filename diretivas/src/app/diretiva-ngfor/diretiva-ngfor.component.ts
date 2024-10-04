import { Component } from '@angular/core';

import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-diretiva-ngfor',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './diretiva-ngfor.component.html',
  styleUrl: './diretiva-ngfor.component.css'
})
export class DiretivaNgforComponent {
  courses: string[] = ['Angular', "Java", "TypeScript"];

  newCourses: string[] = [];

  trackByCourses(index: number, course: string) {
    return course;
  }
}
