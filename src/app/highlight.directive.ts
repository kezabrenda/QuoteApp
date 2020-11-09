import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'transparent';
 }

@HostListener('mouseenter') onMouseEnter() {
  this.highlight(this.highlightColor || 'wheat');
}

@HostListener('mouseleave') onMouseLeave() {
  this.highlight(null);
}

private highlight(color: string) {
  this.el.nativeElement.style.backgroundColor = color;
}

@Input('appHighlight') highlightColor: string;

}
