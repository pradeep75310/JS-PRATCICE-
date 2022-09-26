// TODO: students list with name, and hobbies, then find index based on hobby

// const student = [
//     {
//         name: 'ravi',
//         class: 8,
//         father: 'Satish',
//         address: {
//             village: 'madangir',
//             dist: 'south_delhi',
//             pincode: 110062,
//             state: 'delhi'
//         },
//         hobbies: ['cricket', 'football', 'basketball']
//     },
//     {
//         name: 'kiran',
//         class: 9,
//         father: 'amit',
//         address: {
//             town: 'sangamvihar',
//             dist: 'south_delhi',  // without _ show error
//             pincode: 110080,
//             state: 'delhi'

//         },
//         hobbies: ['cricket', 'chess', 'hockey']
//     },
//     {
//         name: 'Raju',
//         class: 12,
//         father: 'naveen',
//         address: {
//             town: 'kotla',
//             dist: 'south_delhi',  // without _ show error
//             pincode: 110003,
//             state: 'delhi'

//         },
//         hobbies: ['cricket', 'swimming', 'study']
//     },
//     {
//         name: 'Sunny',
//         class: 11,
//         father: 'parveen',
//         address: {
//             town: 'lajpat_nagar',
//             dist: 'south_delhi',  // without _ show error
//             pincode: 110024,
//             state: 'delhi'

//         },
//         hobbies: ['eating']
//     }
// ]
// function matchname(check) {
//     console.log('checking', check)
//     const hobbiesArray = check.hobbies
//     if (hobbiesArray.indexOf('eating') != -1) {
//         return true;
//     }
//     // return check.name === 'ravi'
//     return false;
// }

// const index = student.findIndex(matchname);
// console.log('result', index);






// TODO: use findIndex with arrayOfArray

// const arrayArray = [[5, 6, 7, 8, 9], [0, 1, 2, 3, 4]]
// function Array(val) {
//     console.log('value', val)
//     const helloArray = val.arrayArray
//     if (helloArray.indexOf(6) != -1) {
//         return true;
//     }
//     return false;
// }
// const IndexOf6=arrayArray.indexOf(6)
// console.log('IndexOf6' , IndexOf6)

// const Result = arrayArray.findIndex(Array);
// console.log('Result--->', Result)








// 2nd program

const CompanyEmployee = [{
    name: 'amit',
    age: 28,
    designation: 'supervisor',
    Sallary: 28000,
    gender: 'male',
    Mobile_no: 9956587459,
    address: {
        Town: 'Kota',
        locality: 'icici bank',
        district: 'jaipur',
        state: 'Rajsthan',
        Pincode: 340032

    },
    work: ['machine checking', 'staf corredition'],
    joining_year: 2002
},
{
    name: 'kajal',
    age: 26,
    designation: 'manager',
    Sallary: 48000,
    gender: 'female',
    Mobile_no: 9956587460,
    address: {
        Town: 'ITO',
        locality: 'Rbl bank',
        district: 'east delhi',
        state: 'Delhi',
        Pincode: 110002

    },
    work: ['attand Metting', 'staf corredition'],
    joining_year: 2005
},
{
    name: 'Raj',
    age: 38,
    designation: 'labour',
    Sallary: 18000,
    gender: 'male',
    Mobile_no: 9956875412,
    address: {
        Town: 'Rampur',
        locality: 'LNP collage',
        district: 'Azamgarh',
        state: 'Uttar Pradesh',
        Pincode: 276301

    },
    work: ['loading', 'unloading'],
    joining_year: 2006
},
{
    name: 'Raju',
    age: 42,
    designation: 'labour',
    Sallary: 18000,
    gender: 'male',
    Mobile_no: 9956875413,
    address: {
        Town: 'Rajepur',
        locality: 'LNP collage',
        district: 'Azamgarh',
        state: 'Uttar Pradesh',
        Pincode: 276301

    },
    work: ['loading', 'unloading'],
    joining_year: 2002
},
{
    name: 'Baba',
    age: 48,
    designation: 'labour',
    Sallary: 18000,
    gender: 'male',
    Mobile_no: 9956875414,
    address: {
        Town: 'Rampur',
        locality: 'LNP collage',
        district: 'Azamgarh',
        state: 'Uttar Pradesh',
        Pincode: 276301

    },
    work: ['loading', 'unloading'],
    joining_year: 2002
},
{
    name: 'Karan',
    age: 38,
    designation: 'labour',
    Sallary: 18000,
    gender: 'male',
    Mobile_no: 9956875415,
    address: {
        Town: 'gosayeeganj',
        locality: 'LNP collage',
        district: 'Azamgarh',
        state: 'Uttar Pradesh',
        Pincode: 276301

    },
    work: ['loading', 'unloading'],
    joining_year: 2002
},
{
    name: 'Archna',
    age: 27,
    designation: 'supervisor',
    Sallary: 28000,
    gender: 'female',
    Mobile_no: 9956580025,
    address: {
        Town: 'Deoli',
        locality: 'CISF camp',
        district: 'jaipur',
        state: 'Rajsthan',
        Pincode: 340032

    },
    work: ['attand Metting', 'staf corredition'],
    joining_year: 2005
},

]

function EmployeeList(Val) {
    console.log('value', Val)
    const EmployeeSpecificList = Val.work
    if (EmployeeSpecificList.indexOf('loading') != -1) {
        return true;
    }
    return false;
}
function IsFemale(onlyfemale) {
    if (onlyfemale.gender == 'female') {
        return true;
    }
    return false;
}
function CheckJoiningYear(Joiningperiod) {
    if (Joiningperiod.joining_year == 2002) {
        return true;
    }
    return false;

}

function CheckAge(Emp) {
    if (typeof Emp.age == 'number') {
        if (Emp.age == 48) {
            return true;
        }
        else{
            console.log('not match')
        }

    }
    
    return false;
}

const Resultfemale=CompanyEmployee.filter(IsFemale);
console.log('onle female' ,Resultfemale )

const ResultComapny = CompanyEmployee.findIndex(EmployeeList);
console.log('Company List' ,ResultComapny )

// const JoiningTime=CompanyEmployee.filter(CheckJoiningYear);
// console.log('joning time check' ,JoiningTime )

// const AgeCheck = CompanyEmployee.filter(CheckAge);
// console.log('Age', AgeCheck)

const person=[
    {
        name:'raju',
        age:25,
        location:'uttam nagar',
        gender:'male',
        // children:[{name:'tanuja',age:16}]
        children:['tanuja']
    },
    {
        name:'rajni',
        age:35,
        location:'uttam nagar',
        gender:'female',
        // children:[{name:'tanuja',age:16}]
        children:['tanuja']
    },
    {
        name:'rani',
        age:35,
        location:'uttam nagar',
        gender:'female',
        // children:[{name:'anjli',age:16}]
        children:['anjli']
    }
]
const list=[];
const leng = person.length;
let index=0;

while(index<leng){
    const men=person[index]
    const childrenName=men.children.indexOf('tanuja')
    if(childrenName!=-1){
        list.push(men)
        
    }
    index++
}
console.log(list)


// while loop
let outerindex=0;
while (outerindex<5){
    let str='';
    let innerindex=0
    while(innerindex<=outerindex){
        str+='* '
        innerindex++
    }
    console.log(str)
               outerindex++
    
}