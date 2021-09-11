(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Achraf\Desktop\WEB\SiteWeb\portFolio\version_origin_1\portfolio-angular11-dataLocal\src\main.ts */"zUnb");


/***/ }),

/***/ "3ITz":
/*!*********************************************!*\
  !*** ./src/app/services/contact.service.ts ***!
  \*********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _assets_dataLocal_contact_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/dataLocal/contact.json */ "J4o8");
var _assets_dataLocal_contact_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/dataLocal/contact.json */ "J4o8", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ContactService {
    /********************************************************************************************/
    /********************************* les fonctions d'intialisations  **************************/
    /********************************************************************************************/
    constructor() {
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
        this.contacts = _assets_dataLocal_contact_json__WEBPACK_IMPORTED_MODULE_0__;
    }
    /********************************************************************************************/
    /**************************************  les fonctions **************************************/
    /********************************************************************************************/
    getcontacts() {
        return this.contacts;
    }
    getcontact(id) {
        return this.contacts.find((h) => h.id === id);
    }
}
ContactService.ɵfac = function ContactService_Factory(t) { return new (t || ContactService)(); };
ContactService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ContactService, factory: ContactService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "4ur4":
/*!*****************************************************************!*\
  !*** ./src/app/components/son/education/education.component.ts ***!
  \*****************************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_education_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/education.service */ "8SzB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function EducationComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const for_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", for_r2.type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](for_r2.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", for_r2.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](for_r2.other);
} }
function EducationComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const edu_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", edu_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](edu_r3.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", edu_r3.university, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](edu_r3.other);
} }
class EducationComponent {
    /********************************************************************************************/
    /********************************* les fonctions d'intialisations  **************************/
    /********************************************************************************************/
    constructor(educationService) {
        this.educationService = educationService;
        /********************************************************************************************/
        /**************************************** les Attributes  ***********************************/
        /********************************************************************************************/
        this.data = 'education';
        this.dataEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.sendData();
        this.educations = this.educationService.getEducations();
        this.formations = this.educationService.getFormations();
    }
    /********************************************************************************************/
    /**************************************  les fonctions **************************************/
    /********************************************************************************************/
    sendData() {
        this.dataEvent.emit(this.data);
    }
}
EducationComponent.ɵfac = function EducationComponent_Factory(t) { return new (t || EducationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_education_service__WEBPACK_IMPORTED_MODULE_1__["EducationService"])); };
EducationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EducationComponent, selectors: [["app-education"]], outputs: { dataEvent: "dataEvent" }, decls: 8, vars: 2, consts: [[1, "color-second", "mb-2"], [1, "fa", "fa-graduation-cap", "icon", "mr-2"], [1, "progress", "mb-4", 2, "height", "2px"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 2, "width", "15%"], ["class", " shadow-sm rounded mb-2 p-3 contact", 4, "ngFor", "ngForOf"], ["class", "shadow-sm rounded mb-2 p-3 contact", 4, "ngFor", "ngForOf"], [1, "shadow-sm", "rounded", "mb-2", "p-3", "contact"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-1"], [1, "h5"], [1, "text-muted", "h6"], [1, "d-flex", "justify-content-start"], [1, "mr-3", "h6"], [1, "d-flex", "justify-content-between", "mb-1"]], template: function EducationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00C9ducation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EducationComponent_div_6_Template, 11, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EducationComponent_div_7_Template, 11, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.formations);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.educations);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".shadow-sm[_ngcontent-%COMP%] {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.35) !important;\n}\n\n@media (max-width: 576px) {\n  .h5[_ngcontent-%COMP%] {\n    font-size: 1rem !important;\n  }\n\n  .h6[_ngcontent-%COMP%] {\n    font-size: 0.8rem !important;\n  }\n}\n\n.contact[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.01) !important;\n  box-shadow: 0 1rem 3rem rgba(15, 9, 87, 0.2) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsNkRBQUE7QUFERjs7QUFLQTtFQUVFO0lBQ0UsMEJBQUE7RUFIRjs7RUFLQTtJQUNFLDRCQUFBO0VBRkY7QUFDRjs7QUFLQTtFQUNFLGdEQUFBO0VBQ0EsdURBQUE7QUFIRiIsImZpbGUiOiJlZHVjYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8qKi0tLS0tLS0tLS0tLS0tLS0tLS1vdmVycmlkIGJvb3RzdHJhcFxyXG4uc2hhZG93LXNtIHtcclxuICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDAuMjVyZW0gcmdiKDAgMCAwIC8gMzUlKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyoqLS0tLS0tLS0tLS0tLS0tLS0tLSBTbWFsbCBkZXZpY2VzIChsYW5kc2NhcGUgcGhvbmVzLCA1NzZweCBhbmQgdXApXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG5cclxuICAuaDV7XHJcbiAgICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmg2e1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW0gIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5jb250YWN0OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDEpICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogMCAxcmVtIDNyZW0gcmdiYSgxNSwgOSwgODcsIDAuMikhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "8Lko":
/*!*******************************************!*\
  !*** ./src/app/services/about.service.ts ***!
  \*******************************************/
/*! exports provided: AboutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutService", function() { return AboutService; });
/* harmony import */ var _assets_dataLocal_about_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/dataLocal/about.json */ "942L");
var _assets_dataLocal_about_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/dataLocal/about.json */ "942L", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AboutService {
    /********************************************************************************************/
    /********************************* les fonctions d'intialisations  **************************/
    /********************************************************************************************/
    constructor() {
        /********************************************************************************************/
        /**************************************** les Attributes  ***********************************/
        /********************************************************************************************/
        this.about = _assets_dataLocal_about_json__WEBPACK_IMPORTED_MODULE_0__;
    }
    /********************************************************************************************/
    /**************************************  les fonctions **************************************/
    /********************************************************************************************/
    getAbout() {
        return this.about;
    }
}
AboutService.ɵfac = function AboutService_Factory(t) { return new (t || AboutService)(); };
AboutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AboutService, factory: AboutService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "8SzB":
/*!***********************************************!*\
  !*** ./src/app/services/education.service.ts ***!
  \***********************************************/
/*! exports provided: EducationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationService", function() { return EducationService; });
/* harmony import */ var _assets_dataLocal_education_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/dataLocal/education.json */ "qbAA");
var _assets_dataLocal_education_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/dataLocal/education.json */ "qbAA", 1);
/* harmony import */ var _assets_dataLocal_formation_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/dataLocal/formation.json */ "VEVj");
var _assets_dataLocal_formation_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/dataLocal/formation.json */ "VEVj", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class EducationService {
    /********************************************************************************************/
    /********************************* les fonctions d'intialisations  **************************/
    /********************************************************************************************/
    constructor() {
        /********************************************************************************************/
        /**************************************** les Attributes  ***********************************/
        /********************************************************************************************/
        this.educations = _assets_dataLocal_education_json__WEBPACK_IMPORTED_MODULE_0__;
        this.formation = _assets_dataLocal_formation_json__WEBPACK_IMPORTED_MODULE_1__;
    }
    /********************************************************************************************/
    /**************************************  les fonctions **************************************/
    /********************************************************************************************/
    getEducations() {
        return this.educations;
    }
    getEducation(id) {
        return this.educations.find((h) => h.id === id);
    }
    getFormations() {
        return this.formation;
    }
    getFormation(id) {
        return this.formation.find((h) => h.id === id);
    }
}
EducationService.ɵfac = function EducationService_Factory(t) { return new (t || EducationService)(); };
EducationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: EducationService, factory: EducationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "942L":
/*!*****************************************!*\
  !*** ./src/assets/dataLocal/about.json ***!
  \*****************************************/
/*! exports provided: nameFull, profil, description, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"nameFull\":\"Ouakka Achraf\",\"profil\":\"Developpeur web full stack\",\"description\":\"Je suis titulaire d'un master informatique, signaux et télécommunications. j'ai fait des stages dans divers établissements et entreprises. J'ai également développé des applications web dans le cadre de mon cursus. Pendant mon temps libre je profite de faire des side-project afin de développer mes compétences techniques et approfondir mes connaissances.\"}");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BRDr":
/*!**********************************************************************************!*\
  !*** ./src/app/components/son/projet/details-projet/details-projet.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DetailsProjetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsProjetComponent", function() { return DetailsProjetComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_projet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/projet.service */ "PgQp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = ["content"];
