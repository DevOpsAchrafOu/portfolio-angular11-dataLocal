import { Component, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18n } from '../i18n';
import { Seo } from '../seo';
import { Icon } from '../shared/icon';
import { WorkCard } from '../work/work-card';
import { DATA, SITE_URL, SKILLS } from '../data/portfolio';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, Icon, WorkCard],
  host: { class: 'block' },
  template: `
    <!-- Hero -->
    <section id="about" class="relative overflow-hidden bg-ink text-white">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_420px_at_80%_10%,rgba(91,108,240,.35),transparent_60%),radial-gradient(600px_380px_at_0%_100%,rgba(56,189,248,.18),transparent_60%)]"></div>
      <div class="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_60%_40%,#000_25%,transparent_70%)] bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:56px_56px]"></div>

      <div class="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pt-16 pb-20 md:grid-cols-[1.2fr_.8fr] md:pt-24 md:pb-28">
        <div>
          <p class="animate-rise inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm text-slate-300">
            <span class="size-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,.2)]"></span>{{ i18n.pick(p.role) }} · {{ i18n.pick(p.city) }}
          </p>
          <h1 class="animate-rise mt-6 text-4xl leading-[1.05] font-bold [animation-delay:.08s] sm:text-6xl">
            <span class="block text-xl font-medium text-slate-400 sm:text-2xl">{{ i18n.t('hello') }}</span>
            <span class="gradient-text">{{ p.name }}</span>
          </h1>
          <p class="animate-rise mt-6 max-w-xl text-lg leading-relaxed text-slate-300 [animation-delay:.16s]">{{ i18n.t('hero_lead') }}</p>
          <div class="animate-rise mt-8 flex flex-wrap gap-3 [animation-delay:.24s]">
            <a [routerLink]="i18n.link('')" fragment="projects" class="btn btn-primary">{{ i18n.t('see_work') }}<app-icon name="arrow" class="size-4" /></a>
            <a [routerLink]="i18n.link('')" fragment="contact" class="btn btn-ghost">{{ i18n.t('contact_me') }}</a>
            <a [routerLink]="i18n.link('cv')" class="btn btn-ghost"><app-icon name="file" class="size-4" />{{ i18n.t('cv') }}</a>
          </div>
          <dl class="animate-rise mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8 [animation-delay:.32s]">
            <div><dt class="sr-only">{{ i18n.t('stat_xp') }}</dt><dd class="font-display text-3xl font-bold">{{ xpCount }}</dd><dd class="text-sm text-slate-400">{{ i18n.t('stat_xp') }}</dd></div>
            <div><dt class="sr-only">{{ i18n.t('stat_projects') }}</dt><dd class="font-display text-3xl font-bold">{{ projectCount }}</dd><dd class="text-sm text-slate-400">{{ i18n.t('stat_projects') }}</dd></div>
            <div><dt class="sr-only">{{ i18n.t('stat_degree') }}</dt><dd class="font-display text-3xl font-bold">Bac+5</dd><dd class="text-sm text-slate-400">{{ i18n.t('stat_degree') }}</dd></div>
          </dl>
        </div>

        <div class="animate-rise relative mx-auto w-full max-w-sm [animation-delay:.15s]">
          <div class="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-accent/50 to-accent-2/40 blur-2xl"></div>
          <div class="relative overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-b from-ink-2 to-ink p-3">
            <img [src]="p.photo" [alt]="p.name" width="420" height="420" class="aspect-square w-full rounded-[1.6rem] bg-slate-800 object-cover object-top" />
            <div class="flex items-center justify-between px-2 pt-3 pb-1">
              <div class="flex gap-2">
                <a [href]="p.github" target="_blank" rel="noopener" class="grid size-10 place-items-center rounded-xl bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white" aria-label="GitHub"><app-icon name="github" class="size-5" /></a>
                <a [href]="p.linkedin" target="_blank" rel="noopener" class="grid size-10 place-items-center rounded-xl bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white" aria-label="LinkedIn"><app-icon name="linkedin" class="size-5" /></a>
                <a [href]="p.codeforces" target="_blank" rel="noopener" class="grid size-10 place-items-center rounded-xl bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white" aria-label="Codeforces"><app-icon name="code" class="size-5" /></a>
              </div>
              <span class="text-xs font-semibold text-slate-400">Java · Spring · Angular</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About + skills -->
    <section class="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div class="grid gap-12 md:grid-cols-[.9fr_1.1fr]">
        <div class="reveal">
          <span class="eyebrow">{{ i18n.t('about_h') }}</span>
          <h2 class="section-h">{{ i18n.pick(p.role) }}</h2>
          <p class="mt-5 text-lg leading-relaxed text-slate-600">{{ i18n.pick(p.about) }}</p>
        </div>
        <div class="reveal">
          <span class="eyebrow">{{ i18n.t('skills_h') }}</span>
          <div class="grid gap-4 sm:grid-cols-2">
            @for (g of skills; track $index) {
              <div class="rounded-2xl border border-slate-200 bg-white p-5" [class.sm:col-span-2]="$first">
                <h3 class="mb-3 text-sm font-semibold text-ink">{{ i18n.pick(g.group) }}</h3>
                <ul class="flex flex-wrap gap-1.5">@for (s of g.items; track s) { <li class="chip">{{ s }}</li> }</ul>
              </div>
            }
          </div>
        </div>
      </div>
    </section>

    <!-- Experience -->
    <section id="experience" class="border-y border-slate-200 bg-white">
      <div class="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div class="reveal mb-12 max-w-2xl">
          <span class="eyebrow">{{ i18n.t('nav_work') }}</span>
          <h2 class="section-h">{{ i18n.t('work_h') }}</h2>
          <p class="mt-3 text-lg text-slate-600">{{ i18n.t('work_sub') }}</p>
        </div>
        <ol class="relative grid gap-5 md:grid-cols-2">
          @for (w of experiences; track w.slug) {
            <li class="reveal"><article appWorkCard [work]="w" class="h-full"></article></li>
          }
        </ol>
      </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div class="reveal mb-12 max-w-2xl">
        <span class="eyebrow">{{ i18n.t('nav_projects') }}</span>
        <h2 class="section-h">{{ i18n.t('projects_h') }}</h2>
        <p class="mt-3 text-lg text-slate-600">{{ i18n.t('projects_sub') }}</p>
      </div>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        @for (w of projects; track w.slug) {
          <article appWorkCard [work]="w" class="reveal"></article>
        }
      </div>
    </section>

    <!-- Education -->
    <section id="education" class="border-y border-slate-200 bg-white">
      <div class="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
        <div class="reveal">
          <span class="eyebrow">{{ i18n.t('nav_education') }}</span>
          <h2 class="section-h mb-8">{{ i18n.t('degrees') }}</h2>
          <ol class="relative space-y-6 border-l-2 border-slate-200 pl-6">
            @for (e of education; track $index) {
              <li class="relative">
                <span class="absolute top-1.5 -left-[33px] size-4 rounded-full border-4 border-white bg-accent ring-2 ring-accent/30"></span>
                <p class="text-sm font-bold text-accent">{{ e.years }}</p>
                <h3 class="mt-1 text-lg font-semibold text-ink">{{ i18n.pick(e.degree) }}</h3>
                <p class="text-slate-600">{{ i18n.pick(e.school) }}@if (e.note) { · {{ i18n.pick(e.note) }} }</p>
              </li>
            }
          </ol>
        </div>
        <div class="reveal">
          <span class="eyebrow invisible md:visible">&nbsp;</span>
          <h2 class="section-h mb-8">{{ i18n.t('training') }}</h2>
          <ul class="space-y-3">
            @for (f of training; track $index) {
              <li class="flex items-start gap-4 rounded-2xl border border-slate-200 p-4">
                <span class="grid size-10 shrink-0 place-items-center rounded-xl bg-indigo-50 text-accent"><app-icon name="check" class="size-5" /></span>
                <div>
                  <h3 class="font-semibold text-ink">{{ i18n.pick(f.subject) }}</h3>
                  <p class="text-sm text-slate-600">{{ i18n.pick(f.type) }} · {{ i18n.pick(f.period) }}</p>
                </div>
              </li>
            }
          </ul>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div class="reveal relative overflow-hidden rounded-[2rem] bg-ink p-8 text-white sm:p-12">
        <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_100%_0%,rgba(91,108,240,.45),transparent_60%)]"></div>
        <div class="relative grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-center">
          <div>
            <h2 class="text-3xl font-bold sm:text-4xl">{{ i18n.t('contact_h') }}</h2>
            <p class="mt-3 text-lg text-slate-300">{{ i18n.t('contact_sub') }}</p>
            <a [href]="'mailto:' + p.email" class="btn btn-primary mt-6"><app-icon name="mail" class="size-4" />{{ p.email }}</a>
          </div>
          <ul class="grid gap-3 sm:grid-cols-2">
            <li><a [href]="'tel:+212' + phoneDigits" class="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"><app-icon name="phone" class="size-5 text-accent-2" /><span><span class="block text-xs text-slate-400">{{ i18n.t('phone') }}</span><span dir="ltr">{{ p.phone }}</span></span></a></li>
            <li><a [href]="p.linkedin" target="_blank" rel="noopener" class="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"><app-icon name="linkedin" class="size-5 text-accent-2" /><span><span class="block text-xs text-slate-400">LinkedIn</span>Achraf Ouakka</span></a></li>
            <li><a [href]="p.github" target="_blank" rel="noopener" class="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"><app-icon name="github" class="size-5 text-accent-2" /><span><span class="block text-xs text-slate-400">GitHub</span>DevOpsAchrafOu</span></a></li>
            <li><div class="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"><app-icon name="pin" class="size-5 text-accent-2" /><span><span class="block text-xs text-slate-400">{{ i18n.t('city') }}</span>{{ i18n.pick(p.city) }}</span></div></li>
          </ul>
        </div>
      </div>
    </section>
  `,
})
export class HomePage {
  protected readonly i18n = inject(I18n);
  private readonly seo = inject(Seo);
  protected readonly p = DATA.person;
  protected readonly experiences = DATA.experiences;
  protected readonly projects = DATA.projects;
  protected readonly education = DATA.education;
  protected readonly training = DATA.training;
  protected readonly skills = SKILLS;
  protected readonly xpCount = DATA.experiences.length;
  protected readonly projectCount = DATA.projects.length;
  /** "06 01 73 46 93" → "601734693" for the tel: link. */
  protected readonly phoneDigits = DATA.person.phone.replace(/\D/g, '').replace(/^0/, '');

  constructor() {
    effect(() => {
      const lang = this.i18n.lang();
      this.seo.set({
        lang,
        title: `${this.p.name} · ${this.i18n.pick(this.p.role)} (Java, Spring Boot, Angular)`,
        description: this.i18n.t('meta_desc'),
        path: '',
        image: 'img/moi.png',
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: this.p.name,
          jobTitle: this.i18n.pick(this.p.role),
          image: SITE_URL + this.p.photo,
          url: SITE_URL + (lang === 'en' ? 'en/' : ''),
          email: 'mailto:' + this.p.email,
          address: { '@type': 'PostalAddress', addressLocality: 'Salé', addressCountry: 'MA' },
          alumniOf: { '@type': 'CollegeOrUniversity', name: 'Université Mohammed V, Rabat' },
          sameAs: [this.p.linkedin, this.p.github, this.p.codeforces],
          knowsAbout: SKILLS.flatMap((g) => g.items),
        },
      });
    });
  }
}
