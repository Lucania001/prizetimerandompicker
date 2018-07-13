# prizetimerandompicker
Prize Time Random Picker Used for live draws

All valid tickets will be put into the tickets array. A valid ticket is one that had the correct answer as all competitions are skill based. If you don't see your ticket it's likely you got the answer wrong, please speak to prizetime reps to confirm.

It uses random JS to select a random number between 0 and ticket array length-1.

This random number is then used to select the winning ticket from the array

The winning ticket is then shown on the screen


Provable

Provable HTML aims to apply fairness to all

This does the following

1. A block future block height will be chosen for the draw
2. The hash of that block height is obtained
3. Characters from the hash are stripped and hash leading 0's (1st 20 digits are stripped)
4. This leaves us with a random number 
5. We do javasript 	Modulus on (random) % length which returns winning number
6. We select from array with winning number and this provides winning ticket

This can all be recreated yourself based on the block hash from the height announced