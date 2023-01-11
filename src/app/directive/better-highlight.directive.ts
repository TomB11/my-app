import { Directive, OnInit, Renderer2, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent'
  @Input() highlightColor: string = 'red'

  constructor(private elementReference: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.elementReference.nativeElement, 'backgroundcolor', this.defaultColor)
    console.log("AAAAAA")
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elementReference.nativeElement, 'backgroundcolor', this.highlightColor)
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elementReference.nativeElement, 'backgroundcolor', this.defaultColor)
  }
}
