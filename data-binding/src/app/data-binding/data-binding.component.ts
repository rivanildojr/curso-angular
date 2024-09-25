import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { InputPropertyComponent } from '../input-property/input-property.component';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule, NgbAlertModule, InputPropertyComponent],
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
  name: string = 'abc';
  nameCourse: string = 'Angular';

  person: any = {
    name: 'Júnior',
    age: 26
  }

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

  onChangeName(event: Event) {
    this.name = (<HTMLInputElement>event.target).value;
  }
}
