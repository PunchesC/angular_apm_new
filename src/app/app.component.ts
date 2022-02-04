import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `<div>
  <h1>{{pageTitle}}</h1>
  <pm-home></pm-home>
  </div>`
 
})
export class AppComponent {
 pageTitle: string = 'APM 1.0'
}
