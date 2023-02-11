import { Component, ViewChild } from '@angular/core';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  @ViewChild('nav') nav!: NavbarComponent;
  age!: string;

  constructor() {
    setInterval(() => {
      let ms = +new Date() - +new Date(2002, 9, 23);
      this.age = `${Math.floor(ms / 1000)}`;
    }, 1000);
  }

  public onScroll(event: any) {
    let y = document!.getElementById('box')!.scrollTop;
    if (y < 800) {
      this.nav.setActivePage(0);
    } else if (800 < y && y < 1600) {
      this.nav.setActivePage(1);
    } else if (1600 < y && y < 2400) {
      this.nav.setActivePage(2);
    } else if (2400 < y) {
      this.nav.setActivePage(3);
    }
  }
}
