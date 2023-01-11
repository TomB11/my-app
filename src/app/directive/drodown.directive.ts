import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDrodown]'
})
export class DrodownDirective {
  isOpen = false

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen
  }

  constructor() { }

}