function DetailsProjetComponent_div_14_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subTache_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", subTache_r9.name, "");
} }
function DetailsProjetComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DetailsProjetComponent_div_14_span_4_Template, 4, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tache_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", tache_r7.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", tache_r7.sousTaches);
} }
function DetailsProjetComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const tech_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", tech_r10, ", ");
} }
function DetailsProjetComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r2.projet.urlGit[0], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function DetailsProjetComponent_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Web");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r3.projet.urlWeb[0], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function DetailsProjetComponent_span_26_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Il n'y a pas d'information client sensible ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](img_r11.name);
} }
function DetailsProjetComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailsProjetComponent_span_26_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const idPicture_r12 = ctx.index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.OnModal(idPicture_r12); })("click", function DetailsProjetComponent_span_26_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const idPicture_r12 = ctx.index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.changeCurrentImg(idPicture_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetailsProjetComponent_span_26_ng_template_1_Template, 4, 1, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r11 = ctx.$implicit;
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", img_r11.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbTooltip", _r13);
} }
const _c1 = function (a0) { return { "active": a0, "carousel-item": true }; };
function DetailsProjetComponent_ng_template_27_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const img_r23 = ctx.$implicit;
    const idP_r24 = ctx.index;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c1, idP_r24 == ctx_r21.idPicture));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", img_r23.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r23.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](img_r23.name);
} }
const _c2 = function (a0) { return { "active": a0 }; };
function DetailsProjetComponent_ng_template_27_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "li", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const idP_r26 = ctx.index;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c2, idP_r26 == ctx_r22.idPicture));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-slide-to", idP_r26);
} }
function DetailsProjetComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailsProjetComponent_ng_template_27_Template_button_click_1_listener() { const d_r20 = ctx.dismiss; return d_r20("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, DetailsProjetComponent_ng_template_27_ng_container_9_Template, 6, 6, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ol", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, DetailsProjetComponent_ng_template_27_ng_container_11_Template, 2, 4, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.projet.images);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.projet.images);
} }
class DetailsProjetComponent {
    /********************************************************************************************/
    /********************************* les fonctions d'intialisations  **************************/
    /********************************************************************************************/
    constructor(projetService, route, modalService, config, /*pour popup*/ carouselConfigconfig) {
        this.projetService = projetService;
        this.route = route;
        this.modalService = modalService;
        this.config = config;
        //for show image
        this.showNavigationArrows = true;
        this.showNavigationIndicators = true;
        this.indexCurrent = 2;
        // customize default values of carousels used by this component tree
        carouselConfigconfig.showNavigationArrows = true;
        carouselConfigconfig.showNavigationIndicators = true;
    }
    ngOnInit() {
        this.getIdParam();
    }
    changeCurrentImg(i) {
        this.indexCurrent = i;
        console.log("indexCurrent : " + this.indexCurrent);
    }
    /********************************************************************************************/
    /**************************************  les fonctions **************************************/
    /********************************************************************************************/
    // modale qui permet de affichier les images
    OnModal(idPicture) {
        // console.log('OnModal => '+ idPicture);
        // ouvrir le modale/popup pour affichier des images
        this.idPicture = idPicture;
        this.modalReference = this.modalService.open(this.content, { size: 'xl' });
    }
    getIdParam() {
        let idProjet;
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
DetailsProjetComponent.ɵfac = function DetailsProjetComponent_Factory(t) { return new (t || DetailsProjetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_projet_service__WEBPACK_IMPORTED_MODULE_2__["ProjetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbModalConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarouselConfig"])); };
DetailsProjetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DetailsProjetComponent, selectors: [["app-details-projet"]], viewQuery: function DetailsProjetComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarouselConfig"]] // add NgbCarouselConfig to the component providers
        )], decls: 29, vars: 9, consts: [[1, "color-second", "mb-2"], [1, "fa", "fa-graduation-cap", "icon", "mr-2"], [1, "progress", "mb-4", 2, "height", "2px"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 2, "width", "15%"], [1, "color-second"], [1, "row"], [1, "col-md-6"], [1, "h6", "description", "mt-4"], [1, "h6", "description", "mt-4", "mb-2"], ["class", "", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "my-4"], [4, "ngIf"], [1, "col-md-6", "d-flex", "justify-content-center"], ["alt", "", 1, "w-75", "animate__animated", "animate__fadeInRight", "animate__slower", 3, "src"], [1, "mt-5"], [1, "d-flex", "justify-content-center"], ["class", "pointer", 3, "click", 4, "ngFor", "ngForOf"], ["content", ""], [1, ""], [1, "fa", "fa-angle-right", "icon-tash", "color-main", "mr-2"], ["class", " ml-3 subTash", 4, "ngFor", "ngForOf"], [1, "ml-3", "subTash"], [1, "fa", "fa-arrow-right", "icon-tash", "color-second", "mr-2", "fa-0x"], [1, "btn", "btn-primary", "py-1", "px-1", "shadow-sm", "btn-about", "mx-2", 3, "href"], [1, "fa", "fa-code", "fa-1x"], [1, "w-100"], [1, "fa", "fa-desktop", "fa-1x"], [1, "pointer", 3, "click"], ["tipContent", ""], ["placement", "top", "height", "80", "alt", "", 1, "m-2", 3, "ngbTooltip", "src"], [1, "modal-header", "text-center"], ["type", "button", "aria-label", "Close", 1, "close", "white-text", "d-flex", "justify-content-end", "py-0", 3, "click"], ["aria-hidden", "true", 1, "close1", "p-0"], [1, "modal-body", 2, "padding-bottom", "0", "padding-top", "0"], [1, "row", "align-items-center"], ["id", "slider"], ["id", "carouselControls", "data-ride", "carousel", 1, "carousel", "slide", 2, "padding-left", "1px", "padding-right", "1px"], [1, "carousel-inner"], [1, "carousel-indicators"], [3, "ngClass"], [1, "d-block", "w-100", 2, "width", "100%", 3, "src", "alt"], [1, "text-block"], ["data-target", "#carouselControls", 3, "ngClass"]], template: function DetailsProjetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Details du Projet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, DetailsProjetComponent_div_14_Template, 5, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "les Technologies : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, DetailsProjetComponent_ng_container_18_Template, 2, 1, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, DetailsProjetComponent_ng_container_20_Template, 5, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, DetailsProjetComponent_ng_container_21_Template, 5, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, DetailsProjetComponent_span_26_Template, 4, 2, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, DetailsProjetComponent_ng_template_27_Template, 12, 2, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.projet.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.projet.description, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.projet.titreTache, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.projet.taches);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.projet.technologies);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.projet.urlGit && ctx.projet.urlGit[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.projet.urlWeb && ctx.projet.urlWeb[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.projet.icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.projet.images);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: [".btn-about[_ngcontent-%COMP%] {\n  width: 120px;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  background-image: -webkit-gradient(linear, left top, right bottom, from(var(--second-color)), to(var(--main-color)));\n  border-radius: 50px;\n  transition: 0.5s;\n  padding: 10px;\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.btn-outline-primary[_ngcontent-%COMP%] {\n  color: #007bff;\n  \n  border: 2px solid var(--second-color);\n  \n  \n  border-radius: 50px;\n  transition: 0.5s;\n  padding: 10px;\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.btn-outline-primary[_ngcontent-%COMP%]:hover, .btn-primary[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, var(--second-color), var(--second-color));\n  color: white !important;\n}\n\n.description[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n\n.icon-tash[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n\n#ImgProcess[_ngcontent-%COMP%]   .list-inline[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow-x: auto;\n}\n\n#ImgProcess[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%] {\n  position: static;\n  left: initial;\n  width: initial;\n  margin-left: initial;\n}\n\n#ImgProcess[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  width: initial;\n  height: initial;\n  text-indent: initial;\n}\n\n#ImgProcess[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n\n.title-popup[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 1.75rem;\n}\n\n.title-popup[_ngcontent-%COMP%]    > .p1[_ngcontent-%COMP%] {\n  color: #ff006c;\n}\n\n#text1[_ngcontent-%COMP%] {\n  color: #cecece;\n}\n\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 1.5rem;\n}\n\n.close1[_ngcontent-%COMP%] {\n  font-size: 100%;\n}\n\n.text-block[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  background-color: rgba(5, 13, 64, 0.56);\n  color: white;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 10px;\n  margin: 10px;\n}\n\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  margin: -0.7rem -1rem -1rem auto;\n}\n\n.btn-about[_ngcontent-%COMP%] {\n  width: 80px;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  background-image: -webkit-gradient(linear, left top, right bottom, from(var(--second-color)), to(var(--main-color)));\n  border-radius: 50px;\n  transition: 0.5s;\n  padding: 10px;\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.btn-outline-primary[_ngcontent-%COMP%] {\n  color: #007bff;\n  \n  border: 2px solid var(--second-color);\n  \n  \n  border-radius: 50px;\n  transition: 0.5s;\n  padding: 10px;\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.btn-outline-primary[_ngcontent-%COMP%]:hover, .btn-primary[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, var(--second-color), var(--second-color));\n  color: white !important;\n}\n\n.fa-0x[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n\nspan.subTash[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #393c5d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGRldGFpbHMtcHJvamV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0hBQUE7RUFDQSxtQkFBQTtFQUVBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSxzQkFBQTtFQUNBLDBIQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTs7RUFHRSw2RUFBQTtFQUNBLHVCQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7QUFERjs7QUFNQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQUhGOztBQU1BO0VBQ0UsWUFBQTtBQUhGOztBQU1BO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtBQUhGOztBQU1BO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUhGOztBQUtBO0VBQ0UsZUFBQTtBQUZGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFIRjs7QUFNQTtFQUNFLGdDQUFBO0FBSEY7O0FBTUE7RUFDRSxXQUFBO0FBSEY7O0FBT0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvSEFBQTtFQUNBLG1CQUFBO0VBRUEsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBSkY7O0FBT0E7RUFDRSxjQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsMEhBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUpGOztBQU9BOztFQUdFLDZFQUFBO0VBQ0EsdUJBQUE7QUFMRjs7QUFRQTtFQUNFLGtCQUFBO0FBTEY7O0FBUUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFMRiIsImZpbGUiOiJkZXRhaWxzLXByb2pldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tYWJvdXR7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG59XHJcblxyXG5cclxuLmJ0bi1wcmltYXJ5e1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgYm90dG9tLCBmcm9tKHZhcigtLXNlY29uZC1jb2xvcikpLCB0byh2YXIoLS1tYWluLWNvbG9yKSkpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNXM7XHJcbiAgdHJhbnNpdGlvbjogLjVzO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1wcmltYXJ5IHtcclxuICBjb2xvcjogIzAwN2JmZjtcclxuICAvKiBib3JkZXItY29sb3I6IHZhcigtLW1haW4tY29sb3IpOyAqL1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNlY29uZC1jb2xvcik7XHJcbiAgLyogYmFja2dyb3VuZDogbm9uZTsgKi9cclxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IGJvdHRvbSwgZnJvbSh2YXIoLS1zZWNvbmQtY29sb3IpKSwgdG8odmFyKC0tbWFpbi1jb2xvcikpKTsgKi9cclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLXByaW1hcnk6aG92ZXIsXHJcbi5idG4tcHJpbWFyeTpob3ZlcntcclxuXHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCAxMzVkZWcgLCB2YXIoLS1zZWNvbmQtY29sb3IpLCB2YXIoLS1zZWNvbmQtY29sb3IpKTtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICBmb250LXdlaWdodDpub3JtYWw7XHJcbn1cclxuXHJcbi5pY29uLXRhc2h7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxufVxyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXN0eWxlIGZvciBJbWFnZXMgaXMgcHJvY2Vzcy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4jSW1nUHJvY2VzcyAubGlzdC1pbmxpbmUge1xyXG4gIHdoaXRlLXNwYWNlOm5vd3JhcDtcclxuICBvdmVyZmxvdy14OmF1dG87XHJcbn1cclxuXHJcbiNJbWdQcm9jZXNzIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcclxuICBwb3NpdGlvbjogc3RhdGljO1xyXG4gIGxlZnQ6IGluaXRpYWw7XHJcbiAgd2lkdGg6IGluaXRpYWw7XHJcbiAgbWFyZ2luLWxlZnQ6IGluaXRpYWw7XHJcbn1cclxuXHJcbiNJbWdQcm9jZXNzIC5jYXJvdXNlbC1pbmRpY2F0b3JzID4gbGkge1xyXG4gIHdpZHRoOiBpbml0aWFsO1xyXG4gIGhlaWdodDogaW5pdGlhbDtcclxuICB0ZXh0LWluZGVudDogaW5pdGlhbDtcclxufVxyXG5cclxuI0ltZ1Byb2Nlc3MgLmNhcm91c2VsLWluZGljYXRvcnMgPiBsaS5hY3RpdmUgaW1nIHtcclxuICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXN0eWxlIGZvciBwb3B1cC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLnRpdGxlLXBvcHVwID4gc3Ryb25ne1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG59XHJcblxyXG4udGl0bGUtcG9wdXAgPiAucDF7XHJcbiAgY29sb3I6cmdiKDI1NSwgMCwgMTA4KTs7XHJcbn1cclxuXHJcbiN0ZXh0MXtcclxuICBjb2xvcjogI2NlY2VjZTtcclxuXHJcbn1cclxuLm1vZGFsLWhlYWRlciAuY2xvc2Uge1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgZm9udC1zaXplOiAxLjUwcmVtO1xyXG59XHJcbi5jbG9zZTF7XHJcbiAgZm9udC1zaXplOiAxMDAlO1xyXG5cclxufVxyXG5cclxuLnRleHQtYmxvY2sge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDEwcHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1LCAxMywgNjQsIDAuNTYpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIgLmNsb3NlIHtcclxuICBtYXJnaW46IC0wLjdyZW0gLTFyZW0gLTFyZW0gYXV0bztcclxufVxyXG5cclxuLmJ0bi1hYm91dHtcclxuICB3aWR0aDogODBweDtcclxufVxyXG5cclxuXHJcbi5idG4tcHJpbWFyeXtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IGJvdHRvbSwgZnJvbSh2YXIoLS1zZWNvbmQtY29sb3IpKSwgdG8odmFyKC0tbWFpbi1jb2xvcikpKTtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjVzO1xyXG4gIHRyYW5zaXRpb246IC41cztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtcHJpbWFyeSB7XHJcbiAgY29sb3I6ICMwMDdiZmY7XHJcbiAgLyogYm9yZGVyLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTsgKi9cclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmQtY29sb3IpO1xyXG4gIC8qIGJhY2tncm91bmQ6IG5vbmU7ICovXHJcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCBib3R0b20sIGZyb20odmFyKC0tc2Vjb25kLWNvbG9yKSksIHRvKHZhcigtLW1haW4tY29sb3IpKSk7ICovXHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1wcmltYXJ5OmhvdmVyLFxyXG4uYnRuLXByaW1hcnk6aG92ZXJ7XHJcblxyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCggMTM1ZGVnICwgdmFyKC0tc2Vjb25kLWNvbG9yKSwgdmFyKC0tc2Vjb25kLWNvbG9yKSk7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mYS0weHtcclxuICBmb250LXNpemU6IDAuODVyZW07XHJcbn1cclxuXHJcbnNwYW4uc3ViVGFzaHtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBjb2xvcjogIzM5M2M1ZDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "IaXX":
/*!***************************************************!*\
  !*** ./src/app/components/son/cv/cv.component.ts ***!
  \***************************************************/
/*! exports provided: CvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvComponent", function() { return CvComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CvComponent {
    constructor() { }
    ngOnInit() {
    }
}
CvComponent.ɵfac = function CvComponent_Factory(t) { return new (t || CvComponent)(); };
CvComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CvComponent, selectors: [["app-cv"]], decls: 9, vars: 0, consts: [[1, "h-100"], [1, "color-second", "mb-2"], [1, "fa", "fa-id-card-o", "icon", "mr-2"], [1, "progress", "mb-4", 2, "height", "2px"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 2, "width", "15%"], [1, "row", "mx-5"], [1, "col-12", "shadow", "min-h", "rounded", "pointer", "projet"], ["src", "assets/images/img-cv-.svg", 1, "avatar", "my-2", "w-100"]], template: function CvComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY3YuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3REFBQTtBQUNGIiwiZmlsZSI6ImN2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2IoMCAwIDAgLyAxNSUpICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "J4o8":
/*!*******************************************!*\
  !*** ./src/assets/dataLocal/contact.json ***!
  \*******************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":10,\"lable\":\"Site\",\"name\":\"\",\"url\":\"ouakka.achraf.com\",\"isUrl\":true,\"icon\":\"fa-globe\"},{\"id\":12,\"lable\":\"E-mail\",\"name\":\"ouakka.achraf@gmail.com\",\"url\":\"\",\"isUrl\":false,\"icon\":\"fa-envelope\"},{\"id\":13,\"lable\":\"Linkedin\",\"name\":\"\",\"url\":\"https://ma.linkedin.com/in/achraf-ouakka-871250144\",\"isUrl\":true,\"icon\":\"fa-linkedin\"},{\"id\":14,\"lable\":\"Git\",\"name\":\"\",\"url\":\"https://github.com/achrafOuakka\",\"isUrl\":true,\"icon\":\"fa-git\"},{\"id\":15,\"lable\":\"Problem solving\",\"name\":\"\",\"url\":\"https://codeforces.com/submissions/ouakka.achraf\",\"isUrl\":true,\"icon\":\"fa-code-fork\"},{\"id\":16,\"lable\":\"N°Téléphone\",\"name\":\"06 01 73 46 93\",\"url\":\"\",\"isUrl\":false,\"icon\":\"fa-phone\"},{\"id\":17,\"lable\":\"Adresse\",\"name\":\"Hay Salam Rue Ras Assouad NR 21,Salé\",\"url\":\"\",\"isUrl\":false,\"icon\":\"fa-map\"}]");

/***/ }),

