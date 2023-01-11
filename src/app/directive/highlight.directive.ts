import { Directive, OnInit, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'font-size', '16px')
  }

  @HostListener('mouseover')mouseover(eventData: Event) {
    this.renderer.setStyle(this.element.nativeElement, 'font-size', '20px')
  }

  @HostListener('mouseleave')mouseleave(eventData: Event) {
    this.renderer.setStyle(this.element.nativeElement, 'font-size', '16px')
  }
}
