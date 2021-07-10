import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EducationService} from '../../../services/education.service';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  /********************************************************************************************/
  /**************************************** les Attributes  ***********************************/
  /********************************************************************************************/

  data: string = 'education';
  @Output() dataEvent = new EventEmitter<string>();
  educations: any;
  formations: any;

  /********************************************************************************************/
  /********************************* les fonctions d'intialisations  **************************/
  /********************************************************************************************/

  constructor(private educationService: EducationService) { }

  ngOnInit(): void {
    this.sendData();
    this.educations = this.educationService.getEducations();
    this.formations = this.educationService.getFormations();
  }


  /********************************************************************************************/
  /**************************************  les fonctions **************************************/
  /********************************************************************************************/

  sendData(): void {
    this.dataEvent.emit(this.data);
  }

}
