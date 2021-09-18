import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/son/about/about.component';
import { ContactComponent } from './components/son/contact/contact.component';
import { CvComponent } from './components/son/cv/cv.component';
import { EducationComponent } from './components/son/education/education.component';
import { ProjetComponent } from './components/son/projet/projet.component';
import { DetailsProjetComponent } from './components/son/projet/details-projet/details-projet.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ExperienceComponent } from './components/son/experience/experience.component';
import { DetailsExperienceComponent } from './components/son/experience/details-experience/details-experience.component';


@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    CvComponent,
    EducationComponent,
    ProjetComponent,
    DetailsProjetComponent,
    ExperienceComponent,
    DetailsExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
