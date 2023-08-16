// let firstName = "Zain";
// let lastName = "Safdar";
// let country = "India";
// let city = "London";
// let age = 20;
// let isMarried = false;
// let year = 2023

// console.log(typeof firstName)
// console.log(typeof lastName)
// console.log(typeof country)
// console.log(typeof city)
// console.log(typeof age)
// console.log(typeof isMarried)
// console.log(typeof year)

// console.log(typeof '10' == typeof 10)
// console.log(typeof parseInt('9.8') == typeof 10)
// console.log(typeof 'hello' == 'string')
// console.log('zain' == 'zain')
// console.log(typeof false == 'boolean')
// console.log(typeof 9 == typeof '9')
// console.log(9 == 10)
// console.log(1 + 3 == 1 + '3')

// console.log(4 > 3) // true
// console.log(4 >= 3) // true
// console.log(4 < 3) // false
// console.log(4 <= 3) // false
// console.log(4 == 4) // true
// console.log(4 === 4) // true
// console.log(4 != 4) // false
// console.log(4 !== 4) // false
// console.log(4 != '4') // true WRONG
// console.log(4 == '4') // false WRONG
// console.log(4 === '4') // false
// console.log('python'.length != 'jargon'.length) // falsey

// console.log(4 > 3 && 10 < 12) // true
// console.log(4 > 3 && 10 > 12) // false
// console.log(4 > 3 || 10 < 12) // true
// console.log(4 > 3 || 10 > 12) // true
// console.log(!(4 > 3)) // false
// console.log(!(4 < 3)) // true
// console.log(!(false)) // true
// console.log(!(4 > 3 && 10 < 12)) // false
// console.log(!(4 > 3 && 10 > 12)) // true
// console.log(!(4 === '4')) // true
// console.log(!('dragon'.includes('on')) && !('python'.includes('on'))) // false

// const now = new Date()
// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getDate())
// console.log(now.getDay())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())
// console.log(now.getTime())

// var base = prompt('Enter Base')
// var height = prompt('Enter Height')
// console.log('The area of the triangle is ' + (0.5 * base * height) )

// var sideA = parseInt(prompt('Enter Size a:'))
// var sideB = parseInt(prompt('Enter Size b:'))
// var sideC = parseInt(prompt('Enter Size c:'))

// console.log("The perimeter of the triangle is " + (sideA + sideB + sideC))

// var length = parseInt(prompt('Enter length: '))
// var width = parseInt(prompt('Enter width: '))

// console.log("The perimeter of the rectangle is " + (2 * (length + width)))

// var radius = parseFloat(prompt('Enter radius'));

// console.log('The area of the circle is ' + (Math.PI * radius ** 2) +
// '\nThe circumference of the circle is ' + (2 * Math.PI * radius))

// console.log((2 - 10)/(2 - 6));

// console.log(2 == 2);

// let y = -3;

// console.log((y) ** 2 + 6 * (y) + 9);

// var hours = parseFloat(prompt('Enter hours'))
// var ratePerHour = parseFloat(prompt('Enter rate per hour'))

// console.log("Your weekly earning is " + (hours * ratePerHour))

// console.log('Zain'.length > 7 ? 'Your name is long' : 'Your name is short');

// let firstName = 'Zain';
// let lastName = 'Safdar';

// console.log(firstName.length > lastName.length
//     ? 'Your first name, ' + firstName + ' is longer than your family name, ' + lastName
//     : 'Your family name, ' + lastName + ' is longer than your first name, ' + firstName)

// let myAge = 25;
// let yourAge = 250;

// console.log(myAge > yourAge
//     ? "I am " + (myAge - yourAge) + " years older than you"
//     : yourAge > myAge ? "You are " + (yourAge - myAge) + " years older than me"
//     : "We are the same age");

// let birth_year = parseInt(prompt('Enter birth year'));
// const year = new Date();

// let age = year.getFullYear() - birth_year

// console.log(age >= 18
//     ? 'You are ' + age + '. You are old enough to drive'
//     : 'You are ' + age + '. You will be allowed to drive after ' + (18 - age) + ' years.');

// let age = parseInt(prompt('Enter age'))

// let seconds = (100 - age) * 365.25 * 24 * 60 * 60

// console.log('You can live ' + seconds + ' more seconds.')

let now = new Date();

console.log(`${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`);

console.log(`${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`);

console.log(`${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`);

let month = (now.getMonth() + 1) < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1;

let day = now.getDate() < 10 ? '0' + now.getDate() : now.getDate();

let hour = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();

let minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();

console.log(`${now.getFullYear()}-${month}-${day} ${hour}:${minutes}`)
