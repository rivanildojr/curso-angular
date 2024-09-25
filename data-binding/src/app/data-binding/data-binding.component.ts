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
  currentValue: string = '';
  saveValue: string = '';
  isMouseOver: boolean = false;

  getValor() {
    return 1;
  }

  getLikeCourse() {
    return true;
  }

  clickButton() {
    alert('Botão clicado!');
  }

  onKeyUp(event: KeyboardEvent) {
    console.log("🚀 ~ DataBindingComponent ~ onKeyUp ~ event:", event)
    this.currentValue = (<HTMLInputElement>event.target).value
  }

  savedValue(value: string) {
    this.saveValue = value;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }
}
