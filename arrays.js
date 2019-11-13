const table = [1,4,3,6,2,7,5,9,8];


console.log(table);
console.log(table.sort());

console.log("----------forEach--------------")

table.forEach(p => {
    console.log(p * 2);
});

console.log("----------MAP--------------")

const x = table.map(p => {
   return p * 3;
});
console.log(x);

console.log("----------FIND--------------")

const myNumber = x.find(i => i == 12);
console.log("My number is : " + myNumber);

console.log("----------FILTER--------------")

const selectedNumbers = x.filter(i => i>15 && i<20);
console.log(selectedNumbers);


