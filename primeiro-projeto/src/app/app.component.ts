import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MyFirstComponent } from './my-first/my-first.component'
import { MySecondComponent } from './my-second/my-second.component'

import { CourseComponent } from './course/course.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyFirstComponent, MySecondComponent, CourseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Rivanildo';
}
