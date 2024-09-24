import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  url: string = 'https://loaiane.training.com';
  courseAngular: boolean = true;
  imageURL: string = 'http://lorempixel.com.br/500/400';

  getValor() {
    return 1;
  }

  getLikeCourse() {
    return true;
  }
}
