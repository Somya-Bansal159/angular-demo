import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core'

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') open: boolean;
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.open = this.elRef.nativeElement.contains(event.target) ? !this.open : false;
    }

    constructor(private elRef: ElementRef) {}
     
}