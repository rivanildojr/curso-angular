import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DiretivaNgifComponent, DiretivaNgswitchComponent, DiretivaNgforComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'diretivas';
}
