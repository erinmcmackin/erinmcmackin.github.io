# cake-clash

# Installation instructions
- Open a browser
- Enter the following address into the address bar: https://erinmcmackin.github.io/
- Hit enter and enjoy!

# About
Cake Clash is a two-player board game application where the players compete to get through a grocery store to make it to the last cake available at the bakery.

# Technology used:
- HTML
- CSS
- JavaScript
- jQuery

# Approach
Using the technologies listed above, I created a Chutes N Ladders -inspired board game application to be played in the browser. The board was created in a for loop, and all player interaction is performed through buttons and modals via DOM manipulation.

Players move by clicking the roll button, which generates a random number from one to five.

The game can be reset and started over again at any time with the reset button.

Certain spots on the board can either propel the player forward, or kick her back. The ones that kick the player back randomly choose one of three delays with an assigned number of spaces to move back.

When a player (while progressing forward) lands on the same space as the other player, the player is prompted to either knock a display down to try to slow down the opponent, or smile awkwardly and do nothing. If the knock display down option is chosen, a random number is generated to produce a 60% chance of tripping the opponent. If the opponent is tripped, the original player gets to take her turn.

A player wins by reaching the cake (the end of the board), first. They can overshoot the ending square.

# Future Development
- An option to play the computer
- Adapt for mobile
- Improve appearance
- More images for the modals
