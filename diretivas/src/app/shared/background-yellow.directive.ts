import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'button,p[backgroundYellow]',
  standalone: true
})
export class BackgroundYellowDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    // this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'yellow');
  }
}
