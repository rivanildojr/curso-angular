import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]',
  standalone: true
})
export class NgElseDirective {
  private hasView: boolean = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

  @Input() set ngElse(conditional: boolean) {
    if (!conditional && !this.hasView) {
      this.hasView = true;

      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.hasView = false;

      this.viewContainerRef.clear();
    }
  }
}
