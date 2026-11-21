import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page';
import { WorkPage } from './pages/work-page';
import { CvPage } from './pages/cv-page';

/** French at the root (default), English under /en. */
export const routes: Routes = [
  { path: '', component: HomePage, pathMatch: 'full' },
  { path: 'work/:slug', component: WorkPage },
  { path: 'cv', component: CvPage },
  { path: 'en', component: HomePage, pathMatch: 'full' },
  { path: 'en/work/:slug', component: WorkPage },
  { path: 'en/cv', component: CvPage },
  { path: '**', redirectTo: '' },
];
