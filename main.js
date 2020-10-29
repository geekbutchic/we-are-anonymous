/******************
 * YOUR CODE HERE *
 ******************/

const onlyOdds = function (numbers) {
  oddBalls = numbers.filter(function (number) {
    return (number % 2 === 1)
  })
  return oddBalls;
}

const onlyEvens = function (numbers) {
  evenSteven = numbers.filter(function (number) {
    return (number % 2 === 0)
  })
  return evenSteven;
}

const shortNamesOnly = function (names) {
  whoYouCallinShort = names.filter(function (names) {
    return names.length < 7
  })
  return whoYouCallinShort;
}

const sNames = function (names) {
  theChosenOnes = names.filter(function (name) {
    return name.startsWith('S')
  })
  return theChosenOnes
}

const tripleAll = function (numbers) {
  timesThree = numbers.map(function (number) {
    return (number * 3)
  })
  return timesThree;
}

const negativeValues = function (numbers) {
  debbieDowner = numbers.map(function (number) {
    return -Math.abs(number) || 0
  })
  return debbieDowner;
}

const questionings = function (greetings) {
  happyDays = greetings.map(function (greeting) {
    return greeting + '?'
  })
  return happyDays;
}

const doubleEven = function (numbers) {
  doubleTrouble = numbers.map(function (number) {
    if (number % 2 === 0) {
      return number * 2;
    } else {
      return number;
    }
  })
  return doubleTrouble;
}

const changeToInitials = function (initials) {
  signHereWith = initials.map(function (initial) {
    return initial.charAt(0).toUpperCase() + initial.[initial.indexOf(' ') + 1]
  })
  return signHereWith
}

 
const titleCaseNames = function (names) {
  crazyCase = names.map(function (name) {
    return name.charAt(0).toUpperCase() + name.substr(1).toLowerCase()
  })
  return crazyCase;
}

const doubleEveryOther = function (numbers) {
  everyOther = numbers.map(function(number, element) {
    return element % 2 === 1 ? number * 2 : number;
  })
  return everyOther;
}

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof onlyOdds === 'undefined') {
  onlyOdds = undefined;
}

if (typeof onlyEvens === 'undefined') {
  onlyEvens = undefined;
}

if (typeof shortNamesOnly === 'undefined') {
  shortNamesOnly = undefined;
}

if (typeof sNames === 'undefined') {
  sNames = undefined;
}

if (typeof tripleAll === 'undefined') {
  tripleAll = undefined;
}

if (typeof negativeValues === 'undefined') {
  negativeValues = undefined;
}

if (typeof questionings === 'undefined') {
  questionings = undefined;
}

if (typeof changeToInitials === 'undefined') {
  changeToInitials = undefined;
}

if (typeof doubleEven === 'undefined') {
  doubleEven = undefined;
}

if (typeof titleCaseNames === 'undefined') {
  titleCaseNames = undefined;
}

if (typeof doubleEveryOther === 'undefined') {
  doubleEveryOther = undefined;
}


module.exports = {
  onlyOdds,
  onlyEvens,
  shortNamesOnly,
  sNames,
  tripleAll,
  negativeValues,
  questionings,
  changeToInitials,
  doubleEven,
  titleCaseNames,
  doubleEveryOther,
}
