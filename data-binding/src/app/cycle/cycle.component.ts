import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  afterNextRender,
  afterRender,
  OnDestroy,
  Input
} from '@angular/core';

@Component({
  selector: 'app-cycle',
  standalone: true,
  imports: [],
  templateUrl: './cycle.component.html',
  styleUrl: './cycle.component.css'
})
export class CycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() initialValue: number = 10;

  constructor() {
    this.log('constructor');
  }

  ngOnInit(): void {
    this.log('ngOnInit');
  }

  ngOnChanges() {
    this.log('ngOnChanges');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  afterNextRender(){
    this.log('afterNextRender');
  }

  afterRender() {
    this.log('afterRender');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }
}
