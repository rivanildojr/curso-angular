import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

import { BackgroundYellowDirective } from '../shared/background-yellow.directive';
import { HighlightMouseDirective } from '../shared/highlight-mouse.directive';
import { HighlightDirective } from '../shared/highlight.directive';
import { NgElseDirective } from '../shared/ng-else.directive';

@Component({
  selector: 'app-diretivas-customizadas',
  standalone: true,
  imports: [
    BackgroundYellowDirective,
    HighlightMouseDirective,
    HighlightDirective,
    NgElseDirective,
    NgIf
  ],
  templateUrl: './diretivas-customizadas.component.html',
  styleUrl: './diretivas-customizadas.component.css',
  hostDirectives: [{
    directive: HighlightDirective,
    inputs: ['defaultColor', 'highlight']
  }]
})
export class DiretivasCustomizadasComponent {
  showCourse: boolean = false;

  onShowCourse() {
    this.showCourse = !this.showCourse;
  }
}
