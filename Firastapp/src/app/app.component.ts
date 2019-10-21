import { Component, ChangeDetectorRef, ChangeDetectionStrategy, Input } from '@angular/core';
import { MyOwnServiceService } from './DI/my-own-service.service';






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Firastapp';
  counter = 0;
  constructor() {

  }



}
