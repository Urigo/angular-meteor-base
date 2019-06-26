# Angular-Meteor Boilerplate

## Usage

Since Meteor v1.4 you can use one command to create a working Angular2 app based on this boilerplate:

```
meteor create --example angular-boilerplate
```

This will tell you to clone this repo though, so sinc you're here you might as well do git clone immediately:

```
git clone https://github.com/Urigo/angular-meteor-base.git
```

## NPM Scripts

This boilerplate comes with predefined NPM scripts, defined in `package.json`:

- `$ npm run start` - Run the Meteor application.
- `$ npm run start:prod` - Run the Meteor application in production mode.
- `$ npm run build` - Creates a Meteor build version under `./build/` directory.
- `$ npm run clear` - Resets Meteor's cache and clears the MongoDB collections.
- `$ npm run meteor:update` - Updates Meteor's version and it's dependencies.
- `$ npm run test` - Executes Meteor in test mode with Mocha.
- `$ npm run test:ci` - Executes Meteor in test mode with Mocha for CI (run once).

## Boilerplate Contents

This boilerplate contains the basics that requires to quick start with Angular2-Meteor application.

This package contains:

- TypeScript support (with `@types`) and Angular 2 compilers for Meteor
- Angular-Meteor
- Angular (core, common, compiler, platform, router, forms)
- SASS, LESS, CSS support (Also support styles encapsulation for Angular 2)
- Testing framework with Mocha and Chai
- [Meteor-RxJS](http://angular-meteor.com/meteor-rxjs/) support and usage


### Folder Structure

The folder structure is a mix between [Angular 2 recommendation](https://johnpapa.net/angular-2-styles/) and [Meteor 1.3 recommendation](https://guide.meteor.com/structure.html).

### Client

The `client` folder contains single TypeScript (`.ts`) file which is the main file (`/client/app.component.ts`), and bootstrap's the Angular application.

The main component uses HTML template and SASS file.

The `index.html` file is the main HTML which loads the application by using the main component selector (`<app>`).

All the other client files are under `client/imports` and organized by the context of the components (in our example, the context is `demo`).


### Server

The `server` folder contain single TypeScript (`.ts`) file which is the main file (`/server/main.ts`), and creates the main server instance, and the starts it.

All other server files should be located under `/server/imports`.

### Common

Example for common files in our app, is the MongoDB collection we create - it located under `/both/demo-collection.ts` and it can be imported from both client and server code.

### Testing

The testing environment in this boilerplate based on [Meteor recommendation](https://guide.meteor.com/testing.html), and uses Mocha as testing framework along with Chai for assertion.

