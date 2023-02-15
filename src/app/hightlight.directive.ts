import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})

export class HightlightDirective {

  @Input() appHightlight:string='';
  @Input() defaultColor:string='';
  constructor(private el:ElementRef) {
    this.el.nativeElement.style.backgroundColor = '';
   }
   @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHightlight || this.defaultColor || 'red');
    }
    @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
    }
    
    private highlight(color:string){
      this.el.nativeElement.style.backgroundColor = color;
    } 
}

