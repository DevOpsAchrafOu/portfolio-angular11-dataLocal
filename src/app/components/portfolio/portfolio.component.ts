import { Component, OnInit } from '@angular/core';
import {AboutService} from '../../services/about.service';
import * as $ from 'jquery';
// declare var $:any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {


  /********************************************************************************************/
  /**************************************** les Attributes  ***********************************/
  /********************************************************************************************/

    currentPage = '';


  /********************************************************************************************/
  /********************************* les fonctions d'intialisations  **************************/
  /********************************************************************************************/

  constructor() { }

  ngOnInit(): void {
      // $('[data-toggle="tooltip"]');

    $('#menu-toggler').on('click', function(): any {
      $('#sidebar-wrapper').toggleClass('collapse ');
      // $('#sidebar-wrapper').addClass('show');
      console.log("toggleClass");
    });
  }

  /********************************************************************************************/
  /**************************************  les fonctions **************************************/
  /********************************************************************************************/
  getChildData($event: any): void {
      this.currentPage = $event.data;
      console.log(this.currentPage);
    }


}
