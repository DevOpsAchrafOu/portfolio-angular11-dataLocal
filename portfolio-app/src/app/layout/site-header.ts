import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18n } from '../i18n';
import { DATA, LANGS, Lang, UiKey } from '../data/portfolio';

@Component({
  selector: 'header[appSiteHeader]',
  imports: [RouterLink],
  host: { class: 'sticky top-0 z-40 border-b border-white/10 bg-ink/80 text-white backdrop-blur-xl' },
  template: `
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
      <a [routerLink]="i18n.link('')" class="group flex items-center gap-3" [attr.aria-label]="name">
        <span class="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent-2 font-display text-sm font-bold shadow-lg shadow-accent/30 transition group-hover:rotate-[-6deg]">AO</span>
        <span class="hidden font-display text-[15px] font-semibold sm:block">{{ name }}</span>
      </a>

      <nav class="hidden items-center gap-1 lg:flex" aria-label="Menu">
        @for (n of nav; track n.id) {
          <a [routerLink]="i18n.link('')" [fragment]="n.id" class="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white">{{ i18n.t(n.label) }}</a>
        }
        <a [routerLink]="i18n.link('cv')" class="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white">{{ i18n.t('cv') }}</a>
      </nav>

      <div class="flex items-center gap-2">
        <div class="flex rounded-full border border-white/15 p-0.5 text-xs font-bold" role="group" aria-label="Language">
          @for (l of langs; track l) {
            <a [routerLink]="i18n.switchTo(l)" [attr.hreflang]="l" [attr.lang]="l" [attr.aria-current]="i18n.lang() === l ? 'true' : null"
              class="rounded-full px-3 py-1.5 tracking-wider uppercase transition"
              [class]="i18n.lang() === l ? 'bg-white text-ink' : 'text-slate-300 hover:text-white'">{{ l }}</a>
          }
        </div>
        <a [routerLink]="i18n.link('')" fragment="contact" class="btn btn-primary hidden min-h-10 px-4 text-sm sm:inline-flex">{{ i18n.t('contact_me') }}</a>
        <button type="button" class="grid size-10 place-items-center rounded-lg border border-white/15 lg:hidden" [attr.aria-expanded]="open()" aria-controls="mobile-nav" (click)="open.set(!open())">
          <span class="sr-only">Menu</span>
          <span class="flex w-4 flex-col gap-1"><i class="h-0.5 rounded bg-white transition" [class.translate-y-1.5]="open()" [class.rotate-45]="open()"></i><i class="h-0.5 rounded bg-white transition" [class.opacity-0]="open()"></i><i class="h-0.5 rounded bg-white transition" [class.-translate-y-1.5]="open()" [class.-rotate-45]="open()"></i></span>
        </button>
      </div>
    </div>

    @if (open()) {
      <nav id="mobile-nav" class="border-t border-white/10 px-5 pt-2 pb-4 lg:hidden" aria-label="Menu">
        @for (n of nav; track n.id) {
          <a [routerLink]="i18n.link('')" [fragment]="n.id" (click)="open.set(false)" class="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-slate-200 hover:bg-white/5">{{ i18n.t(n.label) }}</a>
        }
        <a [routerLink]="i18n.link('cv')" (click)="open.set(false)" class="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-slate-200 hover:bg-white/5">{{ i18n.t('cv') }}</a>
      </nav>
    }
  `,
})
export class SiteHeader {
  protected readonly i18n = inject(I18n);
  protected readonly name = DATA.person.name;
  protected readonly langs: Lang[] = LANGS;
  protected readonly open = signal(false);
  protected readonly nav: { id: string; label: UiKey }[] = [
    { id: 'about', label: 'nav_about' },
    { id: 'experience', label: 'nav_work' },
    { id: 'projects', label: 'nav_projects' },
    { id: 'education', label: 'nav_education' },
    { id: 'contact', label: 'nav_contact' },
  ];
}
