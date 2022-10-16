import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCard]',
})
export class CardDirective {
  class = 'block bg-white p-4 rounded shadow';

  constructor(elementRef: ElementRef, renderer: Renderer2) {
    this.class.split(' ').forEach((cls) => {
      renderer.addClass(elementRef.nativeElement, cls);
    });
  }
}
