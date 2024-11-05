import { Component, inject } from '@angular/core';
import {
  UpperCasePipe,
  DecimalPipe,
  CurrencyPipe,
  DatePipe,
  JsonPipe,
  LowerCasePipe,
  TitleCasePipe,
} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CamelCasePipe } from '../camel-case.pipe';
import { ArrayFilterPipe } from '../array-filter.pipe';

import { LocaleService } from '../shared/locale.service';

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
    CamelCasePipe,
    ArrayFilterPipe,
    FormsModule,
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

  books: string[] = ['TypeScript', 'JavaScript'];

  filter!: string;

  localeService = inject(LocaleService);

  setLanguage(value: string): void {
    this.localeService.setLocale(value);
  }

  addBook(book: string) {
    this.books.push(book);
  }
}
