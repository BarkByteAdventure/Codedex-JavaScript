/*Here's the final project of the chapter!

We just got back from a trip to Asia, specifically China, Japan, and South Korea. When we got back we have some leftover cash:

    🇨🇳 Chinese yuan
    🇯🇵 Japanese yen
    🇰🇷 South Korean won

Create a currency.js program that starts with the amount you have in yuan, yen, and won and calculates the total in USD.

Make sure to Google the current exchange rates!

The output of the program should look like this:

What do you have left in yuan? 560
What do you have left in yen? 2455
What do you have left in won? 3280

105.5275

Cha-ching! Now you have the total in USD. 💰*/

let yuan = 560;
let yen = 2455;
let won = 3280;

let usd = yuan * 0.14 +yen * 0.0066 + won * 0.000074

console.log(usd)

