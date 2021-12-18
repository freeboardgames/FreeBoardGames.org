## Important Commands:

`yarn run dev` builds and starts the **development** web server *and* the **boardgame.io** server (used for multiplayer games).  **Both servers will automatically load code changes.**

`yarn run prod` builds and starts the **production** web server.

`yarn run bgio` builds and starts the Boardgame.io server (used for multiplayer games).

`yarn run bgio:dev` builds and starts the **boardgame.io** server.  The **boardgame.io** server will automatically recompile/restart on file changes.

`yarn run pre` runs all tests, including linting/formatting, unit tests, and e2e/visual tests.  This command is run by Travis CI for all pull requests.  

`yarn run autopre` will automatically format and attempt to fix issues.  Then it will run the same tests as `pre` (mentioned above).  **You should run this command before committing changes.**

`yarn run e2e:buildandstartserver` will build and start an unoptimized production-like web server for e2e tests.

`yarn run cyp:run` will run e2e visual testing.

`yarn run test` will run all unit tests.  You may use Jest CLI options (such as --watch).

Jest CLI Options: https://jestjs.io/docs/en/cli.html
