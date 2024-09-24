import { Component } from '@angular/core';

@Component({
  selector: 'app-course-details',
  standalone: true,
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent {
  portalName: string = "http://loiane.training"

  courses: string[] = ['Java', 'Ext JS', 'Angular'];
}
