import {Injectable} from '@angular/core';
import experience from '../../assets/dataLocal/experience.json';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  /********************************************************************************************/
  /****************************** les Attributes et les Données *******************************/
  /********************************************************************************************/


  private experiences: {
    id: number,
    duration: string,
    name: string,
    titre: string,
    description: string,
    titreTache: string,
    tache: string,
    technologies: string,
    show: number,
    images: {id: number, name: string, description: string, url: string}[],
    taches: {id: number, name: string, description: string}[],
    urlGit: []
  }[] = experience;


  /********************************************************************************************/
  /********************************* les fonctions d'intialisations  **************************/
  /********************************************************************************************/

  constructor() {
  }

  /********************************************************************************************/
  /**************************************  les fonctions **************************************/
  /********************************************************************************************/


  getExperiences(): any {
    return this.experiences;
  }

  getExperience(id: number): any {
    return this.experiences.find((p: any) => p.id === id);
  }


}
