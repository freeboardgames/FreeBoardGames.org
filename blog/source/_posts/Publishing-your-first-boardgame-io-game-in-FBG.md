---
title: 'Publishing your first boardgame.io game in FBG'
date: 2019-06-16 21:33:17
tags:
author: Flamecoals
---

So you created (or want to create) an awesome new game using the [boardgame.io](https://boardgame.io) framework. Even though you probably told some friends and played with them, it might still be difficult to get people to know about your game and reach its full potential. Fear not, FreeBoardGames.org (FBG)'s purpose is to get your game to more people by creating a FOSS community of developers and players.

In this tutorial you are going to see how easy it is to get your game up and running in [FreeBoardGames.org](https://www.freeboardgame.org). We are going to create a game for the platform and very quickly have it up and running.

# Setting up the environment

First, fork the [FreeBoardGame repo](https://github.com/freeboardgames/FreeBoardGames.org) on GitHub:

![fork button image](https://github-images.s3.amazonaws.com/help/bootcamp/Bootcamp-Fork.png)

Then, `git clone` your new forked repo, and run `cd web` and `yarn install` to install all dependencies. After everything is downloaded, run `yarn run dev` to run FBG on your machine locally, it should be available at [http://localhost:8000](http://localhost:3000/).

You are all set to start coding your new game!

# Bootstraping your game

We keep most of the game code in their own folder. The first thing we have to do is create a new folder for our new game. We can go ahead and run `mkdir src/games/foobar`.

Now, let's create its first configuration file, `src/games/foobar/index.ts`:

```typescript
const Thumbnail = require('./media/thumbnail.png?lqip-colors');
import { GameMode } from '../../components/App/Game/GameModePicker';
import { IGameDef } from '../../games';
import instructions from './instructions.md';

export const fooBarGameDef: IGameDef = {
  code: 'foobar',
  name: 'Foo Bar Game',
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.OnlineFriend }, { mode: GameMode.LocalFriend }],
  minPlayers: 2,
  maxPlayers: 2,
  description: 'Classic game of foo and bar!',
  descriptionTag: `Play Foo Bar and have lots of fun!`,
  instructions: {
    videoId: 'yFrAN-LFZRU',
    text: instructions,
  },
  config: () => import('./config'),
};
```

Explaining what is going on here:

- _code_: Internal code we are going to use for this game, must match the folder name.
- _name_: Name that will show up to users.
- _imageURL_: Thumbnail used across the app on the home page, game page and lobby. Generally a screenshot of the game, should be 500x250 pixels.
- _modes_: Each game mode will represent a card in the game page ([check chess here](https://www.freeboardgames.org/play/chess)).
  - `GameMode.AI`: Makes the game available offline, allowing users to play single player matches against the computer (more configuration is needed).
  - `GameMode.OnlineFriend`: Allows users to invite friends to play the game online. Users are going to need internet to connect to the server.
  - `GameMode.LocalFriend`: Makes the game available offline, and players can alternate using the same device to play the game.
- _minPlayers_ and _maxPlayers_: Count of min and max players allowed for the game.
- _description_: Short description of the game that will show on the home page card.
- _descriptionTag_: HTML tag description of the game, specially important for crawlers that can bring organic traffic to your game.
- _instructions_:
  - `videoId` is the YouTube video id with a tutorial for the game.
  - `text` allows you to import a markdown with written instructions. Also important for web search crawlers.
- _config_: This is a function that returns your boardgame.io config. It needs to be a separate file because this will only load all extra resources needed (UI, game logic, etc) if the user wants to play your game.

In `src/games/foobar/media/thumbnail.png`, place:
![500x250 placeholder](http://www.biotoday.bio/wp-content/uploads/sites/2/2016/01/500x250.png)

In `src/games/foobar/instructions.md`, write:

```markdown
Instructions for your game.
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
```

## Boardgame.io config

Boardgame.io games have two main pieces, its rules (aka `Game`) and the UI (aka `Board`). We need to provide this in the bg.io specific configuration, `src/games/foobar/config.ts`:

```typescript
import { IGameConfig } from '../index';
import { FooBarGame } from './game';
import { Board } from './board';

const config: IGameConfig = {
  bgioGame: FooBarGame,
  bgioBoard: Board,
  debug: true,
};

export default config;
```

These two pieces are where the bulk of the game code will live. Let's use placeholders for now so you can see how everything ties together. In `src/games/foobar/board.tsx`:

```typescript
import * as React from 'react';
import { IGameArgs } from '../../components/App/Game/GameBoardWrapper';
import { GameLayout } from '../../components/App/Game/GameLayout';
import { Ctx } from 'boardgame.io';
import { IG } from './game';

interface IBoardProps {
  G: IG;
  ctx: IGameCtx;
  moves: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

export class Board extends React.Component<IBoardProps, {}> {
  render() {
    return (
      <GameLayout
        gameArgs={this.props.gameArgs}> 
        <h2>Hello world!</h2>
        <pre>{JSON.stringify(this.props.gameArgs, null, 2)}</pre>
      </GameLayout>
    );
  }
}
```

The file above will be responsible to translate the game state to what the user sees. Now we only need to create a file for your game rules, which boardgame.io calls `Game`. In `src/games/foobar/game.ts`:

```typescript
import { IGameCtx } from 'boardgame.io/core';

export interface IG {
  count: number;
}

export const FooBarGame = {
  name: 'foobar',

  setup: () => ({ count: 0 }),

  moves: {
    plusone(G: IG) {
      return { count: G.count + 1 };
    },
  },

  flow: {
    movesPerTurn: 1,
  },
};
```

## Finishing everything

Now you have a skeleton of a game in your new folder, but you still need to add the new game to the home page and to the server. This is easily done with three lines of code. Add the following to the first lines of `src/games/index.ts`:

```typescript
import { fooBarGameDef } from './foobar';
```

Then, in the same file, under `GAMES_MAP`, add `foobar: fooBarGameDef,` and under `GAMES_LIST`, add `GAMES_MAP.foobar,`.

Done! You can run now `yarn run dev` and you should be able to see your new game on the home page! It will have two game modes, one for playing with friends locally and another for playing with friends over the internet. Because we have `debug: true` in `config.ts`, you will be able to see the boardgame.io debug menu.

There are great boardgame.io [tutorials and documentation](https://boardgame.io/#/tutorial); you can follow any of them to get started on how to create your first game. Also, feel free to look into other FBG games and see how they are implemented. Finally, if you get stuck with some issue, send a message to our comunity! We will do our best to help you out :).

When you have your game somewhat working, feel free to open a PR to our GitHub repo. If it is still a work-in-progress, just add "WIP" to the title. We can help you out and review your implementation when you have it working.
