import { Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "my-first-component",
  template: `
    <h1>Hello World!</h1>

    <p>Meu primeiro componente com Angular 2</p>
  `,
  styles: `
    p {
      color: green;
      font-size: 24px;
    }
  `,

})
export class MyFirstComponent {}
