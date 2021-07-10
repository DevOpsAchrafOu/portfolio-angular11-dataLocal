import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProjetService} from '../../../services/projet.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent implements OnInit {

  /********************************************************************************************/
  /**************************************** les Attributes  ***********************************/
  /********************************************************************************************/

  data: string = 'projet';
  @Output() dataEvent = new EventEmitter<string>();
  projets: any;


  /********************************************************************************************/
  /********************************* les fonctions d'intialisations  **************************/
  /********************************************************************************************/

  constructor(private projetService: ProjetService) { }

  ngOnInit(): void {
    this.sendData();
    this.projets = this.projetService.getProjets();
  }


  /********************************************************************************************/
  /**************************************  les fonctions **************************************/
  /********************************************************************************************/

  sendData(): void {
    this.dataEvent.emit(this.data);
  }

}
