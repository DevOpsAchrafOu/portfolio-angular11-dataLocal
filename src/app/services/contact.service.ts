import { Injectable } from '@angular/core';
import contact from '../../assets/dataLocal/contact.json';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  /**{
//  "site": "ouakka.achraf.com",
//  "email": "ouakka.achraf@gmail.com",
//  "linkedin": "https://ma.linkedin.com/in/achraf-ouakka-871250144",
//  "git": "https://github.com/achrafOuakka",
//  "psCode": "https://codeforces.com/submissions/ouakka.achraf",
//  "phone": "06 01 73 46 93",
//  "adresse": "Hay Salam Rue Ras Assouad NR 21,Salé",
//  "map": "../../assets/images/img-tash-web-mobile.svg"
}**/

  /********************************************************************************************/
  /**************************************** les Attributes  ***********************************/
  /********************************************************************************************/

  private contacts: {
    id: number,
    lable: string,
    name: string,
    url: string,
    isUrl: boolean
  }[] = contact;

  /********************************************************************************************/
  /********************************* les fonctions d'intialisations  **************************/
  /********************************************************************************************/

  constructor() {
  }

  /********************************************************************************************/
  /**************************************  les fonctions **************************************/
  /********************************************************************************************/


  getcontacts(): any {
    return this.contacts;
  }

  getcontact(id: number): any {
    return this.contacts.find((h: any) => h.id === id);
  }
}
