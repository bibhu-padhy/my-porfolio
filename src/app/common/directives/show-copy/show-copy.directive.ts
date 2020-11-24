import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { fromEvent } from 'rxjs';

@Directive({
  selector: '[appShowCopy]'
})
export class ShowCopyDirective {

  copyContainer: HTMLElement | null;

  @HostListener('mouseover') onMouseEnter() {
    setTimeout(() => {
      this.renderer.addClass(this.copyContainer, 'show_copy');
    }, 500);
    if (!this.copyContainer) {
      this.showCopy();
    }
    console.log(this.copyContainer);
    setTimeout(() => {
      this.hideCopy();
    }, 3000);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideCopy();
  }


  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) {
    fromEvent(this.el.nativeElement, 'click')
      .subscribe(res => {
        document.execCommand('copy');
      });

    fromEvent(this.el.nativeElement, 'copy')
      .subscribe((res: ClipboardEvent) => {
        console.log(this.renderer.parentNode(this.copyContainer).innerText);
        // this.renderer.parentNode(this.el.nativeElement)

        res.clipboardData.setData('text/plain', this.el.nativeElement.innerText);
      });
  }

  showCopy() {
    this.copyContainer = this.renderer.createElement('span');
    this.copyContainer.appendChild(this.renderer.createElement('span'));
    this.renderer.appendChild(this.copyContainer, this.renderer.createText('Click to copy'));
    this.renderer.setStyle(this.copyContainer, 'left', `5px`);
    this.renderer.addClass(this.copyContainer, 'copy');
    this.renderer.appendChild(this.el.nativeElement, this.copyContainer);

  }

  hideCopy() {
    this.renderer.removeChild(this.el.nativeElement, this.copyContainer);
    this.copyContainer = null;
  }

}
