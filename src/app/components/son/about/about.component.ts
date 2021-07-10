import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AboutService} from '../../../services/about.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  /********************************************************************************************/
  /**************************************** les Attributes  ***********************************/
  /********************************************************************************************/

  data: string = 'about';
  @Output() dataEvent = new EventEmitter<string>();
  about: any;

  /********************************************************************************************/
  /********************************* les fonctions d'intialisations  **************************/
  /********************************************************************************************/

  constructor(private aboutService: AboutService) { }

  ngOnInit(): void {
    this.sendData();
    this.about = this.aboutService.getAbout();
  }


  /********************************************************************************************/
  /**************************************  les fonctions **************************************/
  /********************************************************************************************/

  sendData(): void {
    this.dataEvent.emit(this.data);
  }

}