/***/ "JTLt":
/*!***********************************************************!*\
  !*** ./src/app/components/son/projet/projet.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetComponent", function() { return ProjetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_projet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/projet.service */ "PgQp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





function ProjetComponent_div_7_ng_container_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const projet_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", projet_r1.technologies[index_r4], " ");
} }
function ProjetComponent_div_7_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjetComponent_div_7_ng_container_10_div_1_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const index_r4 = ctx.index;
    const projet_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", index_r4 <= projet_r1.show - 1);
} }
const _c0 = function (a1) { return ["/portFolio/detailProject", a1]; };
function ProjetComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Technologies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProjetComponent_div_7_ng_container_10_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const projet_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, projet_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background: url('", projet_r1.mainImage, "') no-repeat center top / cover;\n    background-size: 100%;\n    height: 56%;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](projet_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", projet_r1.technologies);
} }
class ProjetComponent {
    /********************************************************************************************/
    /********************************* les fonctions d'intialisations  **************************/
    /********************************************************************************************/
    constructor(projetService) {
        this.projetService = projetService;
        /********************************************************************************************/
        /**************************************** les Attributes  ***********************************/
        /********************************************************************************************/
        this.data = 'projet';
        this.dataEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.sendData();
        this.projets = this.projetService.getProjets();
    }
    /********************************************************************************************/
    /**************************************  les fonctions **************************************/
    /********************************************************************************************/
    sendData() {
        this.dataEvent.emit(this.data);
    }
}
ProjetComponent.ɵfac = function ProjetComponent_Factory(t) { return new (t || ProjetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_projet_service__WEBPACK_IMPORTED_MODULE_1__["ProjetService"])); };
ProjetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjetComponent, selectors: [["app-projet"]], outputs: { dataEvent: "dataEvent" }, decls: 8, vars: 1, consts: [[1, "h-100"], [1, "color-second", "mb-2"], [1, "fa", "fa-th-list", "icon", "mr-2"], [1, "progress", "mb-4", 2, "height", "2px"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 2, "width", "15%"], [1, "row", "justify-content-around"], ["class", "col-lg-3 mx-2  mb-4 p-0 col-md-5 col-12 shadow min-h rounded pointer projet", "role", "button", 3, "routerLink", 4, "ngFor", "ngForOf"], ["role", "button", 1, "col-lg-3", "mx-2", "mb-4", "p-0", "col-md-5", "col-12", "shadow", "min-h", "rounded", "pointer", "projet", 3, "routerLink"], [1, "animate__animated", "animate__zoomIn"], [1, "px-2", "mt-3", "text-center"], [1, "name-projet", "animate__animated", "animate__slideInUp", "animate__faster"], [1, "my-4", "animate__animated", "animate__slideInUp", "animate__slow"], [1, "color-main", "w-100", "animate__animated", "animate__backInUp", "animate__slower"], [1, "row"], [4, "ngFor", "ngForOf"], ["class", "col h6  m-0 align-self-end justify-content-between ", 4, "ngIf"], [1, "col", "h6", "m-0", "align-self-end", "justify-content-between"]], template: function ProjetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Projet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProjetComponent_div_7_Template, 11, 8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projets);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n\n@media (min-width: 992px) {\n  .col-lg-3[_ngcontent-%COMP%] {\n    flex: 0 0 31%;\n    max-width: 31%;\n  }\n}\n\n.min-h[_ngcontent-%COMP%] {\n  min-height: 350px;\n}\n\n.name-projet[_ngcontent-%COMP%] {\n  min-height: 40px;\n}\n\n.projet[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.01) !important;\n  box-shadow: 0 1rem 3rem rgba(15, 9, 87, 0.2) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvamV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0RBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLGNBQUE7RUFDRjtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxnREFBQTtFQUNBLHVEQUFBO0FBQUYiLCJmaWxlIjoicHJvamV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2IoMCAwIDAgLyAxNSUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gIC5jb2wtbGctMyB7XHJcbiAgICBmbGV4OiAwIDAgMzElO1xyXG4gICAgbWF4LXdpZHRoOiAzMSU7XHJcbiAgfVxyXG59XHJcblxyXG4ubWluLWgge1xyXG4gIG1pbi1oZWlnaHQ6IDM1MHB4O1xyXG59XHJcblxyXG4ubmFtZS1wcm9qZXQge1xyXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5wcm9qZXQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wMSkgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiAwIDFyZW0gM3JlbSByZ2JhKDE1LCA5LCA4NywgMC4yKSFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "PgQp":
/*!********************************************!*\
  !*** ./src/app/services/projet.service.ts ***!
  \********************************************/
