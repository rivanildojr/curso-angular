import { Component } from '@angular/core';

import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [NgbAlertModule],
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
