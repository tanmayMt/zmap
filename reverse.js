let arr1 = [7,5,3,3,2,22,1];

// for (let index = 0; index < arr1.length; index++) {
//     if()
// }

let r1 = new Set(arr1);

r1 = [...r1];

r1 = r1.reverse();

// console.log(r1)

let reversedArr = [];
for (let i = r1.length - 1; i >= 0; i--) {
reversedArr.push(r1[i]);
}
console.log(reversedArr); // Output: [4, 3, 2, 1]
