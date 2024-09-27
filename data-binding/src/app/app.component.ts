import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DataBindingComponent } from './data-binding/data-binding.component';
import { CycleComponent } from './cycle/cycle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataBindingComponent, CycleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  initialValue: number = 50;

  removeCycle: boolean = false;

  changeValue(){
    this.initialValue++;
  }

  destroyCycle() {
    this.removeCycle = true;
  }
}
