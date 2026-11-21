import { Component, afterNextRender, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { SiteHeader } from './layout/site-header';
import { SiteFooter } from './layout/site-footer';

/** Height of the sticky header, kept free above anchor targets. */
const HEADER_PX = 72;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteHeader, SiteFooter],
  host: { class: 'flex min-h-dvh flex-col' },
  template: `
    <a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-ink">Skip to content</a>
    <header appSiteHeader></header>
    <main id="main" class="flex-1"><router-outlet /></main>
    <footer appSiteFooter></footer>
  `,
})
export class App {
  constructor() {
    const scroller = inject(ViewportScroller);
    scroller.setOffset([0, HEADER_PX]);
    // Coming from another page with #projects, #contact…: scroll there once the page is drawn.
    afterNextRender(() => {
      const id = location.hash.slice(1);
      if (id) scroller.scrollToAnchor(id);
    });
  }
}
