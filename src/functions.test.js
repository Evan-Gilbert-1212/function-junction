/*
 * 1) Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else
 * construct available in Javascript.
 */
const max = (x, y) => {
  let intArray = []

  if (typeof x === 'number') {
    intArray.push(x)
  }

  if (typeof y === 'number') {
    intArray.push(y)
  }

  if (intArray.length > 0) {
    return Math.max.apply(null, intArray)
  } else {
    return NaN
  }
}

/*
 * 2) Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */
const maxOfThree = (x, y, z) => {
  const intArray = []

  if (typeof x == 'number') {
    intArray.push(x)
  }

  if (typeof y == 'number') {
    intArray.push(y)
  }

  if (typeof z == 'number') {
    intArray.push(z)
  }

  if (intArray.length > 0) {
    return Math.max.apply(null, intArray)
  } else {
    return NaN
  }
}

/*
 * 3) Define a function sum() that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */
const sum = (x, y) => {
  return x + y
}

/*
 * 4) Define a function sumOfArray that calculates the sum of
 * all the numbers in an array.
 */
const sumOfArray = intArray => {
  if (intArray.length > 0) {
    let sum = intArray.reduce(function(a, b) {
      return a + b
    })

    return sum
  } else {
    return 0
  }
}

/*
 * 5) Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */
const isVowel = char => {
  return 'AEIOUaeiou'.includes(char)
}

/*
 * 6) Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".
 */
const rovarspraket = inputString => {
  let output = ''

  for (let i = 0; i < inputString.length; i++) {
    if (!'aeiou'.includes(inputString[i])) {
      output = output + inputString[i] + 'o' + inputString[i]
    } else {
      output = output + inputString[i]
    }
  }

  return output
}

/*
 * 7) Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */
const reverse = inputString => {
  return inputString
    .split('')
    .reverse()
    .join('')
}

/*
 * 8) Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */
const findLongestWord = inputString => {
  let longestWord = ''
  let wordArray = inputString.split(' ')

  wordArray.forEach(word => {
    if (word.length > longestWord.length) {
      longestWord = word
    }
  })

  return longestWord
}

/*
 * NOTE: Don't modify anything below this line...
 */

/* eslint-disable no-undef */

import test from 'ava'
const ensureDefined = (t, method) => {
  if (eval(`typeof ${method}`) !== 'function') {
    t.fail(
      `\n\n\n\n\n⚡️⚡️⚡️⚡️⚡️ The next step is to define the function ${method} ⚡️⚡️⚡️⚡️⚡️\n\n\n`
    )
  } else {
    t.pass()
  }
}
test('max()', t => {
  ensureDefined(t, 'max')
  t.is(max(1, 3), 3)
  t.is(max(0, 3), 3)
  t.is(max(10, 3), 10)
  t.is(max(-1, -3), -1)
})

test('maxOfThree()', t => {
  ensureDefined(t, 'maxOfThree')

  t.is(maxOfThree(1, 3, 2), 3)
  t.is(maxOfThree(0, 3, -1), 3)
  t.is(maxOfThree(10, 3, 50), 50)
  t.is(maxOfThree(-1, -3, -10), -1)
})

test('sum()', t => {
  ensureDefined(t, 'sum')

  t.is(sum(8, 11), 19)
  t.is(sum(4, 100), 104)
})

test('sumOfArray()', t => {
  ensureDefined(t, 'sumOfArray')

  t.is(sumOfArray([1, 2]), 3)
  t.is(sumOfArray([1, 2, 3]), 6)
  t.is(sumOfArray([10, 9, 8]), 27)
  t.is(sumOfArray([]), 0)
})

test('isVowel()', t => {
  ensureDefined(t, 'isVowel')

  t.is(isVowel('B'), false)
  t.is(isVowel('b'), false)
  t.is(isVowel('t'), false)
  t.is(isVowel('a'), true)
  t.is(isVowel('E'), true)
})

test('rovarspraket()', t => {
  ensureDefined(t, 'rovarspraket')

  t.is(rovarspraket('a'), 'a')
  t.is(rovarspraket('b'), 'bob')
  t.is(rovarspraket('cat'), 'cocatot')
  t.is(rovarspraket('javascript'), 'jojavovasoscocroripoptot')
})

test('reverse()', t => {
  ensureDefined(t, 'reverse')

  t.is(reverse('books'), 'skoob')
  t.is(reverse("we don't want no trouble"), "elbuort on tnaw t'nod ew")
})

test('findLongestWord()', t => {
  ensureDefined(t, 'findLongestWord')

  t.is(findLongestWord('book dogs'), 'book')
  t.is(findLongestWord('life the universe and everything'), 'everything')
})

test('max() can handle non numbers', t => {
  ensureDefined(t, 'max')

  t.is(max('aaa', 0), 0)
  t.true(isNaN(max('aaa', 'bbb')))
})

test('maxOfThree() can handle non numbers', t => {
  ensureDefined(t, 'maxOfThree')

  t.is(maxOfThree('aaa', 0, 1), 1)
  t.true(isNaN(maxOfThree('aaa', 'bbb', 'ccc')))
})

/* eslint-enable */
