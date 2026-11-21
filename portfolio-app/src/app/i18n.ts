import { DOCUMENT, Injectable, computed, effect, inject, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LANGS, Lang, Tr, UI, UiKey } from './data/portfolio';

/** Current language from the URL: /en/… is English, everything else French (default). */
@Injectable({ providedIn: 'root' })
export class I18n {
  private readonly doc = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly url = signal(this.router.url);

  readonly lang = computed<Lang>(() => (/^\/en(\/|$|\?|#)/.test(this.url()) ? 'en' : 'fr'));
  readonly index = computed(() => LANGS.indexOf(this.lang()));

  constructor() {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) this.url.set(e.urlAfterRedirects);
    });
    effect(() => {
      this.doc.documentElement.lang = this.lang();
    });
  }

  t(key: UiKey): string {
    return UI[key][this.index()];
  }

  pick(tr: Tr | null | undefined): string {
    return tr ? tr[this.index()] : '';
  }

  /** Internal link in the current language: link('work', slug) → '/en/work/slug' in English. */
  link(...segments: string[]): string {
    return this.linkIn(this.lang(), ...segments);
  }

  linkIn(lang: Lang, ...segments: string[]): string {
    return (lang === 'en' ? '/en' : '') + '/' + segments.filter(Boolean).join('/');
  }

  /** The current page in the other language. */
  switchTo(lang: Lang): string {
    const path = this.url().split(/[?#]/)[0].replace(/^\/en(?=\/|$)/, '').replace(/^\//, '');
    return this.linkIn(lang, path);
  }
}
