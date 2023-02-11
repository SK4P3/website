import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  @ViewChild('dot1') dot1!: ElementRef;
  @ViewChild('dot2') dot2!: ElementRef;
  @ViewChild('dot3') dot3!: ElementRef;
  @ViewChild('dot4') dot4!: ElementRef;

  dots: ElementRef[] = [];

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.dots = [this.dot1, this.dot2, this.dot3, this.dot4];
  }

  async scrollToAnchor(id: number) {
    this.viewportScroller.scrollToAnchor(id + '');
    this.setActivePage(id);
  }

  setActivePage(n: number) {
    this.dots.forEach(dot => {
      dot.nativeElement.className = "dot";
    });
    this.dots[n].nativeElement.className = "dotActive";
  }

}

