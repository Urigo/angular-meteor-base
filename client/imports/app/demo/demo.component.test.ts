// chai uses as asset library
import { assert } from 'chai';

// Angular 2 tests imports
import { TestBed } from "@angular/core/testing";

// Project imports
import { DemoComponent } from './demo.component';
import { Demo } from "../../../../both/models/demo.model";

describe('DemoComponent', () => {
  let demoComponentInstance:DemoComponent;
  let demoComponentElement;
  let componentFixture;

  let mockDataArray = [
    <Demo>{
      name: 'Test',
      age: 10
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoComponent ],
    });

    componentFixture = TestBed.createComponent(DemoComponent);
    demoComponentInstance = componentFixture.componentInstance;
  });

  describe('@Component instance', () => {
    it('Should have a greeting string on the component', () => {
      assert.typeOf(demoComponentInstance.greeting, 'string', 'Greeting should be a string!');
    });

    it('Should say hello to the component on the greeting string', () => {
      assert.equal(demoComponentInstance.greeting, 'Hello Demo Component!');
    });

    it('Should have an array (from the mock) of the instance', () => {
      assert.typeOf(demoComponentInstance.data, 'array');
    });

    it('Should have an items in the array', () => {
      assert.typeOf(demoComponentInstance.data, 'array');
      assert.equal((<Array>demoComponentInstance.data).length, 1);
    });
  });

  describe('@Component view', () => {
    it('Should print the greeting to the screen', () => {
      assert.include(demoComponentElement.innerHTML, 'Hello Demo Component');
    });

    it('Should change the greeting when it changes', () => {
      assert.include(demoComponentElement.innerHTML, 'Hello Demo Component');
      demoComponentInstance.greeting = 'New Test Greeting';
      componentFixture.detectChanges();
      assert.include(demoComponentElement.innerHTML, 'New Test Greeting');
    });

    it('Should display a list of items in the screen', () => {
      assert.isNotNull(demoComponentElement.querySelector('ul'));
    });

    it('Should add item to the list when modifying the data in the service', () => {
      assert.equal(demoComponentElement.querySelectorAll('li').length, 1);

      mockDataArray.push({
        name: 'Dotan',
        age: 20
      });

      componentFixture.detectChanges();

      assert.equal(demoComponentElement.querySelectorAll('li').length, 2);
    });
  });
});
