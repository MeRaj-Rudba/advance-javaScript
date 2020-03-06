// const number=[3,4,5,6,7];
// const output=[];
// for(let i=0;i<number.length;i++){
//     const element=number[i];
//     const result=element*element;
//     output.push(result);
// }
// console.log(output);

const numbers=[1,2,3,4,5,6,7]
//Map
const result= numbers.map(x => x*x);
console.log(result);
//Map will do something with the given array

//filter

const bigger=numbers.filter(x => x >5);
console.log(bigger);
//Filter will show something from the given array and will give a new array


//find
const isThere=numbers.find(x => x>5);
console.log(isThere);
//Find will show something from the given array and will give an element only;
