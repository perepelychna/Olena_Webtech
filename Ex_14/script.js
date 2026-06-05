// ============================================================
// EXERCISE: Functions & Parameters
// ============================================================
//
// Open the browser console to see your results.
// (Right-click the page → Inspect → Console)
//
// ============================================================

// Formats a price with a currency symbol

function formatPrice(amount, currency) {
  return `${currency} ${amount.toFixed(2)}`;
}

console.log(formatPrice(9.9, "CHF")); // → CHF 9.90
console.log(formatPrice(4.5, "EUR")); // → EUR 4.50

// ============================================================

// TODO 1: call formatPrice() with a price of your choice
console.log(formatPrice(19.99, "CHF"));

// TODO 2: define a function called discount
//         it takes two parameters: price and percent
//         it should log the reduced price
//         EXAMPLE: discount(100, 20) → "Price after discount: CHF 80.00"

function discount(price, percent) {
  const reducedPrice = price - (price * (percent / 100));
  console.log(`Price after discount: CHF ${reducedPrice.toFixed(2)}`);
}

// TODO 3: call discount() with two different examples

discount(100, 20); // → Price after discount: CHF 80.00
discount(50, 10);  // → Price after discount: CHF 45.00


// ── Return values ────────────────────────────────────────────
//
// So far all functions just log something — they don't produce a value
// you can use elsewhere. A function with "return" hands a value back
// to whoever called it.
//
// EXAMPLE:
//   function double(n) {
//     return n * 2;
//   }
//   const result = double(5); // result is now 10
//   console.log(result);      // → 10
//
// ─────────────────────────────────────────────────────────────

// TODO 4: formatPrice was rewritten above to RETURN the formatted string
//         instead of logging it directly. All calls now use console.log().

console.log(formatPrice(9.9, 'CHF')); // → CHF 9.90


// ── Calling a function inside another function ───────────────
//
// Functions can call other functions. This lets you build
// bigger things out of smaller, reusable pieces.
//
// ─────────────────────────────────────────────────────────────

const cart = [
  { name: 'Tomatoes',  price: 2.5 },
  { name: 'Bread',     price: 4.2 },
  { name: 'Olive Oil', price: 8.9, soldOut: true },
];

// TODO 5: define a function called printCart
//         it takes the cart array as a parameter
//         it should loop over the items and for each one
//         call formatPrice() (from TODO 4) and log the result
//         together with the item name.
//         EXAMPLE output:
//           Tomatoes — CHF 2.50
//           Bread — CHF 4.20
//           Olive Oil — CHF 8.90
function printCart(cartArray) {
  for (let i = 0; i < cartArray.length; i++) {
    const item = cartArray[i];
    const formattedPrice = formatPrice(item.price, 'CHF');
    console.log(`${item.name} — ${formattedPrice}`);
  }
}

// TODO 6: call printCart with the cart array
printCart(cart);