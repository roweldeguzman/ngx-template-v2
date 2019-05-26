import { Directive, HostListener, ElementRef } from '@angular/core';
import { HelperUtil } from '@app/core/util'

@Directive({
	selector: '[toggle-submenu]'
})

export class ToggleSubMenuDirective {

	constructor(private helper: HelperUtil) { }

	@HostListener('click', ['$event']) onClick(event: any){
    let target = event.target.nodeName === 'A' ? event.target : this.helper.getParent('A', event.target, 'tag'); 
        
    this.helper.sideToggle(target.nextSibling, 250);
    target.parentNode.classList.toggle('toggled');
    		
	}

}
