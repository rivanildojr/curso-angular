import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PipesExamplesComponent } from './pipes-examples/pipes-examples.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PipesExamplesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipes';
}
