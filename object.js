const person = {
    name:'pradeep yadav',
    age:18,
    class:8,
    address:{
        village:'rampur',
        post:'aswaniyan',
        dist:'azm'
    },
    hobbies:[
        {game:'cricket'},
        {subject:'history'}
    ]
        
};
console.log (person);

const person1 = {
    name:'Pawan',
    age:30,
    isMale: true,
    height: {
      value:175,
      unit:'centimeter',
      abUnit:'cm'
    },
    address: {
      permanent: {
        houseNo:'37A',
        state: 'Delhi',
        country: 'India',
        pincode: 110062,
        nearBy:'saket'
      },
      office: {}
    },
    children:[
      {name:'tinku', age: 5},
      {name:'twinkal', age: 2}
    ]
  }


  //find any value-------------by dot----------------

//   console.log('name is', person.name)
// console.log('height is', person.height.value)
// console.log('address is', person.address.permanent);
// console.log('Number of children', person.children.length)
// console.log('First children name', person.children[0].name)
// console.log('First children age', person.children[0].age)

console.log('-----------------by array--------------------')

// const keyName = 'gender'
// console.log(keyName +' is', person[keyName])
// console.log('height is', person['height']['value'])
// console.log('address is', person['address']['permanent']);
// console.log('Number of children', person['children']['length'])
// console.log('First children name', person['children'][0]['name'])
// console.log('First children age', person['children'][0]['age'])