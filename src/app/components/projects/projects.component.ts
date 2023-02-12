import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { delay } from 'rxjs';

interface ProjectNode {
  prev: ProjectNode | undefined;
  src: string;
  next: ProjectNode | undefined;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  // rechnung, claudia, dr schuster

  gallery!: any;
  galleryBg!: any;

  projectNode1: ProjectNode = { prev: undefined, src: "assets/projects/karl.png", next: undefined }
  projectNode2: ProjectNode = { prev: undefined, src: "assets/projects/pewny.png", next: undefined }
  projectNode3: ProjectNode = { prev: undefined, src: "assets/projects/schuster.png", next: undefined }
  projectNode4: ProjectNode = { prev: undefined, src: "assets/projects/rechnung.png", next: undefined }
  projectNode5: ProjectNode = { prev: undefined, src: "assets/projects/sus.png", next: undefined }

  currentProject!: ProjectNode;

  constructor() {

    this.projectNode1.prev = this.projectNode5;
    this.projectNode1.next = this.projectNode2;

    this.projectNode2.prev = this.projectNode1;
    this.projectNode2.next = this.projectNode3;

    this.projectNode3.prev = this.projectNode2;
    this.projectNode3.next = this.projectNode4;

    this.projectNode4.prev = this.projectNode3;
    this.projectNode4.next = this.projectNode5;

    this.projectNode5.prev = this.projectNode4;
    this.projectNode5.next = this.projectNode1;

    this.currentProject = this.projectNode1;
  }
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.gallery = document.getElementById("gallery")!;
    this.galleryBg = document.getElementById("galleryBg")!;
  }

  moveRight() {
    this.gallery.style.transform = "translateX(-60vw)";
    this.gallery.style.transition = "all 2s";
    this.galleryBg.style.transform = "translateX(-100vw)";
    this.galleryBg.style.transition = "all 2s";

    setTimeout(() => {
      this.currentProject = this.currentProject.next!;
      this.gallery.style.transform = "translateX(0)";
      this.gallery.style.transition = "all 0s";
      this.galleryBg.style.transform = "translateX(0)";
      this.galleryBg.style.transition = "all 0s";
    }, 2000);
  }

  moveLeft() {
    this.gallery.style.transform = "translateX(60vw)";
    this.gallery.style.transition = "all 2s";
    this.galleryBg.style.transform = "translateX(100vw)";
    this.galleryBg.style.transition = "all 2s";

    setTimeout(() => {
      this.currentProject = this.currentProject.prev!;
      this.gallery.style.transform = "translateX(0)";
      this.gallery.style.transition = "all 0s";
      this.galleryBg.style.transform = "translateX(0)";
      this.galleryBg.style.transition = "all 0s";
    }, 2000);

  }


}
