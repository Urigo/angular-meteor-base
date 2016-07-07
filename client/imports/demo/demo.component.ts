import {Component} from '@angular/core';
import {MeteorComponent} from "angular2-meteor";
import {DemoDataService} from "./demo-data.service";

@Component({
  selector: 'demo',
  templateUrl: '/client/imports/demo/demo.component.html',
  providers: [DemoDataService]
})
export class DemoComponent extends MeteorComponent {
  greeting : string;

  constructor(private demoDataService: DemoDataService) {
    super();

    this.greeting = "Hello Demo Component!";
  }
  
  getData() {
    return this.demoDataService.getData();
  }
}
