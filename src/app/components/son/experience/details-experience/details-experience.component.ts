import {Component, OnInit, ViewChild} from '@angular/core';
import {ExperienceService} from '../../../../services/experience.service';
import {ActivatedRoute} from '@angular/router';
import {NgbCarouselConfig, NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-details-experience',
  templateUrl: './details-experience.component.html',
  styleUrls: ['./details-experience.component.scss']
})
export class DetailsExperienceComponent implements OnInit {

  /********************************************************************************************/
  /**************************************** les Attributes  ***********************************/
  /********************************************************************************************/


  experience: any;
  // popup pour affichier les images
  @ViewChild('content', {static: false}) content: any;
  private modalReference: any;
  idPicture: any;

  //for show image
  showNavigationArrows = true;
  showNavigationIndicators = true;
  images: any;
  indexCurrent = 2;


  /********************************************************************************************/
  /********************************* les fonctions d'intialisations  **************************/
  /********************************************************************************************/
  constructor(private experienceService: ExperienceService,
              private route: ActivatedRoute,
              private modalService: NgbModal,
              private config: NgbModalConfig,/*pour popup*/
              carouselConfigconfig: NgbCarouselConfig
  ) {
    // customize default values of carousels used by this component tree
    carouselConfigconfig.showNavigationArrows = true;
    carouselConfigconfig.showNavigationIndicators = true;
  }


  ngOnInit(): void {
    this.getIdParam();
  }

  changeCurrentImg(i: any): void {
    this.indexCurrent = i;
    console.log("indexCurrent : "+this.indexCurrent);
  }

  /********************************************************************************************/
  /**************************************  les fonctions **************************************/
  /********************************************************************************************/

  // modale qui permet de affichier les images
  OnModal(idPicture: any): any {
    // console.log('OnModal => '+ idPicture);
    // ouvrir le modale/popup pour affichier des images
    this.idPicture = idPicture;
    this.modalReference = this.modalService.open(this.content, {size: 'xl'});
  }

  getIdParam(): any {

    let idExperience: number;
    this.route.params.subscribe(routeParams => {

      idExperience = routeParams.id;

      if (idExperience != null) {
        this.experience = this.experienceService.getExperience(Number(idExperience));
        this.images = this.experience.images;
        console.log(this.images);
      }

    });
  }

}
