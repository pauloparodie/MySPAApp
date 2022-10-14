import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[ChangeCase]'
})
export class ChangeCaseDirective implements OnInit {

  @Input('ChangeCase') targetCase!: string;

  constructor(private elem: ElementRef) {

  }

  ngOnInit(): void {
    if (this.targetCase === "upper")
      this.elem.nativeElement.innerText = this.elem.nativeElement.innerText.toUpperCase();
    else if (this.targetCase === "lower")
      this.elem.nativeElement.innerText = this.elem.nativeElement.innerText.toLowerCase();
  }

}
