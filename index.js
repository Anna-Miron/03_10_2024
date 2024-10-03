console.log('Hello');

let userAge = 17;
let legalAge = 18;
let isLegal = userAge >= legalAge;

// if

if (isLegal) {
    console.log('User is over 18.');
}

// if - else

if (isLegal) {
    console.log('User is over 18.');
} else {
    console.log('User is under 18.');
}

//operator ternar

let userEnterPassword = 'pass123';
let correctPassword = '123pass';

// let accessGranted;

// //cum ar arata cu if else
// if (userEnterPassword === correctPassword) {
//     accessGranted = true;
// } else {
//     accessGranted = false;
// }
//console.log('User has access: ', accessGranted);

//cum arata cu operator ternar 

let accessMessage =userEnterPassword === correctPassword ? 'Access granted!' : 'Acccess denied!';
console.log('User has access: ', accessMessage);

//if .. else if .. else
let actualScore = 71;
let minimumScore = 50;
let averageScore = 70;
let maxScore = 100;

if (actualScore === 100) {
    console.log('Congratulations, your score is ideal !');
} else if ( actualScore < maxScore && actualScore > averageScore) {
    console.log ('Congratulations, your score is complete !');
} else if (actualScore <= avearageScore && actualScore >= minimumScore){
    console.log ('Congratulations, you have achieved the passing score !')
} else if (actualScore < minimumScore0) {
    console.log ('Sorry, your score is too low !');
} else {
    console.log('Your score could not be verified !');
}

// switch
// break - opreste executia

let  weekDay = 3;

switch(weekDay) {
    case 1:
        console.log('Today is Monday');
        break;
    case 2:
        console.log('Today is Tuesday');
        break;
    case 3:
        console.log('Today is Wednesday');
        break;
    case 4:
        console.log('Today is Tuesday');
        break;
    case 5:
        console.log('Today is Friday');
        break;
    case 6:
        console.log('Today is Satuday');
        break;
    case 7:
        console.log('Today is Sunday');
        break;  
    default:
        console.log('No specific day was found'); 
        break;                        
}

// while
// calcularea sumei totale dintr-un cos de cumparatauri folosind "while"

const cartItems = [
    {
        name: "Iphone 16",
        price: 1700,
        curency: "$",
        amount: 1
    },
    {
        name: "Protector sleeve",
        price: 100,
        curency: "$",
        amount: 3
    },
    {
        name: "Apple sticker",
        price: 21.99,
        curency: "$",
        amount: 4
    },
]

let totalPrice = 0;
let productIndex = 0;
while (productIndex < cartItems.length) {
    let product = cartItems[productIndex];
    totalPrice += product.price * product.amount;
    // totalPrice = totalPrice + product.price * product.amount;
    productIndex++;
    // productIndex = productIndex + 1;
}

console.log("Your cart total is: ", totalPrice, cartItems[0].curency);

// do - while

let n = 6;
let currentNUmber = 0;
do {
    currentNUmber++;
    console.log(currentNUmber);
} while (currentNUmber < n);

// for
// calcularea sumei totale dintr-un cos de cumparatauri folosind "for"
let totalPrice2 = 0;
for (i = 0; i < cartItems.length; i++) {
    let product = cartItems[i];
    totalPrice2 += product.price * product.amount;
}

console.log("Your cart total computed with 'for' is: ", totalPrice2, cartItems[0].curency);

// for of
// calcularea sumei totale dintr-un cos de cumparatauri folosind "for of"
let totalPrice3 = 0;
for (let product of cartItems) {
    totalPrice3 += product.amount * product.price;
}

console.log("Your cart total computed with 'for of' is: ", totalPrice3, cartItems[0].curency);

//for in 
let iphone = {
    name : 'Iphone 16',
    price : 1700,
    currency : '£',
    amount: 1
};

for (let key in iphone) {
    console.log('key: ', key);
}

//break

const numbers = [123, 43, 12, 12312312, 9];

let numberToCheck = 12;

for (let i = 0; i < numbers.length; i++) {
    console.log('i: ', i)
    if (numberToCheck === numbers[i]) {
        console.log('Number ', numberToCheck, 'is found at index', i);
        break;
    }
    console.log('i: ', i);
}

//continue
// calcularea sumei promelor n numere pare

let firstN = 10;
let sum = 0;
for (i = 1; i <= firstN; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    sum += i;

}
console.log('Suma primelor ', firstN, 'numere pare este: ', sum);
