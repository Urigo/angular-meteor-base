import { MongoObservable } from 'meteor-rxjs';
import { DemoDataObject } from '../models/demo-data-object';

export const DemoCollection = new MongoObservable.Collection<DemoDataObject>('demo-collection');