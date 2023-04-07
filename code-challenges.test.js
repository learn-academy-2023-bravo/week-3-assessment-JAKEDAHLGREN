// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Jest Test example:
//  describe("divThree", () => {
//     it("takes a object as an argument and decides if the number inside it is evenly divisible by three or not", () => {
//       const object1 = { number: 15 }
// // Expected output: "15 is divisible by three"
//       const object2 = { number: 0 }
// // Expected output: "0 is divisible by three"
//       const object3 = { number: -7 }
// // Expected output: "-7 is not divisible by three"
//       expect(divThree(object1)).toEqual("15 is divisible by three") 
//       expect(divThree(object2)).toEqual("0 is divisible by three")
//       expect(divThree(object3)).toEqual("-7 is not divisible by three")
//     })
// })


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.


// a) Create a test with expect statements for each of the variables provided.

describe("twoMore", () => {
  it("returns an array that length containing the numbers of the Fibonacci sequence", () => {
    const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]
    const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(twoMore(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(twoMore(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// Test Failed:
//   ● twoMore › returns an array that length containing the numbers of the Fibonacci sequence
//     ReferenceError: twoMore is not defined

const fibLength1 = 6
//Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
//Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

// Pseudo code

// Input: a number (greater than 2) 
// Output: an array that length containing the numbers of the Fibonacci sequence
// Example: fibLength1 = 6 will look like [1, 1, 2, 3, 5, 8]

// Process

// Declare a function named twoMore
// Declare an array holding the first two array elements called fib
// Use a for loop and set the starting index at 2, index less than the parameter number, and i++ for the loop to climb by increments of 1 (for(let i - 2; i < number; i++))
// Declare an array to hold modified numbers called newFib
// Set function for each iteration to have the next index equal to the sum of the previous two numbers
// Idea of logic: newFib is equal to index minus one plus index minus 2( newFib[] = newFib[i-1] + newFib[i -2])
// Use .push to bring all of the newFib elements into the original fib array
// Return fib (outside of the for loop function)

//Function:

// const fibLength1 = 6
// const fibLength2 = 10
function twoMore(num) {
  let fib = [1, 1]
  for(let i = 2; i < num; i++){
    let newFib = fib[i-1] + fib[i-2]
    fib.push(newFib)
  } 
  return fib
}

// Test Passed:

//  PASS  ./code-challenges.test.js
//   twoMore
//     ✓ returns an array that length containing the numbers of the Fibonacci sequence (2 ms)


// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
//  Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

// Test:
describe("objectToArray", () => {
  it("returns an array of the values sorted from least to greatest", () => {
    const studyMinutesWeek1 = { sunday: 90, monday: 30, tuesday: 20, wednesday: 15, thursday: 30, friday: 15, saturday: 60 }
// Expected output: [15, 15, 20, 30, 30, 60, 90]
    const studyMinutesWeek2 = { sunday: 100, monday: 10, tuesday: 45, wednesday: 60, thursday: 20, friday: 15, saturday: 65 }
// Expected output: [10, 15, 20, 45, 60, 65, 100]
    expect(objectToArray(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(objectToArray(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})

// Test Failed:
//   ● objectToArray › returns an array of the values sorted from least to greatest
//     ReferenceError: objectToArray is not defined


const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

// Pseudo 

// Input:object 
// Output:an array of the values sorted from least to greatest
// Expected:[15, 15, 20, 30, 30, 60, 90],[10, 15, 20, 45, 60, 65, 100]

// Process:
// Declare a function called objectToArray
// Isolate all values from the given objects with the method Objects.values into an array
// Use the .sort() method to organize them in descending order by setting your logic up like: (a, b) => a - b
// return new obj array

// Function
const objectToArray = (obj) => {
return Object.values(obj).sort((a, b) => a - b)
}

// Test Passed:

// objectToArray
    // ✓ returns an array of the values sorted from least to greatest (1 ms)


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// Test:
 describe("sumAccumulator", () => {
    it("takes in an array and returns an array of the accumulating sum", () => {
      const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]
      const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]
      const accountTransactions3 = []
// Expected output: []
      expect(sumAccumulator(accountTransactions1)).toEqual([100, 83, 60, 51]) 
      expect(sumAccumulator(accountTransactions2)).toEqual([250, 161, 261, 165])
      expect(sumAccumulator(accountTransactions3)).toEqual([])
    })
})

// Test Failed:
  // ● sumAccumulator › takes in an array and returns an array of the accumulating sum
  //   ReferenceError: sumAccumulator is not defined

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.

// pseudo
// Input: array
// Output: an array of the accumulating sum
// Example: [250, -89, 100, -96] will equal [250, 161, 261, 165]
// New index values:index [0] is unchanged, index [1]= [0]+[1], index [2]= new[1]+[2], index [3]= new [2]+[3]...
// Process:
// Declare a function called sumAccumulator
// Declare a variable equal to zero
// Use the map method to iterate (and return the same length array)
// Set the call back function of value to equal the variable accumulator plus equal to the value to return each next value added to the previous index.
// Returns the output of map

const sumAccumulator = (array) => {
  let accumulator = 0
  return array.map((value) => {
  return accumulator += value 
  })
  
}