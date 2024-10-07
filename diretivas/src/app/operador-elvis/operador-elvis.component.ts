import { Component } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  standalone: true,
  imports: [],
  templateUrl: './operador-elvis.component.html',
  styleUrl: './operador-elvis.component.css'
})
export class OperadorElvisComponent {
  task = {
    description: 'Descrição da tarefa',
    responsible: {
      user: {
        name: 'Operador elvis',
      },
      name: 'Nome do responsável'
    }
  }
}
