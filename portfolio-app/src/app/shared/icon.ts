import { Component, input } from '@angular/core';

export type IconName = 'github' | 'linkedin' | 'mail' | 'phone' | 'pin' | 'code' | 'external' | 'arrow' | 'arrow-left' | 'check' | 'file' | 'globe' | 'spark';

/** Inline SVG icons (lucide style, MIT). <app-icon name="github" class="size-5" /> */
@Component({
  selector: 'app-icon',
  host: { class: 'inline-flex shrink-0' },
  template: `
    <svg viewBox="0 0 24 24" class="size-full" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      @switch (name()) {
        @case ('github') { <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/> }
        @case ('linkedin') { <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/> }
        @case ('mail') { <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/> }
        @case ('phone') { <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/> }
        @case ('pin') { <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/> }
        @case ('code') { <path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/> }
        @case ('external') { <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/> }
        @case ('arrow') { <path d="M5 12h14M12 5l7 7-7 7"/> }
        @case ('arrow-left') { <path d="M19 12H5M12 19l-7-7 7-7"/> }
        @case ('check') { <path d="M20 6 9 17l-5-5"/> }
        @case ('file') { <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4M10 13h4M10 17h4"/> }
        @case ('globe') { <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/> }
        @case ('spark') { <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/> }
      }
    </svg>
  `,
})
export class Icon {
  readonly name = input.required<IconName>();
}
