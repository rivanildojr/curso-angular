import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [],
  templateUrl: './input-property.component.html',
  styleUrl: './input-property.component.css',
  // inputs: ['nameCourse:name']
})
export class InputPropertyComponent {
  // nameCourse: string = '';
  @Input('name') nameCourse: string = '';
}
