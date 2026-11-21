import { Component, inject } from '@angular/core';
import { I18n } from '../i18n';
import { Icon } from '../shared/icon';
import { DATA } from '../data/portfolio';

@Component({
  selector: 'footer[appSiteFooter]',
  imports: [Icon],
  host: { class: 'block bg-ink text-slate-400' },
  template: `
    <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm sm:flex-row">
      <p>© {{ year }} {{ p.name }}. {{ i18n.t('rights') }} <span class="text-slate-500">{{ i18n.t('built') }}</span></p>
      <div class="flex items-center gap-2">
        <a [href]="p.github" target="_blank" rel="noopener" class="grid size-9 place-items-center rounded-lg hover:bg-white/5 hover:text-white" aria-label="GitHub"><app-icon name="github" class="size-5" /></a>
        <a [href]="p.linkedin" target="_blank" rel="noopener" class="grid size-9 place-items-center rounded-lg hover:bg-white/5 hover:text-white" aria-label="LinkedIn"><app-icon name="linkedin" class="size-5" /></a>
        <a [href]="'mailto:' + p.email" class="grid size-9 place-items-center rounded-lg hover:bg-white/5 hover:text-white" [attr.aria-label]="i18n.t('email')"><app-icon name="mail" class="size-5" /></a>
      </div>
    </div>
  `,
})
export class SiteFooter {
  protected readonly i18n = inject(I18n);
  protected readonly p = DATA.person;
  protected readonly year = 2026;
}
