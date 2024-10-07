import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-diretiva-ngstyle',
  standalone: true,
  imports: [FormsModule, NgStyle],
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrl: './diretiva-ngstyle.component.css'
})
export class DiretivaNgstyleComponent {
  active: boolean = false;
  fontSize: number = 10;

  onChangeActive() {
    this.active =!this.active;
  }
}
