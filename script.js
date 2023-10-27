/* 3 */
let resault = 0;
const arr = [1, 43, 12, 9, 3];

for (let i = 0; i < arr.length; i++) {
  resault += arr[i]
  console.log(resault);
}

/* не совсем то,что нужно  */

console.log("   ");

/* 4 */


const array = [-1, 23, 41, 7];

for (let index = 0; index < array.length; index++) {
  if (array[index] > 0) {
    console.log(true, index);
  }else{
    console.log("Reject");
  }
}

/* тоже не совес то~~ */

console.log(" ");

/* 5 */


const aarr = [10, 15, 8, 7, 12, 13, 5, 11, 3];

for (let index = 0; index < aarr.length; index++) {
  if (aarr[index] > 5 && aarr[index] < 10 ) {
    console.log(aarr[index]);
  }
  
}

console.log(" ");

/* 1 ( домашнее задание ) */

for (let index = 1; index <= 10; index++) {
  console.log(index);;
  
}

console.log(" ");

/* 2 */

for (let i = 2; i <= 20; i += 2) {
  console.log(i);
  
}

console.log(" ");

/* 3 */

let sum = 0
for (let i = 1; i < 50; i++) {
  sum += i
}
console.log(sum);

console.log(" ");


/* 4 */

let seven = 7;
let resaultSeven

for (let index = 0; index <= 10; index++) {
  resaultSeven = index * seven;
  console.log(resaultSeven);
}

console.log(" ");


/* 5 */

const abetka = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

for (let index = 0; index < abetka.length; index++) {
  console.log(abetka[index]);  
}

console.log(" ");

/* 6 */

for (let index = 1; index <= 20; index++) {
  if (index % 2 == 0) {
    console.log(index + " парне");
  }else{
    console.log(index + " непарне");
  } 
}

console.log(" ");

/* 7 */

for (let index = 1; index <= 10; index++) {
  if (index > 0 ) {
    console.log(index + " Додатнє");
  }else if (index < 0) {
    console.log(index + " Від'ємне");
  }else if (index == 0) {
    console.log(index + " Нуль");
  }
  
}

console.log(" ");

/* 8 */

for (let index = 0; index <= 50; index++) {
  if (index % 3 != 0 && index % 5) {
    console.log(index);
  }else if (index % 3 == 0) {
    console.log(index + " Fizz");
  }else if (index % 5 == 0) {
    console.log(index + " Buzz");
  }else if (index % 3 == 0 && index & 5 == 0) {
    console.log(index + " FizzBuzz");
  }
  
}

console.log(" ");


/* 9 */

for (let index = 1; index <= 100; index++) {
if (index % 2 == 0) {
    console.log(index + " парне");
}else if (index % 5 == 0) {
  console.log(index + " ділиться на 5");
}else {
  console.log(index);
}
}

console.log(" ");





/* 10 */

for (let index = 1; index <= 100; index++) {
  if (index % 2 == 0) {
    console.log(index);
  }else {
    console.log(index, " Просте");
  }
  
}


/* не то~~~~~~~~~~*/