/* 
  Copyright (c) 2023 Promineo Tech
  Author:  Promineo Tech Academic Team
  Subject:  JavaScript Mocha/Chai
  FE JS6 Lab
*/
const expect = chai.expect
const assert = chai.assert

/* ----------------------------------------------------- */
// Resources:
// expect Documentation: https://www.chaijs.com/api/bdd/
// assert Documntation: https://www.chaijs.com/api/assert/
//
// assert is very similar to how you use expect, but offers
// extra ways to test.

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so.
// Read the comments and add your code where it is specified for each question.
/* ----------------------------------------------------- */

/**
 *          YOU MUST 'npm install' IN YOUR TERMINAL TO INSTALL MOCHA/CHAI 
 *          FROM THE DEPENDENCIES IN YOUR PACKAGE.JSON
 * 
 *  Step 1: Create a describe code block that describes what you expect the code to do.
 *  Step 2: Copy/Paste your debugged code from JS6Lab.js into the describe block (exclude the final console.log())
 *  Step 3: Create tests using expect/assert to test for expected outputs. Use multiple cases.
 *          If you're testing against an array/object - read the documentation on .deep/.deepEquals
 *
 *  Note:   Mocha/Chai is currently set up to only run in your given index.html. 
 *          expect/assert are given to you at the top of the code. 
 * 
 *          By default, the tests will pass unless you give it code to test against.
 * 
/*--------------------------------------------------------------------*/

describe('JS6 Lab Tests:', () => {
  describe('Example Question Test: Add Two Numbers', () => {
    it('#Should return the sum of two numbers', () => {
      // Copy & paste your debugged code from JS6Lab.js
      function addTwoNumbers(num1, num2) {
        return num1 + num2
      }
      // Write tests to ensure it works for multiple examples
      expect(addTwoNumbers(2, 3)).to.equal(5)
      expect(addTwoNumbers(9, 17)).to.equal(26)
      expect(addTwoNumbers(750, 250)).to.equal(1000)
      expect(addTwoNumbers(132780, 443378)).to.equal(576158)
    })

    describe('Example Failed Test: Add Two Numbers', () => {
      it('#Should fail', () => {
        function sumOfTwoNumbers(num1, num2) {
          num1 + num2
        }

        expect(sumOfTwoNumbers(2, 3)).to.equal(5)
      })
    })
  })
  /*--------------------------NEW TESTS BELOW-------------------------------*/
})


describe('Example Question 1a: Sorted Array of Numbers', () => {
  it('#Should return the array of numbers in order', () => {
    const arrayOfNumbers = [1, 5, 3, 2, 4]
    arrayOfNumbers.sort((a, b) => a - b)

    expect(arrayOfNumbers).to.deep.equal([1, 2, 3, 4, 5])// need the deep equal
  })
})

describe('Example Question 1b: Adding and Subtracting money in my Wallet', () => {
  it('#Should return the sum or subtraction of money in my wallet', () => {
    let myWallet = new Wallet(10)
    myWallet.addMoney(5)
   expect(myWallet.money).to.equal(15)// first test adds 10+5

  })

  it('#Should return the sum or subtraction of money in my wallet', () => {
    let myWallet = new Wallet(10)
    myWallet.removeMoney(5)
    expect(myWallet.money).to.equal(5)// second test removes 10-5
    
    myWallet.removeMoney(2.5)// it's 5 now and -2.5 = 2.5
    expect(myWallet.money).to.equal(2.5)
  })

  class Wallet {
    constructor(startingMoney) {
      this.money = startingMoney
    }

    addMoney(amount) {
      this.money += amount
    }

    removeMoney(amount) {
      this.money -= amount
    }
  }

})

describe('Example Question 1c: Picking the days of the Week from a Switch Loop', () => {
  it('#Should return the day of the week you select by a number', () => {
    const dayOfTheWeek = (num) => {
      switch (num) {
        case 1:
          return 'Monday'// added return and break to make it work
          break;
        case 2:
          return 'Tuesday'
          break;
        case 3:
          return 'Wednesday'
          break;
        case 4:
         return 'Thursday'
         break;
        case 5:
          return 'Friday'
          break;
        case 6:
          return 'Saturday'
          break;
        case 7:
          return 'Sunday'
          break;
        default:
          console.log('Err. Something went wrong.')
      }
    }
    expect(dayOfTheWeek(1)).to.equal('Monday')
    expect(dayOfTheWeek(2)).to.equal('Tuesday')
    expect(dayOfTheWeek(3)).to.equal('Wednesday')
    expect(dayOfTheWeek(4)).to.equal('Thursday')
    expect(dayOfTheWeek(5)).to.equal('Friday')
    expect(dayOfTheWeek(6)).to.equal('Saturday')
    expect(dayOfTheWeek(7)).to.equal('Sunday')
  })
})

describe('Example Failed Days of the Week', () => {
  it('#Should fail', () => {
    const dayOfTheWeek = (num) => {
      switch (num) {
        case 1:
          return 'Monday'// added return and break to make it work
          break;
        case 2:
          return 'Tuesday'
          break;
        case 3:
          return 'Wednesday'
          break;
        case 4:
         return 'Thursday'
         break;
        case 5:
          return 'Friday'
          break;
        case 6:
          return 'Saturday'
          break;
        case 7:
          return 'Sunday'
          break;
        default:
          console.log('Err. Something went wrong.')
      }
    }
    expect(dayOfTheWeek(1)).to.equal('wednesday')
    expect(dayOfTheWeek(2)).to.equal('Monday')
    expect(dayOfTheWeek(3)).to.equal('Wednebeansday')
    expect(dayOfTheWeek(4)).to.equal('Thurseeeday')
    expect(dayOfTheWeek(5)).to.equal('Fridwwway')
    expect(dayOfTheWeek(6)).to.equal('Satuwwwrday')
    expect(dayOfTheWeek(7)).to.equal('Suwwwnday')
  })
})

describe('Example Question 1d: Only Wizards shall pass', () => {
  it('#Should only pass Wizards', () => {
    const movieCharacters = [
      {
        name: 'Howl',
        isAWizard: true,
        quote: `You're wearing that hat? After all the magic I used to make your dress pretty?`,
      },
      {
        name: 'Kalcifer',
        isAWizard: false,
        quote: `I don't cook! I'm a scary and powerful fire demon!`,
      },
      {
        name: 'Gandalf',
        isAWizard: true,
        quote: `You shall not pass!`,
      },
      {
        name: 'Luke Skywalker',
        isAWizard: false,
        quote: `May the Force be with you.`,
      },
    ]
  })
    
    function onlyWizards(arrayOfCharacters) {
      return arrayOfCharacters.filter((character) => character.isAWizard == true)
    }
    
    for (let character of onlyWizards(movieCharacters)) {
      it('#Character should be a wizard' , () => {
        expect(character.isAWizard).to.equal(true)
      })
    }
})