/*! exports provided: ProjetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetService", function() { return ProjetService; });
/* harmony import */ var _assets_dataLocal_projet_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/dataLocal/projet.json */ "tYyy");
var _assets_dataLocal_projet_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/dataLocal/projet.json */ "tYyy", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProjetService {
    /********************************************************************************************/
    /********************************* les fonctions d'intialisations  **************************/
    /********************************************************************************************/
    constructor() {
        /********************************************************************************************/
        /****************************** les Attributes et les Données *******************************/
        /********************************************************************************************/
        this.projets = _assets_dataLocal_projet_json__WEBPACK_IMPORTED_MODULE_0__;
    }
    /********************************************************************************************/
    /**************************************  les fonctions **************************************/
    /********************************************************************************************/
    getProjets() {
        return this.projets;
    }
    getProjet(id) {
        return this.projets.find((p) => p.id === id);
    }
}
ProjetService.ɵfac = function ProjetService_Factory(t) { return new (t || ProjetService)(); };
ProjetService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProjetService, factory: ProjetService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'portfolio-angular11-dataLocal';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "VEVj":
/*!*********************************************!*\
  !*** ./src/assets/dataLocal/formation.json ***!
  \*********************************************/
/*! exports provided: 0, 1, 2, 3, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"duration\":\"Août 01-Sept 20 2020\",\"type\":\"Auto-formation certifiant.\",\"description\":\"(OCA JAVA 8)\",\"other\":\"\"},{\"id\":2,\"duration\":\"Fér 01-Mai 29 2020\",\"type\":\"Auto-formation non certifiant.\",\"description\":\"(C#,ASP.NET MVC/Core)\",\"other\":\"\"},{\"id\":3,\"duration\":\"Juin 20-Août 31 2019\",\"type\":\"Auto-formation non certifiant.\",\"description\":\"(Angular)\",\"other\":\"\"},{\"id\":4,\"duration\":\"Août 01.2018-Juin 30.2019\",\"type\":\"Auto-formation non certifiant.\",\"description\":\"(JUnit, Java 8)\",\"other\":\"\"}]");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/portfolio/portfolio.component */ "kBmi");
/* harmony import */ var _components_son_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/son/about/about.component */ "cNgy");
/* harmony import */ var _components_son_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/son/contact/contact.component */ "sgA1");
/* harmony import */ var _components_son_cv_cv_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/son/cv/cv.component */ "IaXX");
/* harmony import */ var _components_son_education_education_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/son/education/education.component */ "4ur4");
/* harmony import */ var _components_son_projet_projet_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/son/projet/projet.component */ "JTLt");
/* harmony import */ var _components_son_projet_details_projet_details_projet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/son/projet/details-projet/details-projet.component */ "BRDr");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioComponent"],
        _components_son_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
        _components_son_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"],
        _components_son_cv_cv_component__WEBPACK_IMPORTED_MODULE_6__["CvComponent"],
        _components_son_education_education_component__WEBPACK_IMPORTED_MODULE_7__["EducationComponent"],
        _components_son_projet_projet_component__WEBPACK_IMPORTED_MODULE_8__["ProjetComponent"],
        _components_son_projet_details_projet_details_projet_component__WEBPACK_IMPORTED_MODULE_9__["DetailsProjetComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"]] }); })();


/***/ }),

