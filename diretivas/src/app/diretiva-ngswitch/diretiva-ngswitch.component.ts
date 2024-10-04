import { Component } from '@angular/core';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-diretiva-ngswitch',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './diretiva-ngswitch.component.html',
  styleUrl: './diretiva-ngswitch.component.css'
})
export class DiretivaNgswitchComponent {
  tab: string = 'home';

  onSetTab(value: string): void {
    this.tab = value;
  }
}
