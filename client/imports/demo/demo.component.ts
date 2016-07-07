import {Component} from '@angular/core';
import {MeteorComponent} from "angular2-meteor";

@Component({
  selector: 'demo',
  templateUrl: '/client/imports/demo/demo.component.html'
})
export class DemoComponent extends MeteorComponent {
  greeting : string;

  constructor() {
    super();

    this.greeting = "Hello Demo Component!"
  }
}
