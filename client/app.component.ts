import 'reflect-metadata';
import {Component} from '@angular/core';
import {DemoComponent} from "./imports/demo/demo.component";

@Component({
  selector: 'app',
  templateUrl: '/client/app.component.html',
  directives: [DemoComponent]
})
export class Angular2MeteorBase {
  constructor() {

  }
}
