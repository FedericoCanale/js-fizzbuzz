/* Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/

/* start by creating a loop that goes from 1 to 100
for (let i = 1; i <= 100; i++) {
    console.log(i); checking if the loop works
if (i % 3 === 0 ) {
        console.log("Fizz");
}else if (i % 5 === 0 ){
        console.log("Buzz");
}else {
    console.log(i)
}   
}
Add moduls operator to stamp fizz and buzz for multiple of 3 and 5
*/
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i)
    }
}
//Add moduls operator to stamp fizz and buzz for multiple of 3 and 5 and FizzBuzz for multiples of both 5 and 3

/* Knowing that 15 is the first multiple of both numbers i can also do this:
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i)
    }
}
    */
