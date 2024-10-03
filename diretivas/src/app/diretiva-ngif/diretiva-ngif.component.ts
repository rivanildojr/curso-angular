import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-diretiva-ngif',
  standalone: true,
  imports: [NgIf],
  templateUrl: './diretiva-ngif.component.html',
  styleUrl: './diretiva-ngif.component.css'
})
export class DiretivaNgifComponent {
  courses: string[] = ['Angular'];

  showCourse: boolean = false;

  onShowCourse() {
    this.showCourse = !this.showCourse;
  }
}
