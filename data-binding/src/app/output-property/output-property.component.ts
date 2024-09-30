import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './output-property.component.html',
  styleUrl: './output-property.component.css',
  // outputs: ['valueChange']
})
export class OutputPropertyComponent {
  @Input() value: number = 0;
  @Input() valueSecond: number = 0;

  @Output() changeValue = new EventEmitter();
  @Output() valueSecondChange = new EventEmitter();

  @ViewChild('fieldInput') fieldValueInput!: ElementRef;


  increment() {
    this.fieldValueInput.nativeElement.value++;
    this.changeValue.emit(this.value);
  }

  decrement() {
    this.fieldValueInput.nativeElement.value--;
    this.changeValue.emit(this.value);
  }

  incrementSecond() {
    this.valueSecond++;
    this.valueSecondChange.emit(this.valueSecond);
  }

  decrementSecond() {
    this.valueSecond--;
    this.valueSecondChange.emit(this.valueSecond);
  }
}
