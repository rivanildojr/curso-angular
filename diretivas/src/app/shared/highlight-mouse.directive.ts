import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]',
  standalone: true
})
export class HighlightMouseDirective {

  private backgroundColor!: string;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('mouseenter') onMouseOver() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'yellow');

    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'white');

    this.backgroundColor = 'white';
  }

  // @HostBinding('style.backgroundColor') backgroundColor!: string;

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  };
}
