import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { FeatureXComponent } from './feature-x/feature-x.component'

@Component({
  selector: 'app',
  templateUrl: '/client/app.html',
  directives: [ FeatureXComponent ]
})
class Angular2MeteorBase {

}

bootstrap(Angular2MeteorBase);
