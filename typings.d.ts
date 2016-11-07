/// <reference types="zone.js" />
/// <reference types="meteor-typings" />
/// <reference types="@types/underscore" />
/// <reference types="@types/chai" />
/// <reference types="@types/mocha" />

declare module "*.html" {
  const template: string;
  export default template;
}

declare module "*.scss" {
  const style: string;
  export default style;
}

declare module "*.less" {
  const style: string;
  export default style;
}

declare module "*.css" {
  const style: string;
  export default style;
}

declare module "*.sass" {
  const style: string;
  export default style;
}

declare module "meteor/hwillson:stub-collections" {
  import { Mongo } from "meteor/mongo";

  interface IStubCollections {
    stub(collection: Mongo.Collection);
    restore();
  }

  const StubCollections: IStubCollections;

  export default StubCollections;
}

declare module "chai-spies" {
  const chaiSpies: (chai: any, utils: any) => void;

  export = chaiSpies;
}

interface SpyCalledWith extends Chai.Assertion {
  (...args: any[]): void;
  exactly(...args: any[]): void;
}

interface SpyCalledAlways extends Chai.Assertion {
  with: SpyCalledWith;
}

interface SpyCalledAt {
  most(n: number): void;
  least(n: number): void;
}

interface SpyCalled {
  (n?: number): void;
  /**
   * Assert that a spy has been called exactly once
   *
   * @api public
   */
  once: any;
  /**
   * Assert that a spy has been called exactly twice.
   *
   * @api public
   */
  twice: any;
  /**
   * Assert that a spy has been called exactly `n` times.
   *
   * @param {Number} n times
   * @api public
   */
  exactly(n: number): void;
  with: SpyCalledWith;
  /**
   * Assert that a spy has been called `n` or more times.
   *
   * @param {Number} n times
   * @api public
   */
  min(n: number): void;
  /**
   * Assert that a spy has been called `n` or fewer times.
   *
   * @param {Number} n times
   * @api public
   */
  max(n: number): void;
  at: SpyCalledAt;
  above(n: number): void;
  /**
   * Assert that a spy has been called more than `n` times.
   *
   * @param {Number} n times
   * @api public
   */
  gt(n: number): void;
  below(n: number): void;
  /**
   * Assert that a spy has been called less than `n` times.
   *
   * @param {Number} n times
   * @api public
   */
  lt(n: number): void;
}

declare namespace Chai {
  interface ChaiStatic {
    spy(): any;
  }

  interface Assertion {
    called: SpyCalled;
    always: SpyCalledAlways;
  }
}