import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-diretiva-ngclass',
  standalone: true,
  imports: [NgClass],
  templateUrl: './diretiva-ngclass.component.html',
  styleUrl: './diretiva-ngclass.component.css'
})
export class DiretivaNgclassComponent {
  myFavorite: boolean = false;

  onClick() {
    this.myFavorite = !this.myFavorite;
  }
}
