import { Component } from '@angular/core';
import {
  UpperCasePipe,
  DecimalPipe,
  CurrencyPipe,
  DatePipe,
  JsonPipe,
  LowerCasePipe,
  TitleCasePipe
} from '@angular/common';

@Component({
  selector: 'app-pipes-examples',
  standalone: true,
  imports: [
    UpperCasePipe,
    DecimalPipe,
    CurrencyPipe,
    DatePipe,
    JsonPipe,
    LowerCasePipe,
    TitleCasePipe,
  ],
  templateUrl: './pipes-examples.component.html',
  styleUrl: './pipes-examples.component.css',
})
export class PipesExamplesComponent {
  book: any = {
    title: 'Learning JavaScript Data Structures and Algorithms 2nd ed',
    rating: 4.54321,
    numberPages: 314,
    price: 44.99,
    publicationDate: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP',
  };
}