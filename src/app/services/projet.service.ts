import {Injectable} from '@angular/core';
import projet from '../../assets/dataLocal/projet.json';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  /********************************************************************************************/
  /****************************** les Attributes et les Données *******************************/
  /********************************************************************************************/


  private projets: {
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
  }[] = projet;


  /********************************************************************************************/
  /********************************* les fonctions d'intialisations  **************************/
  /********************************************************************************************/

  constructor() {
  }

  /********************************************************************************************/
  /**************************************  les fonctions **************************************/
  /********************************************************************************************/


  getProjets(): any {
    return this.projets;
  }

  getProjet(id: number): any {
    return this.projets.find((p: any) => p.id === id);
  }


}
