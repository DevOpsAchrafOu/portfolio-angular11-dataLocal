import { Component, ElementRef, computed, effect, inject, input, signal, viewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { I18n } from '../i18n';
import { Seo } from '../seo';
import { Icon } from '../shared/icon';
import { ALL_WORK, DATA, SITE_URL, Tr, workBySlug } from '../data/portfolio';

/** One experience or project: summary, tech, tasks, screenshots, links, previous / next. */
@Component({
  selector: 'app-work-page',
  imports: [RouterLink, Icon],
  host: { class: 'block' },
  template: `
    @if (work(); as w) {
      <section class="relative overflow-hidden bg-ink text-white">
        <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_360px_at_85%_0%,rgba(91,108,240,.35),transparent_60%)]"></div>
        <div class="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pt-10 pb-16 md:grid-cols-[1.15fr_.85fr] md:pb-20">
          <div>
            <nav class="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-400" aria-label="Breadcrumb">
              <a [routerLink]="i18n.link('')" class="hover:text-white">{{ i18n.t('home') }}</a><span aria-hidden="true">/</span>
              <a [routerLink]="i18n.link('')" [fragment]="w.kind === 'project' ? 'projects' : 'experience'" class="hover:text-white">{{ i18n.t(w.kind === 'project' ? 'nav_projects' : 'nav_work') }}</a>
            </nav>
            <div class="flex flex-wrap items-center gap-2">
              <span class="rounded-full bg-white/10 px-3 py-1 text-xs font-bold tracking-wide uppercase">{{ i18n.t(w.kind) }}</span>
              @if (w.current) { <span class="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-300"><i class="size-1.5 rounded-full bg-emerald-400"></i>{{ i18n.t('current') }}</span> }
            </div>
            <h1 class="mt-5 text-3xl leading-tight font-bold sm:text-5xl">{{ i18n.pick(w.title) }}</h1>
            @if (w.role) { <p class="mt-3 font-semibold text-accent-2">{{ i18n.pick(w.role) }}</p> }
            @if (w.summary) { <p class="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">{{ i18n.pick(w.summary) }}</p> }
            @if (w.git.length || w.web.length) {
              <div class="mt-8 flex flex-wrap gap-3">
                @for (u of w.web; track u) { <a [href]="u" target="_blank" rel="noopener" class="btn btn-primary"><app-icon name="external" class="size-4" />{{ i18n.t('live') }}</a> }
                @for (u of w.git; track u; let i = $index) { <a [href]="u" target="_blank" rel="noopener" class="btn btn-ghost"><app-icon name="github" class="size-4" />{{ i18n.t('code') }}@if (w.git.length > 1) { {{ i + 1 }} }</a> }
              </div>
            }
          </div>
          @if (w.illustration) {
            <div class="relative mx-auto w-full max-w-sm">
              <div class="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-accent/40 to-accent-2/30 blur-2xl"></div>
              <div class="relative rounded-[2rem] border border-white/10 bg-white p-6"><img [src]="w.illustration" alt="" class="aspect-[4/3] w-full object-contain" /></div>
            </div>
          }
        </div>
      </section>

      <div class="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1fr_300px]">
        <div class="space-y-12">
          @if (w.versions.length) {
            <section class="reveal">
              <h2 class="text-2xl font-bold text-ink">{{ i18n.t('versions_h') }}</h2>
              <p class="mt-1 mb-5 text-slate-600">{{ i18n.t('versions_sub') }}</p>
              <div class="grid gap-4 sm:grid-cols-2">
                @for (v of w.versions; track v.shot; let last = $last) {
                  <a [href]="href(v.url)" target="_blank" rel="noopener" class="group overflow-hidden rounded-2xl border bg-white transition hover:shadow-xl hover:shadow-slate-900/5"
                    [class]="last ? 'border-accent/40 ring-1 ring-accent/20' : 'border-slate-200'">
                    <span class="relative block aspect-[16/9] overflow-hidden bg-slate-100">
                      <img [src]="v.shot" [alt]="i18n.pick(v.label)" loading="lazy" class="size-full object-cover object-top transition duration-500 group-hover:scale-[1.03]" />
                      <span class="absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-bold tracking-wide uppercase shadow"
                        [class]="last ? 'bg-accent text-white' : 'bg-white text-slate-700'">{{ i18n.t(last ? 'after' : 'before') }}</span>
                    </span>
                    <span class="flex items-center justify-between gap-3 px-4 py-3">
                      <span class="text-sm font-semibold text-ink">{{ i18n.pick(v.label) }}</span>
                      <span class="inline-flex items-center gap-1 text-sm font-semibold text-accent">{{ i18n.t('open_version') }}<app-icon name="external" class="size-3.5" /></span>
                    </span>
                  </a>
                }
              </div>
            </section>
          }
          @if (w.tasks.length) {
            <section class="reveal">
              <h2 class="mb-5 text-2xl font-bold text-ink">{{ i18n.t('tasks_h') }}</h2>
              <ul class="space-y-3">
                @for (t of w.tasks; track $index) {
                  <li class="rounded-2xl border border-slate-200 bg-white p-4">
                    <div class="flex gap-3"><app-icon name="check" class="mt-0.5 size-5 text-accent" /><span class="text-slate-700">{{ i18n.pick(t.text) }}</span></div>
                    @if (t.sub.length) {
                      <ul class="mt-3 ml-8 space-y-1.5 border-l-2 border-indigo-100 pl-4 text-[15px] text-slate-600">
                        @for (s of t.sub; track $index) { <li>{{ i18n.pick(s) }}</li> }
                      </ul>
                    }
                  </li>
                }
              </ul>
            </section>
          }
          @if (w.gallery.length) {
            <section class="reveal">
              <h2 class="mb-5 text-2xl font-bold text-ink">{{ i18n.t('gallery_h') }}</h2>
              <div class="grid gap-4 sm:grid-cols-2">
                @for (g of w.gallery; track g.src; let i = $index) {
                  <button type="button" class="group overflow-hidden rounded-2xl border border-slate-200 bg-white text-left transition hover:shadow-xl hover:shadow-slate-900/5" (click)="openShot(i)">
                    <span class="block aspect-[16/10] overflow-hidden bg-slate-100"><img [src]="g.src" [alt]="i18n.pick(g.caption)" loading="lazy" class="size-full object-cover object-top transition duration-500 group-hover:scale-[1.03]" /></span>
                    @if (g.caption) { <span class="block px-4 py-3 text-sm font-medium text-slate-700">{{ i18n.pick(g.caption) }}</span> }
                  </button>
                }
              </div>
            </section>
          }
        </div>

        <aside class="space-y-6 md:sticky md:top-24 md:self-start">
          <div class="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 class="mb-3 text-sm font-semibold text-ink">{{ i18n.t('tech_h') }}</h2>
            <ul class="flex flex-wrap gap-1.5">@for (t of w.tech; track t) { <li class="chip">{{ t }}</li> }</ul>
          </div>
          <nav class="grid grid-cols-2 gap-3" aria-label="Pagination">
            @if (prev(); as pw) {
              <a [routerLink]="i18n.link('work', pw.slug)" class="rounded-2xl border border-slate-200 bg-white p-4 text-sm transition hover:border-accent">
                <span class="flex items-center gap-1 text-xs font-semibold text-slate-500"><app-icon name="arrow-left" class="size-3.5" />{{ i18n.t('prev') }}</span>
                <span class="mt-1 line-clamp-2 font-semibold text-ink">{{ i18n.pick(pw.title) }}</span>
              </a>
            } @else { <span></span> }
            @if (next(); as nw) {
              <a [routerLink]="i18n.link('work', nw.slug)" class="rounded-2xl border border-slate-200 bg-white p-4 text-right text-sm transition hover:border-accent">
                <span class="flex items-center justify-end gap-1 text-xs font-semibold text-slate-500">{{ i18n.t('next') }}<app-icon name="arrow" class="size-3.5" /></span>
                <span class="mt-1 line-clamp-2 font-semibold text-ink">{{ i18n.pick(nw.title) }}</span>
              </a>
            }
          </nav>
        </aside>
      </div>

      <dialog #lb class="m-auto max-h-[92vh] max-w-[94vw] overflow-visible bg-transparent p-0 backdrop:bg-ink/80 backdrop:backdrop-blur-sm" (click)="$event.target === lb && lb.close()" (keydown)="keys($event)">
        @if (w.gallery[shot()]; as g) {
          <figure class="relative">
            <img [src]="g.src" [alt]="i18n.pick(g.caption)" class="max-h-[80vh] w-auto rounded-2xl bg-white" />
            <figcaption class="mt-3 text-center text-sm font-medium text-white">{{ i18n.pick(g.caption) }} · {{ shot() + 1 }}/{{ w.gallery.length }}</figcaption>
            <button type="button" class="absolute -top-4 -right-4 grid size-10 place-items-center rounded-full bg-white text-xl text-ink shadow-lg" [attr.aria-label]="i18n.t('close')" (click)="lb.close()">×</button>
            @if (w.gallery.length > 1) {
              <button type="button" class="absolute top-1/2 left-3 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink shadow-lg" [attr.aria-label]="i18n.t('prev')" (click)="step(-1)"><app-icon name="arrow-left" class="size-5" /></button>
              <button type="button" class="absolute top-1/2 right-3 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink shadow-lg" [attr.aria-label]="i18n.t('next')" (click)="step(1)"><app-icon name="arrow" class="size-5" /></button>
            }
          </figure>
        }
      </dialog>
    }
  `,
})
export class WorkPage {
  protected readonly i18n = inject(I18n);
  private readonly seo = inject(Seo);
  private readonly router = inject(Router);
  private readonly lightbox = viewChild<ElementRef<HTMLDialogElement>>('lb');

  /** From the URL work/:slug. */
  readonly slug = input.required<string>();
  protected readonly work = computed(() => workBySlug(this.slug()));
  private readonly index = computed(() => ALL_WORK.findIndex((w) => w.slug === this.slug()));
  protected readonly prev = computed(() => ALL_WORK[this.index() - 1] ?? null);
  protected readonly next = computed(() => ALL_WORK[this.index() + 1] ?? null);
  protected readonly shot = signal(0);

  constructor() {
    effect(() => {
      const w = this.work();
      if (!w) {
        this.router.navigateByUrl(this.i18n.link(''));
        return;
      }
      const lang = this.i18n.lang();
      const title = this.i18n.pick(w.title);
      this.seo.set({
        lang,
        title: `${title} · ${DATA.person.name}`,
        description: this.i18n.pick(w.summary) || `${title}: ${w.tech.join(', ')}.`,
        path: 'work/' + w.slug,
        image: w.cover ?? DATA.person.photo,
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: title,
          description: this.i18n.pick(w.summary),
          keywords: w.tech.join(', '),
          image: w.cover ? SITE_URL + w.cover : undefined,
          author: { '@type': 'Person', name: DATA.person.name, url: SITE_URL },
          ...(w.git[0] ? { codeRepository: w.git[0] } : {}),
        },
      });
    });
  }

  /** A version link can differ by language ([fr, en]). */
  protected href(url: string | Tr): string {
    return typeof url === 'string' ? url : this.i18n.pick(url);
  }

  protected openShot(i: number): void {
    this.shot.set(i);
    this.lightbox()?.nativeElement.showModal();
  }

  protected step(d: number): void {
    const n = this.work()?.gallery.length ?? 1;
    this.shot.set((this.shot() + d + n) % n);
  }

  protected keys(e: KeyboardEvent): void {
    if (e.key === 'ArrowLeft') this.step(-1);
    if (e.key === 'ArrowRight') this.step(1);
  }
}
