


//arithmetic ope.

// let a = 20;  // add.
// let b = 10;
// result = a + b;
// console.log(result);

// result = a - b;  //subt.
// console.log(result);

// result = a * b;  //multi.
// console.log(result);

// result = a / b;  //divi.
// console.log(result);

// result = a % b;  //modul.
// console.log(result);

// let num1 = 2;
// let num2 = 9;
// console.log("this is result" + (num1 ** num2));

// console.log('=========================')

//assigement op.

// let A = 10;
// a += 10;
// console.log(a);

// let B = 10;
// B -= 10;
// console.log(B);

// let C = 10;
// C *= 10;
// console.log(C);

// let D = 10;
// D /= 10;
// console.log(D);

// let f = 54;
// f %= 22;
// console.log(f);

// console.log('=========================')

// comparing 

// let Z = 54;
// let X = 111;

// if (Z >= X) {
//     console.log('Z is bigger');
// }
// else if (Z < X) {
//     console.log('x is bigger');
// }
// else {
//     console.log('X is bigger');
// }

// console.log('=========================')

// if and else
// let myAge = -3;

// if (typeof myAge == 'number') {
//     if (myAge < 0.1) {
//         console.log('invalid age since it can be negative');
//     }
//     else if (myAge <= 1) {
//         console.log('you are an infant');
//     }
//     else if (myAge <= 3) {
//         console.log('you are toddler');
//     }
//     else if (myAge < 13) {
//         console.log('you are child');
//     }
//     else if (myAge < 20) {
//         console.log('you are teen');
//     }
//     else if (myAge < 51) {
//         console.log('you are adult');
//     }
//     else {
//         console.log('you are old');
//     }
// }
// else {
//     console.log('not a valid value in the age');
// }

// console.log('=========================');

// let rank = 10;
// if(typeof rank == 'number'){
//     if (rank< 0.1){
//         console.log('rank is invalid');
//     }
//     else if (rank<= 5){
//         console.log('rank is under top five ');
//     }
//     else if (rank>5 && rank<10){
//         console.log('rank is between 5 to 10 ');
//     }
//     else{
//         console.log('you are not selected ')
//     }
// }
// else {
//     console.log('rank is out of range ')
// }




// ==========================================================================================

// let age = true;

// if(age < 0.1){
//   console.log('Invalid age since it can not be negative')
// }else if(age <= 1){
//   console.log('you are an infant');
// } else if(age <= 3){
//   console.log('you are a toddler');
// } else if(age <= 12) {
//   console.log('you are a child');
// } else if (age <= 19){
//   console.log('you are a teen');
// } else if (age <= 50){
//   console.log('you are an adult');
// } else if(age > 50) {
//   console.log('you are an old');
// } else {
//   console.log('not a valid value in the age');
// }
// console.log('-------------------------------------------')
//---------------------
// const a = 100;
// const b = 20;
// if(a > b){
//   console.log('a is bigger', a);
// } else {
//   console.log('b is bigger', b);
// }

//-------
// let myAge1 = 50.9;
// console.log(typeof (typeof myAge));

// if(typeof myAge == 'number'){
//   if(myAge < 0.1){
//     console.log('Invalid age since it can not be negative')
//   }else if(myAge <= 1){
//     console.log('you are an infant');
//   } else if(myAge <= 3){
//     console.log('you are a toddler');
//   } else if(myAge < 13) {
//     console.log('you are a child');
//   } else if (myAge < 20){
//     console.log('you are a teen');
//   } else if (myAge < 51){
//     console.log('you are an adult');
//   } else {
//     console.log('you are an old');
//   }
// } else {
//   console.log('not a valid value in the age');
// }
// console.log('================================')

// ------
// console.log('output is 1 ',(true && true && false));
// console.log('output is 2 ',(false || true));

// console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
// let teen = 19;
// if(teen >= 13 && teen < 20) {
//   console.log('you can enter...')
// } else {
//   console.log('you are not allowed to enter...')
// }


// fizzbuzz
// console.log('______________________________')
// let number = 21;
// if(number%3===0 ){
// console.log('fizz')
// }
// else if (number%5===0 ){
//     console.log('buzz')
// }
// else if(number%3===0 && number % 5 ===0){
//     console.log('fizzbuzz');
// }
// else ('wrong value');
// console.log('______________________________')

// console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')

// even odd  1st method

let evenOdd = 5;
if(typeof evenOdd == 'number'){
  if(evenOdd%2===0){
    console.log('even')
  }
  else{
    console.log('odd')
  }
}
else{
  console.log('not a number')
}
console.log(evenOdd);


// even odd  2nd method function
function EvenOdd (num){
  console.log('input-->' , num)
  if(typeof num=='number'){
    if (num>0){
      console.log('it is negative')
    }
  else if(num%2===0)
  console.log('even')
  else{
    console.log('odd')
  }
}
else{
  console.log('not a number')
}
}

EvenOdd(-2);

// even odd  2nd method teenarray

function Evenodd (num1){
  console.log('input-->' , num1);
  if(typeof num1=='number'){
  const resultis=num1%2===0?'even':'odd';
  }
  else{
    console.log('not a number')
  }
  console.log('result is', resultis);

}
EvenOdd(4);


