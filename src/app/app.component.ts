import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-nested-components';
  // tslint:disable-next-line:no-inferrable-types
  PageHeader: string = 'Employee Details ( Declared in app.component.ts)';
}