/***/ "cNgy":
/*!*********************************************************!*\
  !*** ./src/app/components/son/about/about.component.ts ***!
  \*********************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_about_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/about.service */ "8Lko");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AboutComponent {
    /********************************************************************************************/
    /********************************* les fonctions d'intialisations  **************************/
    /********************************************************************************************/
    constructor(aboutService) {
        this.aboutService = aboutService;
        /********************************************************************************************/
        /**************************************** les Attributes  ***********************************/
        /********************************************************************************************/
        this.data = 'about';
        this.dataEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.sendData();
        this.about = this.aboutService.getAbout();
    }
    /********************************************************************************************/
    /**************************************  les fonctions **************************************/
    /********************************************************************************************/
    sendData() {
        this.dataEvent.emit(this.data);
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_about_service__WEBPACK_IMPORTED_MODULE_1__["AboutService"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], outputs: { dataEvent: "dataEvent" }, decls: 24, vars: 1, consts: [[1, "color-second", "mb-2"], [1, "fa", "fa-graduation-cap", "icon", "mr-2"], [1, "progress", "mb-4", 2, "height", "2px"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 2, "width", "15%"], [1, "row"], [1, "col-md-6"], [1, "h5", "description", "mt-4"], [1, "col-md-6", "d-flex", "justify-content-center"], ["src", "../../assets/images/img-about.svg", "alt", "", 1, "w-75"], [1, "mt-5"], [1, "d-flex", "justify-content-md-start", "justify-content-center"], ["type", "button", "routerLink", "projet", 1, "btn", "btn-primary", "mr-4", "py-2", "px-4", "shadow-sm", "btn-about"], [1, "w-100"], ["type", "button", "routerLink", "cv", 1, "btn", "btn-outline-primary", "py-2", "px-4", "shadow-sm", "btn-about", "text-dark"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "A propos de moi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Salut");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Projets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Mon CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.about.description, "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".btn-about[_ngcontent-%COMP%] {\n  width: 120px;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  background-image: -webkit-gradient(linear, left top, right bottom, from(var(--second-color)), to(var(--main-color)));\n  border-radius: 50px;\n  transition: 0.5s;\n  padding: 10px;\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.btn-outline-primary[_ngcontent-%COMP%] {\n  color: #007bff;\n  \n  border: 2px solid var(--second-color);\n  \n  \n  border-radius: 50px;\n  transition: 0.5s;\n  padding: 10px;\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.btn-outline-primary[_ngcontent-%COMP%]:hover, .btn-primary[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, var(--second-color), var(--second-color));\n  color: white !important;\n}\n\n.description[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBR0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvSEFBQTtFQUNBLG1CQUFBO0VBRUEsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsMEhBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBOztFQUdFLDZFQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0FBREYiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWFib3V0e1xyXG4gIHdpZHRoOiAxMjBweDtcclxufVxyXG5cclxuXHJcbi5idG4tcHJpbWFyeXtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IGJvdHRvbSwgZnJvbSh2YXIoLS1zZWNvbmQtY29sb3IpKSwgdG8odmFyKC0tbWFpbi1jb2xvcikpKTtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjVzO1xyXG4gIHRyYW5zaXRpb246IC41cztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtcHJpbWFyeSB7XHJcbiAgY29sb3I6ICMwMDdiZmY7XHJcbiAgLyogYm9yZGVyLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTsgKi9cclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmQtY29sb3IpO1xyXG4gIC8qIGJhY2tncm91bmQ6IG5vbmU7ICovXHJcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCBib3R0b20sIGZyb20odmFyKC0tc2Vjb25kLWNvbG9yKSksIHRvKHZhcigtLW1haW4tY29sb3IpKSk7ICovXHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1wcmltYXJ5OmhvdmVyLFxyXG4uYnRuLXByaW1hcnk6aG92ZXJ7XHJcblxyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCggMTM1ZGVnICwgdmFyKC0tc2Vjb25kLWNvbG9yKSwgdmFyKC0tc2Vjb25kLWNvbG9yKSk7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgZm9udC13ZWlnaHQ6bm9ybWFsO1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "kBmi":
/*!*************************************************************!*\
  !*** ./src/app/components/portfolio/portfolio.component.ts ***!
  \*************************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");





const _c0 = function (a0) { return { "active": a0 }; };
// declare var $:any;
class PortfolioComponent {
    /********************************************************************************************/
    /********************************* les fonctions d'intialisations  **************************/
    /********************************************************************************************/
    constructor() {
        /********************************************************************************************/
        /**************************************** les Attributes  ***********************************/
        /********************************************************************************************/
        this.currentPage = '';
    }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_0__(function () {
            jquery__WEBPACK_IMPORTED_MODULE_0__('[data-toggle="tooltip"]');
        });
        jquery__WEBPACK_IMPORTED_MODULE_0__('#menu-toggler').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_0__('#sidebar-wrapper').toggleClass('show');
            // $('#sidebar-wrapper').addClass('show');
        });
    }
    /********************************************************************************************/
    /**************************************  les fonctions **************************************/
    /********************************************************************************************/
    getChildData($event) {
        this.currentPage = $event.data;
        console.log(this.currentPage);
    }
}
PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) { return new (t || PortfolioComponent)(); };
PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PortfolioComponent, selectors: [["app-portfolio"]], decls: 51, vars: 15, consts: [[1, "main-content"], ["id", "bg-img", 2, "background-image", "url('assets/images/bg-1.jpg')"], [1, "name-profil", "color-third"], ["id", "cloud"], ["src", "assets/images/cloud1.png", "alt", "", 2, "--i", "1"], ["src", "assets/images/cloud2.png", "alt", "", 2, "--i", "2"], ["src", "assets/images/cloud3.png", "alt", "", 2, "--i", "3"], ["src", "assets/images/cloud4.png", "alt", "", 2, "--i", "4"], ["src", "assets/images/cloud5.png", "alt", "", 2, "--i", "5"], ["id", "wrapper", 1, "d-flex", "position-relative"], ["id", "sidebar-wrapper", 1, "collapse", "show"], ["id", "sidebar-content", 1, "p-2"], ["src", "https://source.unsplash.com/c_GmwfHBDzk/200x200", 1, "avatar", "my-2"], [1, "name-sideBar", "my-3"], [1, "profil-sideBar", "color-third", "my-3"], [1, "my-hr"], [1, "list-group", "list-group-flush", "w-100"], ["href", "#", "routerLink", "", 1, "list-group-item", "list-group-item-action", "border-0", 3, "ngClass"], [1, "fa", "fa-info-circle", "icon0", "mx-2"], ["href", "#", "routerLink", "projet", 1, "list-group-item", "list-group-item-action", "border-0", 3, "ngClass"], [1, "fa", "fa-th-list", "icon", "mx-2"], ["href", "#", "routerLink", "education", 1, "list-group-item", "list-group-item-action", "border-0", 3, "ngClass"], [1, "fa", "fa-graduation-cap", "icon", "mx-2"], ["href", "#", "routerLink", "contact", 1, "list-group-item", "list-group-item-action", "border-0", 3, "ngClass"], [1, "fa", "fa-id-card", "icon", "mx-2"], ["href", "#", "routerLink", "cv", 1, "list-group-item", "list-group-item-action", "border-0", 3, "ngClass"], [1, "fa", "fa-file", "icon", "mx-2"], ["id", "page-content-wrapper"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "fixed-top", "text-white"], [1, "container-fluid"], ["id", "menu-toggler", "type", "button", "data-toggle", "collapse", "data-target", "#sidebar-wrapper", "aria-controls", "sidebar-wrapper", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "text-white", "btn", "custom-toggler", "border", "px-1", "py-0", "shadow-none", "animate__animated", "animate__fadeInLeft", "animate__slower"], [1, "navbar-toggler-icon"], [1, "navbar-nav"], [1, "nav-item", "active", "animate__animated", "animate__fadeInLeft", "animate__slower"], ["aria-hidden", "true", 1, "fa", "fa-home", "fa-2x", "mx-4"], [1, "navbar-nav", "ml-auto", "mt-lg-0"], [1, "nav-item", "active"], [1, "circle", "animate__animated", "animate__fadeInRight", "animate__slower"], [1, "initials"], [1, "content", "p-4", "shadow"], [3, "activate"]], template: function PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "PortFolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Ouakka Achraf");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Developpeur web full stack");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "hr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\u00C0 propos de moi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Projet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " \u00C9ducation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "hr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "nav", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "ul", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "ul", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "li", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "OA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "router-outlet", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("activate", function PortfolioComponent_Template_router_outlet_activate_50_listener($event) { return ctx.getChildData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, ctx.currentPage == "about"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, ctx.currentPage == "projet"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, ctx.currentPage == "education"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c0, ctx.currentPage == "contact"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c0, ctx.currentPage == "cv"));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["body[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  margin: 0;\n  padding: 0;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  overflow-x: hidden;\n  background: #F3F8FB;\n}\n\n\n\nnav.bg-dark[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--second-color), var(--main-color)) !important;\n  color: white;\n  padding-top: 0.8rem !important;\n  padding-bottom: 0.8rem !important;\n}\n\n.circle[_ngcontent-%COMP%] {\n  background-color: #03494e;\n  color: white;\n  border-radius: 50%;\n  height: 40px;\n  text-align: center;\n  width: 40px;\n  line-height: 40px;\n  float: left;\n  margin-left: auto;\n  margin-right: 0;\n}\n\n.initials[_ngcontent-%COMP%] {\n  line-height: 2.1;\n  font-size: larger;\n  position: relative;\n  font-weight: 600;\n}\n\n.custom-toggler[_ngcontent-%COMP%]   .navbar-toggler-icon[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='white' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\");\n}\n\n\n\n\n\n.avatar[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n}\n\n.list-group-item-action[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  font-size: 1rem;\n  background: transparent;\n  color: white;\n  font-weight: 500;\n}\n\n.list-group-item-action[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.03);\n  color: #565fa7;\n}\n\n.list-group-item.active[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.05) !important;\n  color: #454d8e !important;\n}\n\n.my-hr[_ngcontent-%COMP%] {\n  margin: 16px;\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n.icon0[_ngcontent-%COMP%] {\n  font-size: 1.65em;\n}\n\n.icon[_ngcontent-%COMP%] {\n  font-size: 1.35em;\n}\n\n\n\n\n\n#wrapper[_ngcontent-%COMP%] {\n  margin-top: 61px;\n  min-height: 138%;\n}\n\n#sidebar-wrapper[_ngcontent-%COMP%] {\n  margin-left: -13.8rem;\n  transition: margin 0.25s ease-out;\n  width: 220px;\n}\n\n#sidebar-content[_ngcontent-%COMP%] {\n  width: 200px;\n  border-right: none;\n  background: linear-gradient(135deg, var(--second-color), var(--main-color));\n  color: white;\n  border-radius: 10px;\n  margin: 16px;\n  margin-right: 0;\n  text-align: center;\n  min-height: calc(100% - 32px);\n}\n\n#sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-heading[_ngcontent-%COMP%] {\n  padding: 0.875rem 1.25rem;\n  font-size: 1.2rem;\n}\n\n#sidebar-wrapper[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%] {\n  width: 15rem;\n}\n\n#page-content-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n}\n\n#wrapper[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n\n.content[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  margin: 16px;\n  margin-left: 20px;\n  margin-top: 150px;\n  background: #fff;\n  min-height: 70%;\n}\n\n@media (max-width: 800px) {\n  #sidebar-wrapper[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n\n  #page-content-wrapper[_ngcontent-%COMP%] {\n    min-width: 0;\n    width: 100%;\n  }\n\n  #wrapper[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n\n\n\n\n#bg-img[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  height: 65%;\n  position: relative;\n}\n\n#bg-img[_ngcontent-%COMP%]   h3.name-profil[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30%;\n  left: 53%;\n  transform: translate(-50%, -50%);\n  z-index: 99;\n  font-size: 2.5em;\n  font-weight: 900;\n}\n\n#cloud[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n#cloud[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  animation: cld calc(50s * var(--i)) linear infinite;\n  opacity: 0.6;\n  max-width: 100%;\n  position: absolute;\n  bottom: 0;\n}\n\n@keyframes cld {\n  0% {\n    transform: translateX(-50%);\n  }\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n\n\n\n\n#my-son-hr[_ngcontent-%COMP%] {\n  margin-top: -2;\n  margin-bottom: 2rem;\n  border: 0;\n  border-top: 0;\n  background: linear-gradient(135deg, var(--second-color), var(--main-color)) !important;\n  width: 100px;\n  border-radius: 10px;\n  margin-left: 10px;\n  height: 4px;\n  resize: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFHQSwyQkFBQTs7QUFFQTtFQUNJLHNGQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUNBQUE7QUFESjs7QUFJQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJQTtFQUNJLHdQQUFBO0FBREo7O0FBS0EseUJBQUE7O0FBR0EsNEJBQUE7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFMSjs7QUFRQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUxKOztBQVFBO0VBQ0ksK0JBQUE7RUFDQSxjQUFBO0FBTEo7O0FBUUE7RUFDSSwwQ0FBQTtFQUNBLHlCQUFBO0FBTEo7O0FBUUE7RUFDSSxZQUFBO0VBQ0EsMENBQUE7QUFMSjs7QUFRQTtFQUNJLGlCQUFBO0FBTEo7O0FBUUE7RUFDSSxpQkFBQTtBQUxKOztBQVNBLDBCQUFBOztBQUdBLG9DQUFBOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQVRKOztBQVlBO0VBRUkscUJBQUE7RUFJQSxpQ0FBQTtFQUNBLFlBQUE7QUFWSjs7QUFhQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJFQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FBVko7O0FBYUE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0FBVko7O0FBYUE7RUFDSSxZQUFBO0FBVko7O0FBYUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQVZKOztBQWFBO0VBQ0ksY0FBQTtBQVZKOztBQWFBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQVZKOztBQWNBO0VBQ0k7SUFDSSxjQUFBO0VBWE47O0VBYUU7SUFDSSxZQUFBO0lBQ0EsV0FBQTtFQVZOOztFQVlFO0lBQ0ksYUFBQTtFQVROO0FBQ0Y7O0FBYUEsa0NBQUE7O0FBR0EsK0JBQUE7O0FBRUE7RUFDSSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQWRKOztBQWlCQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFFQSxnQkFBQTtFQUNBLGdCQUFBO0FBZko7O0FBa0JBO0VBQ0ksZ0JBQUE7QUFmSjs7QUFrQkE7RUFDSSxtREFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBZko7O0FBa0JBO0VBQ0k7SUFDSSwyQkFBQTtFQWZOO0VBaUJFO0lBQ0ksMkJBQUE7RUFmTjtBQUNGOztBQW1CQSw2QkFBQTs7QUFHQSxtQ0FBQTs7QUFFQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0Esc0ZBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBcEJKOztBQXdCQSxpQ0FBQSIsImZpbGUiOiJwb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZDogI0YzRjhGQjtcclxufVxyXG5cclxuXHJcbi8qKioqKiogU3RhcnQgbmF2QmFyICoqKioqKi9cclxuXHJcbm5hdi5iZy1kYXJrIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXNlY29uZC1jb2xvciksIHZhcigtLW1haW4tY29sb3IpKSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZy10b3A6IDAuOHJlbSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuOHJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2lyY2xlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzQ5NGU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLmluaXRpYWxzIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjE7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5jdXN0b20tdG9nZ2xlciAubmF2YmFyLXRvZ2dsZXItaWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB2aWV3Qm94PScwIDAgMzIgMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIHN0cm9rZT0nd2hpdGUnIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIGQ9J000IDhoMjRNNCAxNmgyNE00IDI0aDI0Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xyXG59XHJcblxyXG5cclxuLyoqKioqKiBFbmQgbmF2QmFyICoqKioqKi9cclxuXHJcblxyXG4vKioqKioqIFN0YXJ0IHNpZGViYXIgKioqKioqL1xyXG5cclxuLmF2YXRhciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbS1hY3Rpb246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAzKTtcclxuICAgIGNvbG9yOiAjNTY1ZmE3O1xyXG59XHJcblxyXG4ubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDUpICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogcmdiKDY5IDc3IDE0MikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm15LWhyIHtcclxuICAgIG1hcmdpbjogMTZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxufVxyXG5cclxuLmljb24wIHtcclxuICAgIGZvbnQtc2l6ZTogMS42NWVtO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDEuMzVlbTtcclxufVxyXG5cclxuXHJcbi8qKioqKiogRW5kIHNpZGViYXIgKioqKioqL1xyXG5cclxuXHJcbi8qKioqKiogU3RhcnQgc2lkZWJhci9jb250ZW50ICoqKioqKi9cclxuXHJcbiN3cmFwcGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDYxcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMzglO1xyXG59XHJcblxyXG4jc2lkZWJhci13cmFwcGVyIHtcclxuICAgIC8vaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMy44cmVtO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogbWFyZ2luIC4yNXMgZWFzZS1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcclxuICAgIHRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xyXG4gICAgd2lkdGg6IDIyMHB4O1xyXG59XHJcblxyXG4jc2lkZWJhci1jb250ZW50IHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXNlY29uZC1jb2xvciksIHZhcigtLW1haW4tY29sb3IpKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46IDE2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSAzMnB4KTtcclxufVxyXG5cclxuI3NpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkaW5nIHtcclxuICAgIHBhZGRpbmc6IDAuODc1cmVtIDEuMjVyZW07XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuI3NpZGViYXItd3JhcHBlciAubGlzdC1ncm91cCB7XHJcbiAgICB3aWR0aDogMTVyZW07XHJcbn1cclxuXHJcbiNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuI3dyYXBwZXIgLnNob3cge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46IDE2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1pbi1oZWlnaHQ6IDcwJTtcclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLSBtZWRpYVxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgI3BhZ2UtY29udGVudC13cmFwcGVyIHtcclxuICAgICAgICBtaW4td2lkdGg6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAjd3JhcHBlciAuc2hvdyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qKioqKiogRW5kIHNpZGViYXIvY29udGVudCAqKioqKiovXHJcblxyXG5cclxuLyoqKioqKiBTdGFydCBiYWNrZ3JvdW5kICoqKioqKi9cclxuXHJcbiNiZy1pbWcge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2NSU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNiZy1pbWcgaDMubmFtZS1wcm9maWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMCU7XHJcbiAgICBsZWZ0OiA1MyU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgLy9jb2xvcjogI2RkZTFlMztcclxuICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcblxyXG4jY2xvdWQge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuI2Nsb3VkIGltZyB7XHJcbiAgICBhbmltYXRpb246IGNsZCBjYWxjKDUwcyAqIHZhcigtLWkpKSBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBvcGFjaXR5OiAuNjtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBjbGQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qKioqKiogRW5kIGJhY2tncm91bmQgKioqKioqL1xyXG5cclxuXHJcbi8qKioqKiogU3RhcnQgYWxsIGNvbXBvbmVuZXQgKioqKioqL1xyXG5cclxuI215LXNvbi1ociB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItdG9wOiAwO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCAxMzVkZWcsIHZhcigtLXNlY29uZC1jb2xvciksIHZhcigtLW1haW4tY29sb3IpKSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICByZXNpemU6IGF1dG87XHJcbn1cclxuXHJcblxyXG4vKioqKioqIEVuZCBhbGwgY29tcG9uZW5ldCAqKioqKiovIl19 */"] });


/***/ }),

