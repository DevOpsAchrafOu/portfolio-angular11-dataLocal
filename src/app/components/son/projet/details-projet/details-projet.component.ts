import {Component, OnInit, ViewChild} from '@angular/core';
import {ProjetService} from '../../../../services/projet.service';
import {ActivatedRoute} from '@angular/router';
import {formatNumber} from '@angular/common';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-details-projet',
  templateUrl: './details-projet.component.html',
  styleUrls: ['./details-projet.component.scss']
})
export class DetailsProjetComponent implements OnInit {

  /********************************************************************************************/
  /**************************************** les Attributes  ***********************************/
  /********************************************************************************************/

  projet: any;
  // popup pour affichier les images
  @ViewChild('content', {static: false}) content;
  private modalReference: any;
  idPicture: any;

  /********************************************************************************************/
  /********************************* les fonctions d'intialisations  **************************/

  /********************************************************************************************/
  constructor(private projetService: ProjetService,
              private route: ActivatedRoute,
              private modalService: NgbModal,//pour popup
              private config: NgbModalConfig//pour popup
  ) {
  }

  ngOnInit(): void {
    this.getIdParam();
  }


  /********************************************************************************************/
  /**************************************  les fonctions **************************************/
  /********************************************************************************************/

  //modale qui permet de affichier les images
  OnModal(idPicture: any): any {
    console.log('OnModal => '+ idPicture);
    this.idPicture = idPicture;//ouvrir le modale/popup pour affichier des images
    this.modalReference = this.modalService.open(this.content, {size: 'xl'});
  }

  getIdParam(): any {

    let idProjet: number;
    this.route.params.subscribe(routeParams => {

      idProjet = routeParams.id;

      if (idProjet != null) {
        this.projet = this.projetService.getProjet(Number(idProjet));
      }

    });
  }

}
