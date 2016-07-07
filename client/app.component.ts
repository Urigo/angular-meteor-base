import 'reflect-metadata';
import {Component} from '@angular/core';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {DemoComponent} from "./imports/demo/demo.component";

@Component({
  selector: 'app',
  templateUrl: '/client/app.component.html',
  directives: [DemoComponent]
})
class Angular2MeteorBase {
  constructor() {

  }
}

bootstrap(Angular2MeteorBase);