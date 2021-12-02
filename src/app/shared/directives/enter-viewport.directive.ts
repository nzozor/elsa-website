import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, EventEmitter, HostBinding, Inject, Input, OnDestroy, OnInit, Output, PLATFORM_ID } from '@angular/core';
import { delay } from 'rxjs/operators';

@Directive({
  selector: '[benoldiEnterViewport]'
})
export class EnterViewportDirective  implements OnDestroy, OnInit, AfterViewInit {
  threshold = 0;
  @Input('benoldiEnterViewport') delay = '';
  @Output() visible = new EventEmitter<HTMLElement>();
  @HostBinding('class') elementVisibilityClass: string;
  private observer: IntersectionObserver | undefined;


  constructor(private element: ElementRef, @Inject(PLATFORM_ID) private plateformId: {}) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.plateformId)) {
      this.createObserver();
    }
  }

  ngAfterViewInit(): void {
    this.startObservingElements();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }
  }

  private createObserver(): void {
    const options = {
      rootMargin: '0px',
      threshold: this.threshold,
    };

    const isIntersecting = (entry: IntersectionObserverEntry) =>
      entry.isIntersecting || entry.intersectionRatio > 0;

    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (isIntersecting(entry)) {
          setTimeout(() => {
            this.elementVisibilityClass = 'enter-view-port visible';
          }, parseInt(this.delay, 10));
        } else {
          setTimeout(() => {
            this.elementVisibilityClass = 'enter-view-port';
          }, parseInt(this.delay, 10));
        }
      });
    }, options);
  }

  private startObservingElements(): void {
    if (!this.observer) {
      return;
    }

    this.elementVisibilityClass = 'enter-view-port';
    this.observer.observe(this.element.nativeElement);
  }
}
