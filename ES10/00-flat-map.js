const numbers=[10,20,43,3,2,2,[3,5,7,87,42,[2,4,5,7,8,9]]];

console.log(numbers.flat(1));

// Flat map
const array2=[1,2,3,4,5];

console.log(array2.flatMap(v=>[v,v*2]));