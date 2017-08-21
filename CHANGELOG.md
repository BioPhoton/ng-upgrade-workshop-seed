<a name="1.0.0"></a>
# 1.0.0 (2017-08-21)


### Refactoring to TypeScript

* **migrate FlightSearchComponent:** Upgrade the `flightService` and provide it in the `AppModule` ([b23099e](https://github.com/BioPhoton/ng-upgrade-workshop-seed/commit/b23099e))
* **refactoring to typeScript:**  Implement $onChanges and $onInit life cycle hooks ([3762a8b](https://github.com/BioPhoton/ng-upgrade-workshop-seed/commit/3762a8b))
* **refactoring to typeScript:**  Refactor the constructor function FlightSearchController to a class. ([4635f17](https://github.com/BioPhoton/ng-upgrade-workshop-seed/commit/4635f17))
* **refactoring to typeScript:**  Refactor the FlightCardDirective to a component ([5f80fdf](https://github.com/BioPhoton/ng-upgrade-workshop-seed/commit/5f80fdf))
* **refactoring to typeScript:**  Refactoring FlightSearchController to a component ([879d5a2](https://github.com/BioPhoton/ng-upgrade-workshop-seed/commit/879d5a2))
* **refactoring to typeScript:**  Register the FlightSearchController controller at the module in app.module.ts ([8d9ae61](https://github.com/BioPhoton/ng-upgrade-workshop-seed/commit/8d9ae61))
* **refactoring to typeScript:**  Remove import in app.ts as we now import in app.module.ts ([7bf142e](https://github.com/BioPhoton/ng-upgrade-workshop-seed/commit/7bf142e))
* **refactoring to typeScript:**  Rename files to align with Angular 2 conventions ([467e377](https://github.com/BioPhoton/ng-upgrade-workshop-seed/commit/467e377))
* **refactoring to typeScript:**  Rename files to align with Angular 2 conventions ([59cfaab](https://github.com/BioPhoton/ng-upgrade-workshop-seed/commit/59cfaab))
* **refactoring to typeScript:**  Rename files to align with Angular 2 conventions ([8954e54](https://github.com/BioPhoton/ng-upgrade-workshop-seed/commit/8954e54))
* **refactoring to typeScript:**  Switch to unidirectional data flow ([36b07ea](https://github.com/BioPhoton/ng-upgrade-workshop-seed/commit/36b07ea))
* **refactoring to typeScript:** Refactoring flight-search.js to TypeScript. Removed IIFE and angular registration. ([7404d41](https://github.com/BioPhoton/ng-upgrade-workshop-seed/commit/7404d41))


### Features

* **migrate FlightEditComponent:**  Create` migrated-flight-edit.component .ts` and html and migrate the ng1.x component ([538fd64](https://github.com/BioPhoton/ng-upgrade-workshop-seed/commit/538fd64))
* **migrate FlightEditComponent:** Adopt routes.ts to use MigratedFlightEditComponent and provide a controller to handle router params ([014168d](https://github.com/BioPhoton/ng-upgrade-workshop-seed/commit/014168d))
* **migrate FlightEditComponent:** use the `downgradeComponent` to convert `MigratedFlightEditComponent` to an ng1.x directive and adopt `AppModule` ([7e0a604](https://github.com/BioPhoton/ng-upgrade-workshop-seed/commit/7e0a604))
* **migrate FlightSearchComponent:** Add MigratedFlightSearchComponent to AppModule and downgrade it for ng1.x ([971968c](https://github.com/BioPhoton/ng-upgrade-workshop-seed/commit/971968c))
* **migrate FlightSearchComponent:** Adopt routes.ts to use MigratedFlightSearchComponent ([44f63b8](https://github.com/BioPhoton/ng-upgrade-workshop-seed/commit/44f63b8))
* **migrate FlightSearchComponent:** Implement AppModule and bootstrap over platformBrowserDynamic ([1cdb665](https://github.com/BioPhoton/ng-upgrade-workshop-seed/commit/1cdb665))
* **migrate FlightSearchComponent:** remove ng-app attribute from the body tag in you index.html ([b7a0933](https://github.com/BioPhoton/ng-upgrade-workshop-seed/commit/b7a0933))
* **migrate FlightSearchComponent:** upgrade FlightCardComponent to be used in angular ([c8ca6d8](https://github.com/BioPhoton/ng-upgrade-workshop-seed/commit/c8ca6d8))
* **migrate PassengerService:** create migrated-passenger.service.ts form passenger.service.ts and use the [@Injectable](https://github.com/Injectable)() decorator ([cc524b3](https://github.com/BioPhoton/ng-upgrade-workshop-seed/commit/cc524b3))
* **migrate PassengerService:** rename class to MigratedPassengerService and implement it in the AppModules providers ([a61ac29](https://github.com/BioPhoton/ng-upgrade-workshop-seed/commit/a61ac29))
* **migrate PassengerService:** replace $http with HttpClient ([8325301](https://github.com/BioPhoton/ng-upgrade-workshop-seed/commit/8325301))
* **migrate PassengerService:** replace find methods urlParams with a HttpParams Object, and apply toPromise operator to the observable request ([1bb1d49](https://github.com/BioPhoton/ng-upgrade-workshop-seed/commit/1bb1d49))
* **migrate TabComponent:** create migrated-flight-search component and template and migrate the ng1.x component ([f169a6e](https://github.com/BioPhoton/ng-upgrade-workshop-seed/commit/f169a6e))
* **migrate TabComponent:** implement components in migrated-flight-edit.component.html ([cc95f06](https://github.com/BioPhoton/ng-upgrade-workshop-seed/commit/cc95f06))
* **migrate TabComponent:** implement created MigratedTabsModule ([f693263](https://github.com/BioPhoton/ng-upgrade-workshop-seed/commit/f693263))
* **migrating FlightSearchComponent:**  Migrate the AngularJS component to Angular. Adopt to Angular Templatesyntax ([7261b54](https://github.com/BioPhoton/ng-upgrade-workshop-seed/commit/7261b54))
* **migrating FlightSearchComponent:** adopt template syntax ([c000c29](https://github.com/BioPhoton/ng-upgrade-workshop-seed/commit/c000c29))
* **using 2way binding in angular:** remove event binding and implement banana in a bo syntax for selectedItem ([f5b0a8a](https://github.com/BioPhoton/ng-upgrade-workshop-seed/commit/f5b0a8a))



