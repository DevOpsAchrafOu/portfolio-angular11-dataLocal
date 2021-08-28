import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ContactService} from '../../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  /********************************************************************************************/
  /**************************************** les Attributes  ***********************************/
  /********************************************************************************************/

  data: string = 'contact';
  @Output() dataEvent = new EventEmitter<string>();
  contact: any;

  /********************************************************************************************/
  /********************************* les fonctions d'intialisations  **************************/
  /********************************************************************************************/

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.sendData();
    this.contact = this.contactService.getcontact();
  }


  /********************************************************************************************/
  /**************************************  les fonctions **************************************/
  /********************************************************************************************/

  sendData(): void {
    this.dataEvent.emit(this.data);
  }

}
