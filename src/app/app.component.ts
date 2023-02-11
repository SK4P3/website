import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'alex-website';

  constructor() {
    localStorage.setItem('cookie 1', 'well done you found 1!')
  }

}
