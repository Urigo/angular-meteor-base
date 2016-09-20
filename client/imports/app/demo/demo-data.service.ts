import { Injectable } from '@angular/core';
import { ObservableCursor } from 'meteor-rxjs';

import { DemoDataObject } from '../../../../both/models/demo-data-object';
import { DemoCollection } from '../../../../both/collections/demo-collection';

@Injectable()
export class DemoDataService {
  private data : ObservableCursor<DemoDataObject>;

  constructor() {
    this.data = DemoCollection.find({});
  }

  public getData() : ObservableCursor<DemoDataObject> {
    return this.data;
  }
}
