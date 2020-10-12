#### Instructions (WIP)

Create or join a game from the lobby. Local play is currently supported.

Private cards appear as card backs to other players. In local play WIP the containers for North and South are dealt 'faced' cards.  The deal leaves a standard cribbage hand with 'held' cards exposed.  The deck is left on the table awaiting 'Cut for Turn'. There are six visible containers (top to bottom): south.held, south.played, crib, north.played, deck/turn, north.held,

The turns, stages, and phases, are governed by game state. In WIP version the active player is rotated using the debug console.



##### Cribbage on Card Table
Card table is intended to simulate play for card enthusiasts. It provides abstractions for cards, table, and scoring, in a remote gaming experience.  The rules are enforced by the players.  There is no AI governing play.  In the current Version the debug console is used to navigate game activities. Only 'Local' play mode has been tested. Players alternate plays in a set flows. Score is kept on a board with pegs. Game is 121 points.

A cribbage game on 'Card Table' is played using the following flow:

1. The Deal - Console function ```deal() key 'e'``` requires no arguments; after clearing previous game state shuffles deck and deals six cards to north and south players. In cribbage no cut is offered (or accepted) prior to deal. Traditionally this is described by "It's a gentleman's game" and on some tables it is penalized for offering or accepting.

2. Layaway to Crib - Console function ```putToCrib(index) key 'f'``` takes a card's zero based index in the active players 'held' container and places it in the 'played' container for active player. There is no order for crib, although WIP requires manual player rotation. When both players 'lay to crib' play moves to the 'Cut for Turn' step.

3. Cut for Turn - Console function ```cutShowTurn(index) - key 'h'``` After both players lay to crib, the non-dealer cuts the deck offering the new top card as the "turn". The turn is used in calculations during counting (a later phase).  Dealer scores 2pts (knobs) for receiving a jack as turn card.

4. The Play - Console function ```play(index) key g``` Places the indexed card from 'held' container to the 'played' card container. Players alternate playing cards counting up towards 31.  When a player has no legal play for their turn (because playing a card count would exceed 31) they announce "GO" to their opponent, any remaining legal cards held by opponent are played on the run to 31. Players score points during play by 'pegging' points for play groups which describe: 15s (sums totalling 15), combinations of 
'adjacent' pairs or runs, and reaching the highest total not passing 31.  The final card for the play is 1 pt ("a go") or 2 pts if summing 31 exactly. No scoring mechanism in current version (traditionally it's a board with pegs).

5. The Count - The count is performed in the following order: non-dealer, dealer-hand, dealer-crib. Non-dealer counts first describing their score by counting aloud ( e.g. 15-2, 15-4, pair is 6, pair is 8, a run of 3 for 9, flush of 4 for 13).  Their total amount is pegged by advancing their back peg by the score obtained beyond their forward peg on the cribbage board.  The crib is counted by invoking ```flipCrib() key 'j'``` on the debug console.

6. The Win - A player "goes out" by reaching the score of 121. During any phase a game may end without resolving the remaining phases.  The point difference is doubled (skunk) when beaten by 31 points, quadrupled (double-skunk) when beaten by 61 points.

##### Notes

There are no hands which generate a count of 19 in cribbage -- when a player has no points to score they announce '19' as their score meaning 0. 

When a player misses points they are due either at the turn, the play, or the count, their opponent may announce "muggins" and claim the missed points for their own score. A player is said to be "mugged".  

The highest counting hand in Cribbage is 29 points -- '29' is frequently included iconography depicted on boards and equipment. The hand 29 is composed of cards containing 3x5s, and the Jack of the Turn Suit. The turn is the remaining 5. It is scored:

        8 permutations of 15s "15-16";
        6 pairs of 5s "12 Fives for 28";
        "knobs in hand for 29";

        "I have 15-16, 12 Fives for 28, and knobs makes 29"

This hand is rare because you must be dealt 6 cards with 4 matching 5-5-5-Jt, and then your opponent cuts you a turn of 5t (roughly one in 200K). Scholars vary widely on the impact of external factors skewing this number (e.g. defensive play at end-play and crib choices).

##### General Cribbage Play

(1) The Deal from 52 standard playing cards dealer is chosen by drawing low card in turns from deck. In the two player version each player is dealt 6 cards clockwise with the 'eldest' hand belonging to first opponent on the left (clockwise). 

(2) The Discard to Crib, where each player discards equal numbers of face down cards to make a 'crib' of 4, effectively dividing 12 cards dealt into 3 groups of 4: your opponents hand (4 cards), dealers hand (4 cards),and the crib(4 cards, two opponent, two dealers). The crib is a private area where the cards are kept in secrecy until they are used in the final stage.  

(3) The Cut and Turn, non-dealer cuts a card which the dealer pulls from the top of the cut.  New top card is turned face up and designated 'The Turn' a card which is used in later stages to combine in scoring groups. The Turn is the first possible scoring play of any hand: 2 points are awarded the dealer for a turn of a Jack ('knobs'). 

(4) During 'The Play' players are counting sums of cards played; the play starts with non-dealer and alternates between players until a player signifies 'GO' when they cannot play legally, and the remaining player continues play until they have played to a sum of 31. If the final sum is less than 31 it is deemed a 'Go' worth 1pt.  If the sum is exactly 31, the player who played the card is awarded 2pts. If scorable combinations are created during play they are scored when the player announces the point value when laying down the card.

(5) And finally 'The Count', where 'The Turn' is combined with the (5a) The 4 cards in the opponents hand, (5b) the 4 in the dealers hand, and finally (5c) the 4 in the crib, to make specific groupings that score.

