import { Injectable } from '@angular/core';
import contact from '../../assets/dataLocal/contact.json';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  /********************************************************************************************/
  /**************************************** les Attributes  ***********************************/
  /********************************************************************************************/

  private contact: {nameFull: string, profil: string, description: string} = contact;

  /********************************************************************************************/
  /********************************* les fonctions d'intialisations  **************************/
  /********************************************************************************************/

  constructor() {
  }

  /********************************************************************************************/
  /**************************************  les fonctions **************************************/
  /********************************************************************************************/


  getcontact(): any {
    return this.contact;
  }
}
