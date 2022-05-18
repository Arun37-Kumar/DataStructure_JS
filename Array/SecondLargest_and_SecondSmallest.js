var array = [];

for (var i = 0; i <= 9; i++) {
    array.push(Math.floor(100 + Math.random()*900));
}
array.sort();
console.log(array);
console.log("Second largest element is : ",array[8]);
console.log("Second smallest element is : ",array[1]);