/***/ "qbAA":
/*!*********************************************!*\
  !*** ./src/assets/dataLocal/education.json ***!
  \*********************************************/
/*! exports provided: 0, 1, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"duration\":\"2015-2017\",\"name\":\"Master d’Informatique Signaux et Télécommunication.\",\"university\":\"Université Mohamed V - Rabat\",\"other\":\"(Option : Informatique).\"},{\"id\":2,\"duration\":\"2014-2015\",\"name\":\"Licence en Electronique Informatique.\",\"university\":\"Université Mohamed V - Rabat\",\"other\":\"\"}]");

/***/ }),

/***/ "sgA1":
/*!*************************************************************!*\
  !*** ./src/app/components/son/contact/contact.component.ts ***!
  \*************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/contact.service */ "3ITz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ContactComponent_ng_container_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const contact_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", contact_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fa ", contact_r1.icon, " icon-tash color-main mr-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", contact_r1.lable, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", contact_r1.url, " ");
} }
function ContactComponent_ng_container_8_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contact_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fa ", contact_r1.icon, " icon-tash color-main mr-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", contact_r1.lable, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", contact_r1.name, " ");
} }
function ContactComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactComponent_ng_container_8_ng_container_2_Template, 9, 6, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContactComponent_ng_container_8_ng_template_3_Template, 8, 5, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const contact_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", contact_r1.isUrl == true)("ngIfElse", _r3);
} }
class ContactComponent {
    /********************************************************************************************/
    /********************************* les fonctions d'intialisations  **************************/
    /********************************************************************************************/
    constructor(contactService) {
        this.contactService = contactService;
        /********************************************************************************************/
        /**************************************** les Attributes  ***********************************/
        /********************************************************************************************/
        this.data = 'contact';
        this.dataEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.sendData();
        this.contacts = this.contactService.getcontacts();
    }
    /********************************************************************************************/
    /**************************************  les fonctions **************************************/
    /********************************************************************************************/
    sendData() {
        this.dataEvent.emit(this.data);
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], outputs: { dataEvent: "dataEvent" }, decls: 11, vars: 1, consts: [[1, "color-second", "mb-2"], [1, "fa", "fa-id-card", "icon", "mr-2"], [1, "progress", "mb-4", 2, "height", "2px"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 2, "width", "15%"], [1, "row"], [1, "col-md-6"], [4, "ngFor", "ngForOf"], [1, "col-md-6", "d-flex", "justify-content-center", "align-items-center"], ["src", "https://maps.google.com/maps?width=520&height=400&hl=en&q=%20sale+()&t=p&z=13&ie=UTF8&iwloc=B&output=embed", 1, "shadow-sm", "contact", "rounded", "border-0", "animate__animated", "animate__fadeInRight", "animate__slower", 2, "height", "55vh", "width", "90%"], [1, "shadow-sm", "rounded", "mb-2", "p-1", "contact"], ["class", "pointer", 4, "ngIf", "ngIfElse"], ["other", ""], [1, "pointer"], [1, "h6", 3, "href"], [1, "ml-4"], ["href", "javascript:void(0);", 1, "h6"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ContactComponent_ng_container_8_Template, 5, 2, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "iframe", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contacts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".contact[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.01) !important;\n  box-shadow: 0 0.6rem 1rem rgba(15, 9, 87, 0.2) !important;\n}\n\n.shadow-sm[_ngcontent-%COMP%] {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.35) !important;\n}\n\n@media (max-width: 576px) {\n  .h5[_ngcontent-%COMP%] {\n    font-size: 1rem !important;\n  }\n\n  .h6[_ngcontent-%COMP%] {\n    font-size: 0.8rem !important;\n  }\n}\n\na[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: inherit;\n  \n}\n\na[_ngcontent-%COMP%]:hover {\n  color: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdEQUFBO0VBQ0EseURBQUE7QUFDRjs7QUFFQTtFQUNFLDZEQUFBO0FBQ0Y7O0FBR0E7RUFFRTtJQUNFLDBCQUFBO0VBREY7O0VBR0E7SUFDRSw0QkFBQTtFQUFGO0FBQ0Y7O0FBR0E7RUFDRSxjQUFBO0VBQ0Esd0JBQUE7RUFBMEIsaUJBQUE7QUFBNUI7O0FBR0E7RUFDRSxjQUFBO0FBQUYiLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDEpICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogMCAwLjZyZW0gMXJlbSByZ2IoMTUgOSA4NyAvIDIwJSkgIWltcG9ydGFudDtcclxufVxyXG4vLyoqLS0tLS0tLS0tLS0tLS0tLS0tLW92ZXJyaWQgYm9vdHN0cmFwXHJcbi5zaGFkb3ctc20ge1xyXG4gIGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMC4yNXJlbSByZ2IoMCAwIDAgLyAzNSUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vKiotLS0tLS0tLS0tLS0tLS0tLS0tIFNtYWxsIGRldmljZXMgKGxhbmRzY2FwZSBwaG9uZXMsIDU3NnB4IGFuZCB1cClcclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcblxyXG4gIC5oNSB7XHJcbiAgICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmg2IHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7IC8qIG5vIHVuZGVybGluZSAqL1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "tYyy":
/*!******************************************!*\
  !*** ./src/assets/dataLocal/projet.json ***!
  \******************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":18,\"duration\":\"\",\"name\":\"Plateforme des appels offres   [Back Office]\",\"titre\":\"\",\"description\":\"Développement d’une plateforme des appels offres du Maroc.\",\"tache\":\"\",\"technologies\":[\"Symfony\",\"Php\",\"JQuery\",\"Html\",\"Css\",\"Bootstrap\",\"MySql\",\"UML\",\"Git\",\"Ajax\",\"PhpStorm\"],\"show\":2,\"icon\":\"assets/images/img-tash-ao-bo.svg\",\"mainImage\":\"assets/images/imges-projets/img-ao-bo-1.png\",\"images\":[{\"id\":1,\"name\":\"Statiqtique\",\"description\":\"\",\"url\":\"assets/images/imges-projets/img-ao-bo-1.png\"},{\"id\":2,\"name\":\"Tableau de borde\",\"description\":\"\",\"url\":\"assets/images/imges-projets/img-ao-bo-2.png\"},{\"id\":3,\"name\":\"Gestion des appels d'offres National\",\"description\":\"\",\"url\":\"assets/images/imges-projets/img-ao-bo-3.png\"},{\"id\":4,\"name\":\"Messagerie\",\"description\":\"\",\"url\":\"assets/images/imges-projets/img-ao-bo-4.png\"},{\"id\":5,\"name\":\"Notifivation par e-mail pour AO modifié\",\"description\":\"\",\"url\":\"assets/images/imges-projets/img-ao-bo-5.png\"}],\"taches\":[{\"id\":1,\"name\":\"Réalisation de spécifications technique.\",\"sousTaches\":[]},{\"id\":2,\"name\":\"Participation aux conceptions du projet.\",\"sousTaches\":[]},{\"id\":3,\"name\":\"Planifier les durées de modules.\",\"sousTaches\":[]},{\"id\":4,\"name\":\"Réalisation des modules suivant:\",\"sousTaches\":[{\"id\":1,\"name\":\"Gestion des appels d’offre nationaux, prévisionnels, internationaux et résultats.\"},{\"id\":2,\"name\":\"Un module de messagerie pour communication et la fidélisation des utilisateurs.\"},{\"id\":3,\"name\":\"Gestion des fichiers joints pour les appels d’offres (CPS).\"},{\"id\":4,\"name\":\"Génération des Statistiques.\"},{\"id\":5,\"name\":\"Consultation de l’historique de navigation de client avec recherche avancée.\"},{\"id\":6,\"name\":\"Module de chat partagé entre Client et Collaborateur avec notification de nouveaux messages.\"}]},{\"id\":5,\"name\":\"Faire les Tests pour chaque module.\",\"sousTaches\":[]},{\"id\":6,\"name\":\"La réalisation de ce projet en collaboration.\",\"sousTaches\":[]}],\"urlGit\":[],\"urlWeb\":[]},{\"id\":19,\"duration\":\"\",\"name\":\"Plateforme des appels offres   [Front Office]\",\"titre\":\"\",\"description\":\"Développement d’une plateforme des appels offres du Maroc.\",\"tache\":\"\",\"technologies\":[\"Symfony\",\"Php\",\"JQuery\",\"Html\",\"Css\",\"Bootstrap\",\"MySql\",\"UML\",\"Git\",\"Ajax\",\"PhpStorm\"],\"show\":2,\"icon\":\"assets/images/img-tash-ao-bo.svg\",\"mainImage\":\"assets/images/imges-projets/img-ao-fo-1.png\",\"images\":[{\"id\":1,\"name\":\"Recherche avancée\",\"description\":\"\",\"url\":\"assets/images/imges-projets/img-ao-fo-1.png\"},{\"id\":2,\"name\":\"Index des prix\",\"description\":\"\",\"url\":\"assets/images/imges-projets/img-ao-fo-2.png\"},{\"id\":3,\"name\":\"Rappel par e-mail et notification\",\"description\":\"\",\"url\":\"assets/images/imges-projets/img-ao-fo-3.png\"}],\"taches\":[{\"id\":1,\"name\":\"Réalisation espace client avec les fonctionnalités suivantes :\",\"sousTaches\":[{\"id\":1,\"name\":\"La consultation des appels d’offre et résultats avec recherche avancée.\"},{\"id\":2,\"name\":\"La programmation des notes de rappel (Email et notification via la plateforme).\"},{\"id\":3,\"name\":\"L’envoi de réclamation & suggestion.\"},{\"id\":4,\"name\":\"La réception d’un mail/notification lorsque l’utilisateur est modifié d’un appel d’offre.\"},{\"id\":5,\"name\":\"le chat partagé entre Client et Collaborateur avec notification de nouveaux messages.\"}]},{\"id\":2,\"name\":\"Intégration de template\",\"sousTaches\":[]}],\"urlGit\":[],\"urlWeb\":[]},{\"id\":20,\"duration\":\"\",\"name\":\"Protfolio\",\"titre\":\"\",\"description\":\"Développement d'un portfolio basé sur le framework angular 11\",\"tache\":\"\",\"technologies\":[\"Angular 11\",\"Bootstrap\",\"TypeScript\",\"Html\",\"Css\",\"Git\",\"PhpStorm\"],\"show\":2,\"icon\":\"assets/images/img-tash-portfolio.svg\",\"mainImage\":\"assets/images/imges-projets/img-porfolio-1.png\",\"images\":[{\"id\":1,\"name\":\"Protfolio\",\"description\":\"\",\"url\":\"assets/images/imges-projets/img-about-1.png\"}],\"taches\":[{\"id\":1,\"name\":\"Création des services et des comparants.\",\"sousTaches\":[]},{\"id\":2,\"name\":\"Consommation des fichiers JSON local comme API.\",\"sousTaches\":[]}],\"urlGit\":[\"https://github.com/achrafOuakka\"],\"urlWeb\":[\"https://github.com/achrafOuakka\"]},{\"id\":21,\"duration\":\"\",\"name\":\"Projet CRM\",\"titre\":\"\",\"description\":\"Développement d’une plateforme de gestion des relations Clients\",\"technologies\":[\"Symfony\",\"Php\",\"JavaScript\",\"Html\",\"Css\",\"Bootstrap\",\"MySql\",\"UML\",\"Git\",\"Ajax\",\"PhpStorm\"],\"show\":3,\"icon\":\"assets/images/img-tash-crm.svg\",\"mainImage\":\"assets/images/imges-projets/img-crm-1.png\",\"images\":[{\"id\":1,\"name\":\"Statiqtique\",\"description\":\"\",\"url\":\"assets/images/imges-projets/img-crm-1.png\"},{\"id\":2,\"name\":\"Tableau de borde\",\"description\":\"\",\"url\":\"assets/images/imges-projets/img-crm-2.png\"},{\"id\":3,\"name\":\"Liste de tiers\",\"description\":\"\",\"url\":\"assets/images/imges-projets/img-crm-3.png\"},{\"id\":4,\"name\":\"Gestion des documents\",\"description\":\"\",\"url\":\"assets/images/imges-projets/img-crm-4.png\"},{\"id\":5,\"name\":\"Calendrier\",\"description\":\"\",\"url\":\"assets/images/imges-projets/img-crm-5.png\"},{\"id\":6,\"name\":\"Paramétrage\",\"description\":\"\",\"url\":\"assets/images/imges-projets/img-crm-6.png\"},{\"id\":7,\"name\":\"Génération une modéle documents juridique\",\"description\":\"\",\"url\":\"assets/images/imges-projets/img-crm-7.png\"},{\"id\":1,\"name\":\"video\",\"description\":\"\",\"url\":\"\"}],\"taches\":[{\"id\":1,\"name\":\"Participation aux conceptions du projet\",\"sousTaches\":[]},{\"id\":2,\"name\":\"Réalisation des modules suivant :\",\"sousTaches\":[{\"id\":1,\"name\":\"Gestion des utilisateurs.\"},{\"id\":2,\"name\":\"Gestion des rôles, des privilèges et logs.\"},{\"id\":3,\"name\":\"Gestion des clients et prospect.\"},{\"id\":4,\"name\":\"Gestion des factures et des devis.\"},{\"id\":5,\"name\":\"Gestion des factures et des devis.\"},{\"id\":6,\"name\":\"Gestion de calendrier avec les rappels par Email et notification.\"},{\"id\":7,\"name\":\"Création de modèle de documents juridique.\"},{\"id\":8,\"name\":\"Génération des Statistiques.\"}]},{\"id\":3,\"name\":\"Faire les Tests croisés.\",\"sousTaches\":[]},{\"id\":4,\"name\":\"Implémenter la solution tout en respectant les bonnes pratiques et standards de développement à travers des utilisés les designs paternes : DAO, MVC.\",\"sousTaches\":[]}],\"urlGit\":[],\"urlWeb\":[]},{\"id\":22,\"duration\":\"\",\"name\":\"Projet Web RTC\",\"titre\":\"\",\"description\":\"Réalisation d\\\"une couche Web RTC qui permet de faire des appels téléphoniques\",\"tache\":\"\",\"technologies\":[\"JavaScript\",\"Bootstrap\",\"Html\",\"Css\",\"Git\",\"Ajax\",\"PhpStorm,\"],\"show\":2,\"icon\":\"assets/images/img-tash-call.svg\",\"mainImage\":\"assets/images/imges-projets/img-call-1.png\",\"images\":[{\"id\":1,\"name\":\"Appel entrant\",\"description\":\"\",\"url\":\"assets/images/imges-projets/img-call-1.png\"},{\"id\":2,\"name\":\"Utilisateur connecté\",\"description\":\"\",\"url\":\"assets/images/imges-projets/img-call-2.png\"},{\"id\":3,\"name\":\"Appel sortant\",\"description\":\"\",\"url\":\"assets/images/imges-projets/img-call-3.png\"},{\"id\":4,\"name\":\"Conception graphique\",\"description\":\"\",\"url\":\"assets/images/imges-projets/img-call-4.png\"},{\"id\":1,\"name\":\"video\",\"description\":\"\",\"url\":\"\"}],\"taches\":[],\"urlGit\":[]},{\"id\":23,\"duration\":\"\",\"name\":\"Templates site web\",\"titre\":\"\",\"description\":\"Un modèle simple pour démonstration\",\"tache\":\"\",\"technologies\":[\"Bootstrap 4\",\"Git\",\"Html\",\"Css\",\"JQuery\",\"Php strom\"],\"show\":2,\"icon\":\"assets/images/img-tash-site.svg\",\"mainImage\":\"assets/images/imges-projets/img-site-1.png\",\"images\":[{\"id\":1,\"name\":\"Site web\",\"description\":\"\",\"url\":\"assets/images/imges-projets/img-site-1.png\"}],\"taches\":[],\"urlGit\":[\"https://github.com/achrafOuakka/Templates-site-web\"],\"urlWeb\":[\"https://achrafouakka.github.io/Templates-site-web/\"]},{\"id\":24,\"duration\":\"\",\"name\":\"Gestion des Emails\",\"titre\":\"\",\"description\":\"Développement du service web de la gestion des e-mails (envoyer, recevoir et traitement de texte) basé sur Spring Intégration \",\"technologies\":[\"Spring Boot\",\"Spring Integration\",\"Java 8\",\"Rest API\",\"Git\",\"MySql\"],\"show\":3,\"icon\":\"assets/images/img-tash-code.svg\",\"mainImage\":\"assets/images/img-tash-code.svg\",\"images\":[],\"taches\":[],\"urlGit\":[\"https://github.com/achrafOuakka/-MailManagement_TreatmentText_Validation_by_SpringBoot_SIntegration\"],\"urlWeb\":[]},{\"id\":25,\"duration\":\"\",\"name\":\"chargement et téléchargement de l\\\"image.\",\"titre\":\"\",\"description\":\"Gestion des e-mails (envoyer, recevoir)\",\"technologies\":[\"Spring Boot\",\"Java 8\",\"Spring Integration\",\"Rest API\",\"Git\",\"MySql\"],\"show\":2,\"icon\":\"assets/images/img-tash-mobile.svg\",\"mainImage\":\"assets/images/img-tash-mobile.svg\",\"images\":[{\"id\":1,\"name\":\"images 1\",\"description\":\"\",\"url\":\"\"},{\"id\":2,\"name\":\"images 2\",\"description\":\"\",\"url\":\"\"},{\"id\":3,\"name\":\"images 3\",\"description\":\"\",\"url\":\"\"}],\"taches\":[],\"urlGit\":[\"https://github.com/achrafOuakka/Upload_Dowload_image\",\"https://github.com/achrafOuakka/Ionic4-take-photo-resize-and-take-photo-by-gallery-\"],\"urlWeb\":[]},{\"id\":26,\"duration\":\"\",\"name\":\"Application de scanner Barcode\",\"titre\":\"\",\"description\":\"Lecteur de code à barre par technologie Ionic\",\"technologies\":[\"Ionic 4\",\"TypeScript\",\"Git\",\"capacitor\",\"Visual Studio Code\"],\"show\":3,\"icon\":\"assets/images/img-tash-mobile.svg\",\"mainImage\":\"assets/images/img-tash-mobile.svg\",\"images\":[{\"id\":1,\"name\":\"images 1\",\"description\":\"\",\"url\":\"\"},{\"id\":2,\"name\":\"images 2\",\"description\":\"\",\"url\":\"\"},{\"id\":3,\"name\":\"images 3\",\"description\":\"\",\"url\":\"\"}],\"taches\":[],\"urlGit\":[\"https://github.com/achrafOuakka/codes-barres\"],\"urlWeb\":[]},{\"id\":27,\"duration\":\"\",\"name\":\"Projet pour suivi d’un processus métier\",\"titre\":\"Freelance développeur Java/Spring Boot/Ionic\",\"description\":\"Conception et réalisation d'une application mobile et web avec une équipe de développeurs; qui assure le suivi d’un processus métier, de l’installation de la fibre optique qui augmente le nombre des demandes à traiter par jour par 25%\",\"technologies\":[\"Spring Boot\",\"Angular\",\"Ionic 4\",\"MySql\",\"Rest API\",\"Spring Security\",\"Java 8\",\"TypeScript\",\"Git\",\"Inkscape\"],\"show\":3,\"icon\":\"assets/images/img-tash-web-mobile.svg\",\"mainImage\":\"assets/images/img-tash-web-mobile.svg\",\"images\":[{\"id\":1,\"name\":\"images 1\",\"description\":\"\",\"url\":\"\"},{\"id\":2,\"name\":\"images 2\",\"description\":\"\",\"url\":\"\"},{\"id\":3,\"name\":\"images 3\",\"description\":\"\",\"url\":\"\"}],\"taches\":[{\"id\":1,\"name\":\"Participation aux conceptions du projet\",\"sousTaches\":[]},{\"id\":2,\"name\":\"Réalisation et conception des interfaces graphiques pour front mobile \",\"sousTaches\":[]},{\"id\":3,\"name\":\"Réalisation des taches suivant:\",\"sousTaches\":[{\"id\":1,\"name\":\"Développement du service web pour certain des entités\"},{\"id\":2,\"name\":\"Réalisation de la partie mobile\"},{\"id\":3,\"name\":\"Création des services qui donne le droit d’accès aux fonctionnalités native de Téléphone (caméra, jps, barre code)\"}]}],\"urlGit\":[],\"urlWeb\":[]},{\"id\":28,\"duration\":\"\",\"name\":\"Application WebMail\",\"titre\":\"Freelance développeur web Spring Boot/Angular\",\"description\":\"Conception et développement d’une application WebMail dédié au domaine de l’installation de la fibre optique\",\"technologies\":[\"Spring Boot\",\"Angular\",\"Spring Security\",\"Rest API\",\"Spring Data MongoDB\",\"NoSql\",\"Java\",\"Html\",\"Css\",\"TypeScript\",\"Bootstrap\"],\"show\":2,\"icon\":\"assets/images/img-tash-follow.svg\",\"mainImage\":\"assets/images/imges-projets/img-follow-4.png\",\"images\":[{\"id\":1,\"name\":\"Authentification\",\"description\":\"\",\"url\":\"assets/images/imges-projets/img-follow-1.jpg\"},{\"id\":2,\"name\":\"Statiqtique\",\"description\":\"\",\"url\":\"assets/images/imges-projets/img-follow-2.jpg\"},{\"id\":3,\"name\":\"Modification de Pofile\",\"description\":\"\",\"url\":\"assets/images/imges-projets/img-follow-3.jpg\"},{\"id\":4,\"name\":\"Les Information d'un ordre\",\"description\":\"\",\"url\":\"assets/images/imges-projets/img-follow-4.png\"},{\"id\":5,\"name\":\"E-mail de Confirmation\",\"description\":\"\",\"url\":\"assets/images/imges-projets/img-follow-5.jpg\"}],\"taches\":[{\"id\":1,\"name\":\"Analyse des besoins fonctionnels.\",\"sousTaches\":[]},{\"id\":2,\"name\":\"Gestion des e-mails (envoyer, recevoir et traitement de texte).\",\"sousTaches\":[]},{\"id\":3,\"name\":\"Programmation des réponses automatiques pour les ordres non valide et aussi des mails de confirmation aux clients.\",\"sousTaches\":[]},{\"id\":4,\"name\":\"Génération des statistiques.\",\"sousTaches\":[]},{\"id\":5,\"name\":\"Extraction des données sous forme Pdf et Ecxel.\",\"sousTaches\":[]},{\"id\":6,\"name\":\"Création des tests unitaires.\",\"sousTaches\":[]}],\"urlGit\":[],\"urlWeb\":[]}]");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/portfolio/portfolio.component */ "kBmi");
/* harmony import */ var _components_son_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/son/about/about.component */ "cNgy");
/* harmony import */ var _components_son_projet_projet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/son/projet/projet.component */ "JTLt");
/* harmony import */ var _components_son_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/son/contact/contact.component */ "sgA1");
/* harmony import */ var _components_son_education_education_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/son/education/education.component */ "4ur4");
/* harmony import */ var _components_son_cv_cv_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/son/cv/cv.component */ "IaXX");
/* harmony import */ var _components_son_projet_details_projet_details_projet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/son/projet/details-projet/details-projet.component */ "BRDr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










const routes = [
    // { path: "login", component: LoginComponent },
    { path: '', redirectTo: '/portFolio', pathMatch: 'full' },
    {
        path: 'portFolio', component: _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_1__["PortfolioComponent"], children: [
            { path: '', component: _components_son_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
            { path: 'projet', component: _components_son_projet_projet_component__WEBPACK_IMPORTED_MODULE_3__["ProjetComponent"] },
            { path: 'detailProject/:id', component: _components_son_projet_details_projet_details_projet_component__WEBPACK_IMPORTED_MODULE_7__["DetailsProjetComponent"] },
            { path: 'contact', component: _components_son_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
            { path: 'education', component: _components_son_education_education_component__WEBPACK_IMPORTED_MODULE_5__["EducationComponent"] },
            { path: 'cv', component: _components_son_cv_cv_component__WEBPACK_IMPORTED_MODULE_6__["CvComponent"] },
        ],
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map