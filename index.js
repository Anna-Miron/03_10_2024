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