import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  age!: string;

  constructor() {
    setInterval(() => {
      let ms = +new Date() - +new Date(2002, 9, 23);
      this.age = `${Math.floor(ms / 1000)}`;
    }, 1000);
  }
}
