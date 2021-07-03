import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {

  constructor(private observer: BreakpointObserver) { }

  // show et hide side compared width
  sideNav(): void{
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      // $('#wrapper').toggleClass('active');
    });
  }
}
