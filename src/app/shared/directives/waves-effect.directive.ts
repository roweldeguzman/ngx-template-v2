import { Directive, ElementRef, OnInit } from '@angular/core';
import { init, attach } from 'node-waves'

@Directive({ selector: '[waves-effect]' })

export class WavesEffectDirective implements OnInit {
	constructor(private el: ElementRef) { }

	ngOnInit() {
		this.el.nativeElement.classList.add('waves-effect');
		init();
		if (this.el.nativeElement.classList.contains('btn-float') || this.el.nativeElement.classList.contains('btn-icon')) {
			attach(this.el.nativeElement, ['waves-circle']);
		} else if (this.el.nativeElement.classList.contains('btn-light')) {
			attach(this.el.nativeElement, ['waves-light']);
		} else {
			attach(this.el.nativeElement);
		}
	}
}