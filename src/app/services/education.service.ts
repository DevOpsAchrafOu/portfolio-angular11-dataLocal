import {Injectable} from '@angular/core';
import education from '../../assets/dataLocal/education.json';
import formation from '../../assets/dataLocal/formation.json';


@Injectable({
  providedIn: 'root'
})
export class EducationService {

  /********************************************************************************************/
  /**************************************** les Attributes  ***********************************/
  /********************************************************************************************/

  private educations:
    {
      id: number,
      duration: string,
      name: string,
      university: string,
      other: string
    }[] = education;

  private formation:
    {
      id: number,
      duration: string,
      type: string,
      description: string,
      other: string
    }[] = formation;

  /********************************************************************************************/
  /********************************* les fonctions d'intialisations  **************************/

  /********************************************************************************************/

  constructor() {
  }

  /********************************************************************************************/
  /**************************************  les fonctions **************************************/
  /********************************************************************************************/


  getEducations(): any {
    return this.educations;
  }

  getEducation(id: number): any {
    return this.educations.find((h: any) => h.id === id);
  }

  getFormations(): any {
    return this.formation;
  }

  getFormation(id: number): any {
    return this.formation.find((h: any) => h.id === id);
  }
}
