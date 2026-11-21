import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18n } from '../i18n';
import { Icon } from '../shared/icon';
import { Work } from '../data/portfolio';

const MAX_TECH = 5;

/** Card for a project (with image) or an experience (compact, for the timeline). */
@Component({
  selector: 'article[appWorkCard]',
  imports: [RouterLink, Icon],
  host: { class: 'card group relative flex flex-col overflow-hidden' },
  template: `
    @let w = work();
    @if (w.kind === 'project') {
      <a [routerLink]="link()" class="relative block aspect-[16/10] overflow-hidden bg-gradient-to-br from-slate-100 to-indigo-50" tabindex="-1" aria-hidden="true">
        <img [src]="w.cover" alt="" loading="lazy" class="size-full object-cover object-top transition duration-500 group-hover:scale-[1.04]" [class.object-contain]="isIllustration()" [class.p-6]="isIllustration()" />
      </a>
    }
    <div class="flex flex-1 flex-col gap-3 p-6">
      <div class="flex flex-wrap items-center gap-2">
        @if (w.current) { <span class="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700"><i class="size-1.5 rounded-full bg-emerald-500"></i>{{ i18n.t('current') }}</span> }
        @if (w.role) { <span class="text-xs font-semibold tracking-wide text-slate-500 uppercase">{{ i18n.pick(w.role) }}</span> }
      </div>
      <h3 class="text-lg leading-snug font-semibold text-ink">
        <a [routerLink]="link()" class="after:absolute after:inset-0 hover:text-accent">{{ i18n.pick(w.title) }}</a>
      </h3>
      @if (w.summary) { <p class="line-clamp-3 text-[15px] leading-relaxed text-slate-600">{{ i18n.pick(w.summary) }}</p> }
      <ul class="mt-auto flex flex-wrap gap-1.5 pt-2" [attr.aria-label]="i18n.t('tech_h')">
        @for (t of tech(); track t) { <li class="chip">{{ t }}</li> }
        @if (more() > 0) { <li class="chip bg-transparent text-slate-500">+{{ more() }}</li> }
      </ul>
      <div class="relative z-10 flex items-center justify-between gap-3 pt-2">
        <span class="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">{{ i18n.t('details') }}<app-icon name="arrow" class="size-4 transition group-hover:translate-x-1" /></span>
        @if (w.git[0]) {
          <a [href]="w.git[0]" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-ink"><app-icon name="github" class="size-4" />{{ i18n.t('code') }}</a>
        }
      </div>
    </div>
  `,
})
export class WorkCard {
  protected readonly i18n = inject(I18n);
  readonly work = input.required<Work>();
  protected readonly link = computed(() => this.i18n.link('work', this.work().slug));
  protected readonly tech = computed(() => this.work().tech.slice(0, MAX_TECH));
  protected readonly more = computed(() => this.work().tech.length - MAX_TECH);
  /** SVG illustrations are shown whole; screenshots fill the frame. */
  protected readonly isIllustration = computed(() => (this.work().cover ?? '').endsWith('.svg'));
}
