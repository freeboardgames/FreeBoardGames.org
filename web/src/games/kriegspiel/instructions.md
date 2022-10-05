# Le Jeu de la Guerre

Try it on the [GitHub page](https://iamcxds.github.io/kriegspiel).

A WEB implementation of Guy Debord's A Game of War ([Le Jeu de la Guerre](https://www.wikiwand.com/fr/Le_Jeu_de_la_guerre_(livre))). Powered by [boardgame.io](https://boardgame.io/). The graphic is based on svg+emoji, with [Pico8's Palette](https://pico-8.fandom.com/wiki/Palette).

## About the Game

Here are some materials about the game and its history.

- [BGG page](https://boardgamegeek.com/boardgame/27323/le-jeu-de-la-guerre)
- [On Class Wargames](https://www.classwargames.net/?p=1636)
- [Kriegspiel](http://r-s-g.org/kriegspiel/about.php)

### Pieces and Strongholds

Why emoji? there is nothing more appropriate than emoji to illustrate the Spectacle: we are habiting from symbols to symbols that are produced by L'Autre. The big tech companies decide the meanings and the representations of those symbols, whether [🔫](https://emojipedia.org/pistol/) is a handgun or a harmless toy.

- Units
  - 💂 Infantry
  - 🏇 Cavalry
  - 🎉 Artillery
  - 🚀 Swift Artillery
  - 🚩 Relay
  - 🚚 Swift Relay
- Strongholds
  - 🎪 Arsenal
  - 🏰 Fortress
  - 🛣️ Mountain Pass
  - ⛰️ Mountain
- Battle related symbols
  - ⚔️ Attack
  - 🛡️ Defense
  - 🎯 Combat Range
  - 🐴 Move Speed
  - ⚡ Cavalry Charge
  - 🏃‍♂️ Retreat
  - 💀 Captured
  - 😅 Out of Supply
  - 💥 Battle

### Rules

Please check the [rules](http://r-s-g.org/kriegspiel/rules.php) here.

## The Other Implementation

There is another digital implementation: [Kriegspiel](http://r-s-g.org/kriegspiel/index.php), made by Alex Galloway. There are an [interview](https://www.youtube.com/watch?v=CGjt8po_y4I) and a [playthrough](https://www.youtube.com/watch?v=4l2M6vpWLAw) by Fred Serval. Unfortunately, it's only available on Mac and IOS, which inspires me to make a WEB version.

## The Ambiguities of Rules (my setting)

- Will enemy units block fire lines? i.e. can I attack back-line units? (no, yes)
- Will offline enemy units block communication lines? will the retreating unit do? (no, yes)
- Is failed retreat count as a move? (no)
  