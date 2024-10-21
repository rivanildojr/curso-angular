import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true
})
export class HighlightDirective implements OnInit {
  @Input() defaultColor: string = 'white';
  @Input('highlight') highlightColor: string = 'yellow';

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave($event: MouseEvent) {
    console.log("🚀 ~ HighlightDirective ~ @HostListener ~ event:", $event);

    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor!: string;

  @HostBinding('style.color') get color() {
    return 'white';
  }

  @HostBinding('style.fontSize.rem')
  @Input() fontSize!: string;

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
