import { DemoCollection } from '../../../both/collections/demo-collection';
import { DemoDataObject } from '../../../both/models/demo-data-object';

export class Main {
  start(): void {
    this.initFakeData();
  }

  initFakeData(): void {
    if (DemoCollection.find({}).cursor.count() === 0) {
      const data: DemoDataObject[] = [{
        name: 'Dotan',
        age: 25
      }, {
        name: 'Liran',
        age: 26
      }, {
        name: 'Uri',
        age: 30
      }];
      
      data.forEach((obj: DemoDataObject) => {
        DemoCollection.insert(obj);
      });
    }
  }
}
