import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import {AboutComponent} from './components/son/about/about.component';
import {ProjetComponent} from './components/son/projet/projet.component';
import {ContactComponent} from './components/son/contact/contact.component';
import {EducationComponent} from './components/son/education/education.component';
import {CvComponent} from './components/son/cv/cv.component';
import { DetailsProjetComponent } from './components/son/projet/details-projet/details-projet.component';
import {ExperienceComponent} from './components/son/experience/experience.component';
import {DetailsExperienceComponent} from './components/son/experience/details-experience/details-experience.component';


const routes: Routes = [
  // { path: "login", component: LoginComponent },
  { path: '', redirectTo: '/portFolio', pathMatch: 'full' },
  {
    path: 'portFolio', component: PortfolioComponent, children: [
      { path: '', component: AboutComponent },
      { path: 'projet', component: ProjetComponent },
      { path: 'detailProject/:id', component: DetailsProjetComponent },
      { path: 'experience', component: ExperienceComponent },
      { path: 'detailExperience/:id', component: DetailsExperienceComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'education', component: EducationComponent },
      { path: 'cv', component: CvComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
