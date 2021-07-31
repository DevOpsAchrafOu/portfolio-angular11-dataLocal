import {Component, OnInit, ViewChild} from '@angular/core';
import {ProjetService} from '../../../../services/projet.service';
import {ActivatedRoute} from '@angular/router';
import {formatNumber} from '@angular/common';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {NgbCarousel, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-details-projet',
  templateUrl: './details-projet.component.html',
  styleUrls: ['./details-projet.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers

})
export class DetailsProjetComponent implements OnInit {

  /********************************************************************************************/
  /**************************************** les Attributes  ***********************************/
  /********************************************************************************************/

  projet: any;
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
  constructor(private projetService: ProjetService,
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

    let idProjet: number;
    this.route.params.subscribe(routeParams => {

      idProjet = routeParams.id;

      if (idProjet != null) {
        this.projet = this.projetService.getProjet(Number(idProjet));
        this.images = this.projet.images;
        console.log(this.images);
      }

    });
  }

}
