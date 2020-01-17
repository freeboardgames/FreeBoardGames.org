## Commands to know:

* `yarn run dev` builds and starts the development **web** server.
* `yarn run prod` builds and starts the production **web** server.
* `yarn run bgio` builds and starts the **boardgame.io** server.
* `yarn run test` runs all **unit tests**.
* `yarn run cyp:buildandstartserver` builds and starts an unoptimized production server for use with Cypress visual testing.
* `yarn run cyp:run` runs Cypress visual tests.
* `yarn run autopre` will prepare your changes to be commit to git.  It will automatically format your code and then run the same tests as CI (or `yarn run pre`) would.
* `yarn run pre` will run the same tests that will be run by CI.
  * NOTE: Upon submission of a pull request, CI will automatically run various tests.  These tests must pass in order for changes to be accepted.

