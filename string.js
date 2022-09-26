// let name = "Pawan";
// console.log(name);
// name = 'Pervez'
// + ' alam';
// console.log(name);
// console.log(name);
// console.log(name);

// let bigString = `
//  adsf asdf as
//  asdf asdf 
//  asdf asdfa s
// `
// console.log(bigString);

// console.log('name length', name.length)
// console.log('big String length', bigString.length)

// // Trim spaces
// let trimSpaces = ' start and end    ';
// console.log('before trim', trimSpaces.length)
// trimSpaces = trimSpaces.trim();
// console.log('after trim',trimSpaces.length)

// // convert to Lower Case
// let toLowerCaseValue = 'I WAS IN UPPER CASE';
// toLowerCaseValue = toLowerCaseValue.toLowerCase();
// console.log('convert to Lower Case', toLowerCaseValue)

// // convert to Upper Case
// let toUpperCaseValue = 'i was in lower case';
// toUpperCaseValue = toUpperCaseValue.toUpperCase();
// console.log('convert to Lower Case', toUpperCaseValue);

// // charAt is function
// const subject = "English";
// console.log('char at 2 should print g -',subject.charAt(2))
// console.log('char at 3 should print l -',subject.charAt(3))
// console.log('len ', subject.length); // length is property

// const amount = '$20';
// console.log('is dollar amount - ',amount.charAt(0) === '$');

// // endsWith
// const fileName = "resume.docx";
// console.log('file name ends with .docx', fileName.endsWith('.docx'))

// // includes
// const searchString = 'This is a resume file';
// console.log('should include "resume"', searchString.includes('resume'))
// console.log('should include "file"', searchString.includes('file'))
// console.log('should include "fi"', searchString.includes('fi'))
// console.log('should not include "pdf"', searchString.includes('pdf'))

// // indexOf
// console.log('index of "resume" is', searchString.indexOf('resume'));

// // replace
// const replacedString = searchString.replace('resume ', '');
// console.log('replace "resume" with blank string');
// console.log(replacedString);
// console.log(searchString);

// // substring
// const pickResume = searchString.substring(10, 16);
// console.log('picked up string ', pickResume);

// // replaceAll
// const multipleEntries = 'this is a resume and this resume is for teachers job';
// console.log(multipleEntries.replace(/resume/g, 'file')) // for later
// console.log(multipleEntries.replaceAll('resume', 'some'))


console.log ('----------------my practic------------------')

// trim space

let yadav = '  p r a d e e p  '
yadav = yadav.trim();
console.log('length is--' , yadav.length) //trim & length

//lower case

let maiuppercase = 'I AM VERY HAPPY'
maiuppercase = maiuppercase.toLowerCase()
console.log('lower case length', maiuppercase.length)
console.log('lower case ', maiuppercase)

// uppar case

let upparCase = 'i am pradeep'
upparCase = upparCase.toUpperCase();
console.log('length of uppar case --->' , upparCase.length)
console.log('UpparCase result----->' , upparCase);

//char At function

let subject = 'English'
console.log('char at 2 print g--->' , subject.charAt(2));

let king = '$20'
console.log('$ is--->' , king.charAt(1)==='2');


// endwith
const fileName='pradeep.dox'
console.log('file name is -->' , fileName.endsWith('.dox'))  //check endwith is true or false onle

// includes
const name = 'the file is resume'
console.log('file is include "resume' , name.includes('resume'))
console.log('file is include "fi' , name.includes('fi'))  //check this string is availabe or not in the statement

// indexof
console.log('index of resume' , name.indexOf('resume'))  // always indexof start to 0 with 

// replace string

const replacestr='this is my house'
const search=replacestr.replace('this', '')
console.log('before' , replacestr)
console.log('after' , search)

// substring pick between the sentence string 

const hyu = 'this is my book and i am very old '
const juy= hyu.substring(7 , 10)
console.log('pick up a string ' ,juy)

// replace all

const multipleEntries = 'this is a resume and this resume is for teachers job';
 console.log(multipleEntries.replace(/resume/g, 'file')) // for later
console.log(multipleEntries.replaceAll('resume', 'some'))

