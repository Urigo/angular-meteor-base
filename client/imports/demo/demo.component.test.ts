import {DemoComponent} from "./demo.component";
import {assert} from "chai";
import {TestComponentBuilder} from "@angular/compiler/testing";

describe('DemoComponent', () => {
  let demoComponentInstance : DemoComponent;

  beforeEach(() => {
    demoComponentInstance = new DemoComponent();
  });

  it('Should have a greeting string on the component', () => {
    assert.typeOf(demoComponentInstance.greeting, 'string', "Greeting should be a string!");
  });

  it('Should say hello to the component on the greeting string', () => {
    assert.equal(demoComponentInstance.greeting, 'Hello Demo Component!');
  });
});