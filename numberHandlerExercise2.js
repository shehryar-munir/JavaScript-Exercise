console.clear()
var axios = require('axios')

const helper = {
  isPrime : ( number ) => {

    // check for 0, 1 and 2
    if (number == 0 || number == 1 || number == 2){
      return true
    }

    // if number is divisible by any number from 2 - half of number 
    // then it is not prime else it is prime
    for (var i = 2; i < number / 2 ; i ++ ){
      if (number % i === 0){
        return false;
      }
    }

    return true
  },

  findMax: (array) => {
    let max = array[0]

    for (num of array){
      if (num > max){
        max = num
      }
    }

    return max
  },

  findMin: (array) => {
    let min = array[0]

    for (num of array){
      if (num < min){
        min = num
      }
    }

    return min
  },

  squareRoot: (number) => {
    let count = 0;
    let oddNumber = 1
    while (number > 0){
      number = number - oddNumber;
      oddNumber += 2
      count = count + 1
    }

    return count
  }
}


// Define an object for number operations
const numberHandlerExercise2 = {
    numbers: [11, 22, 33],


    // Method to check if all numbers in the array are prime
    checkPrimeNumbers() {

      let primeCount = 0


      // counting the prime numbers count
      this.numbers.map((number) => {

        if (helper.isPrime(number) === true){
          primeCount = primeCount + 1
        }

      })

      return primeCount === this.numbers.length
    },


    // Method to find the greatest common divisor (GCD) of all numbers in the array
    findGCD() {
      // TODO: Implement a method to find the greatest common divisor (GCD) of all numbers in the array

      // Approach: we will find factors of all numbers first 
      // then taking factors of any number and checking if any common factors
      // exists between both arrays then add to commonFactors array
      // lastly returning maximum of common number i.e, greater common divisor

      // finding factors
      let factors = []

      for (let num of this.numbers){

        let fac = []

        for (let i = 0; i <= num; i++){
          if (num % i === 0){
            fac.push(i)
          }
        }

        factors.push(fac)

      }

      fac_arr = factors[0] // array for comparison
      commonFactors = [] // for pushing all common factors of numbers
      
      // checking common factors and pushing to commonFactors array
      for (let factor of fac_arr){
        let isCommon = false

        for (let arrays of factors){
          if (arrays.includes(factor)) {
            isCommon = true
          }
          else {
            isCommon = false;
            break;
          }
        }

        if (isCommon === true){
          commonFactors.push(factor)
        }
      }

      // returning GCD
      return helper.findMax(commonFactors)
    },

    // Method to find the least common multiple (LCM) of all numbers in the array
    findLCM() {
      // TODO: Implement a method to find the least common multiple (LCM) of all numbers in the array
      // Approach: we will find multiples of all numbers first 
      // then taking multiples of any number and checking if any common factors
      // exists between both arrays then add to commonFactors array
      // lastly returning minimum of common number i.e, lowest common multiple

      // finding factors
      let factors = []

      for (let num of this.numbers){

        let fac = []

        for (let i = 1; i <= 100; i++){
          fac.push(num * i)
        }

        factors.push(fac)

      }

      fac_arr = factors[0] // array for comparison
      commonFactors = [] // for pushing all common factors of numbers
      
      // checking common factors and pushing to commonFactors array
      for (let factor of fac_arr){
        let isCommon = false

        for (let arrays of factors){
          if (arrays.includes(factor)) {
            isCommon = true
          }
          else {
            isCommon = false;
            break;
          }
        }

        if (isCommon === true){
          commonFactors.push(factor)
        }
      }

      // returning GCD
      return helper.findMin(commonFactors)
    },
    // Method to round each number to the nearest integer
    roundNumbers() {
      // TODO: Implement a method to round each number to the nearest integer
      // Assumption: We will have numbers uptill 1 decimal place
      
      // Approach: Converting each number to string fetching the number
      // after point then checking if it meets the condition for rounding off
      // if yes the first number is rounded off and appended to new string
      // the string is then converted to number 

      num = [1.5, 1.3, 2.6, 20.6, 2.90, 3000.99]

      console.log("Before rounding off: ", num)

      for (let i = 0; i < num.length; i++){

        let s = String(num[i])
        split_arr = s.split(".")

        if (split_arr[1][0] >= 5){
          let new_num = ''
          new_num = String(Number(split_arr[0]) + 1)
          new_num += '.0'
          num[i] = parseInt(new_num)
        }

      }

      console.log("After rounding off: " ,num)
      
    },

    // Method to calculate the square root of each number in the array
    calculateSquareRoot() {
      // TODO: Implement a method to calculate the square root of each number in the array

      // Approach: Using the approach in which we will decreament the number by odd number
      // until the number is less than equal to zero 

      let squareRoots = []
      for (let num of this.numbers){
        squareRoots.push(helper.squareRoot(num)) // computing squareroots of all numbers 
      }
 
      return squareRoots
    },

    // Method to demonstrate asynchronous operation using promises
    asyncOperation() {
      // TODO: Implement an asynchronous operation using promises
      return new Promise((resolve, reject) => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://dummyjson.com/users'); // fecthing dummy user data
            resolve(response.data);
          } catch (error) {
            reject(error);
          }
        }

        fetchData()
      })
    },

    // Method to demonstrate type coercion
    typeCoercionDemo() {
      // TODO: Implement a demonstration of type coercion
      console.log("Type CoercionDemo");
      console.log("5 + \"5\": ", 5 + "5", "\n") // will automatically convert integer to string and append it
      console.log("String(100): ", String(100), "\n") // converting an integer to string
      console.log("true + true: ", true + true , "\n" ) // 1 + 1 => 2 
      console.log("false + true: ", false + true , "\n") // 0 + 1 => 1
      console.log("36 / '6': " , 36 / '6' , "\n") // '/' symbol triggers integer conversion for division
      value = NaN
      console.log("value = NaN\nvalue === value:", value === value , "\n") // NaN is not equal to itself
    }
  };

  // // Test the number methods
  console.log('Are all numbers prime:', numberHandlerExercise2.checkPrimeNumbers());
  console.log('Greatest Common Divisor (GCD):', numberHandlerExercise2.findGCD());
  console.log('Least Common Multiple (LCM):', numberHandlerExercise2.findLCM());
  numberHandlerExercise2.roundNumbers();
  // console.log('Numbers after rounding:', numberHandlerExercise2.numbers);
  console.log("Square Roots: ", numberHandlerExercise2.calculateSquareRoot()) 
  // console.log('Square roots:', numberHandlerExercise2.numbers);
  // Demonstrate type coercion
  numberHandlerExercise2.typeCoercionDemo();
  // Demonstrate asynchronous operation with promises
  numberHandlerExercise2.asyncOperation()
    .then(result => {
      console.log(result);
    });
  console.log('End of script execution. Event loop continues...');