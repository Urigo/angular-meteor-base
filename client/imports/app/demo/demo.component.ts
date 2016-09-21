import { Component, OnInit } from '@angular/core';
import { ObservableCursor } from 'meteor-rxjs';
import { Observable } from 'rxjs/Observable';

import { DemoDataService } from './demo-data.service';
import { DemoDataObject } from '../../../../both/models/demo-data-object';

import template from './demo.component.html';

@Component({
  selector: 'demo',
  template
})
export class DemoComponent implements OnInit {
  greeting: string;
  data: Observable<DemoDataObject[]>;

  constructor(private demoDataService: DemoDataService) {
    this.greeting = 'Hello Demo Component!';
  }

  ngOnInit() {
    this.data = this.demoDataService.getData().zone();
  }
}
