
// named fumction

// multiply

function multiply (value1 , value2){
   const result = value1 * value2;
    return result;
}

const result1=multiply(25 , 50);
console.log(result1);

// add
function add (value3 , value4){
    const result = value3 + value4;
     return result;
 }
 
 const result2=add(25 , 50);
 console.log(result2);

// subtract
 function subtract (value5 , value6){
    const result = value5 - value6;
     return result;
 }
 
 const result3=subtract(25 , 50);
 console.log(result3);


// divide

 function divide (value7 , value8){
    const result = value7 / value8;
     return result;
 }
 
 const result4=divide(25 , 50);
 console.log(result4);


 console.log("===============================");

 function student(a){
    if(typeof a== 'number'){
        

     if(a<=10){
        console.log('rank1')
    }
    else if(a>=11 && a<=20){
        console.log('rank2')
    }
    else{
        console.log('nothing')
    }
}
else {
    console.log('not a number')
}
return 0;
   
 }
 const show1 = student ([])
 console.log(show1);


 // Higher order function
function greetings(callback) {
    const hello = 'Hello!! ' + callback();
    console.log(hello);
  }
  
  function getName() {
    return 'Pervez';
  }
  
  function getParentName() {
    return 'Nasim';
  }
  
  greetings(getName);
  greetings(getParentName);
 