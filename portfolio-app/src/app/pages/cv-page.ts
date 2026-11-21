import { Component, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18n } from '../i18n';
import { Seo } from '../seo';
import { Icon } from '../shared/icon';
import { DATA } from '../data/portfolio';

@Component({
  selector: 'app-cv-page',
  imports: [RouterLink, Icon],
  host: { class: 'block' },
  template: `
    <section class="mx-auto max-w-5xl px-5 py-12 md:py-16">
      <nav class="mb-6 flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
        <a [routerLink]="i18n.link('')" class="hover:text-ink">{{ i18n.t('home') }}</a><span aria-hidden="true">/</span><span class="font-semibold text-ink">{{ i18n.t('cv') }}</span>
      </nav>
      <div class="mb-8 flex flex-wrap items-end justify-between gap-4">
        <h1 class="section-h">{{ i18n.t('cv_h') }}</h1>
        <a href="img/img-cv.svg" target="_blank" rel="noopener" class="btn btn-light"><app-icon name="external" class="size-4" />{{ i18n.t('cv_open') }}</a>
      </div>
      <div class="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-900/5 sm:p-6">
        <img src="img/img-cv.svg" [alt]="i18n.t('cv_h') + ' — ' + name" class="w-full" />
      </div>
    </section>
  `,
})
export class CvPage {
  protected readonly i18n = inject(I18n);
  private readonly seo = inject(Seo);
  protected readonly name = DATA.person.name;

  constructor() {
    effect(() => {
      this.seo.set({
        lang: this.i18n.lang(),
        title: `${this.i18n.t('cv_h')} · ${this.name}`,
        description: this.i18n.t('meta_desc'),
        path: 'cv',
        image: 'img/moi.png',
        jsonLd: { '@context': 'https://schema.org', '@type': 'ProfilePage', name: `${this.i18n.t('cv_h')} · ${this.name}` },
      });
    });
  }
}
