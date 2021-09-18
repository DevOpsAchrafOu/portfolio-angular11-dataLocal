import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ExperienceService} from '../../../services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  /********************************************************************************************/
  /**************************************** les Attributes  ***********************************/
  /********************************************************************************************/

  data: string = 'experience';
  @Output() dataEvent = new EventEmitter<string>();
  experiences: any;


  /********************************************************************************************/
  /********************************* les fonctions d'intialisations  **************************/
  /********************************************************************************************/

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.sendData();
    this.experiences = this.experienceService.getExperiences();
  }


  /********************************************************************************************/
  /**************************************  les fonctions **************************************/
  /********************************************************************************************/

  sendData(): void {
    this.dataEvent.emit(this.data);
  }

}
