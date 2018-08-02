
# Provable

Provable HTML aims to apply fairness to all

This does the following

1. A future block height will be chosen for the draw
2. The hash of that block height is obtained
3. Leading 0's are stripped from the Hash
4. This leaves us with a random number 
5. We do javasript 	Modulus on (random) % length which returns winning number
6. We select from array with winning number and this provides winning ticket

This can all be recreated yourself based on the block hash from the height announced