
let challenge = '30 Days Of JavaScript'
console.log(challenge)
console.log(challenge.length)

challenge.toUpperCase()
challenge.toLowerCase()

let thirty = challenge.substr(0, 2)
console.log(thirty)

let daysOfJavaScript = challenge.substring(3)
console.log(daysOfJavaScript)

console.log(challenge.includes("Script"))

let challengeArray = challenge.split()
console.log(challengeArray)

let challengeArraySpace = challenge.split(' ')
console.log(challengeArraySpace)

techCompanies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(', ')
console.log(techCompanies)

console.log(challenge.replace("JavaScript", "Python"))

console.log(challenge.charAt(15))

console.log(challenge.charCodeAt(challenge.indexOf('J')))

console.log(challenge.indexOf('a'))

console.log(challenge.lastIndexOf('a'))

console.log('You cannot end a sentence with because because because is a conjunction'.search('because'))

console.log('   30 Days Of JavaScript     '.trim())

console.log('30 Days Of JavaScript'.startsWith('3'))

console.log('30 Days of JavaScript'.endsWith('t'))

console.log(challenge.match(/a/g))

console.log('30 Days of'.concat(' ','JavaScript'))

console.log(challenge.repeat(2))

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`)

console.log(typeof parseInt('10') == typeof 10);

console.log(parseInt(parseFloat('9.8')) + 1 == 10);

console.log('python'.includes('on') && 'jargon'.includes('on'))

console.log('I hope this course is not full of jargon'.includes('jargon'))

console.log(Math.floor(Math.random() * 101))

console.log(Math.floor(Math.random() * 51 + 50))

console.log(Math.floor(Math.random() * 256))

console.log('JavaScript'.charAt(Math.floor(Math.random() * ('JavaScript'.length + 1))))

console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125")

console.log('You cannot end a sentence with \
because because because is a conjunction'.substr(31,23))

console.log('Love is the best thing in this world. \
Some found their love and some are still looking for \
their love.'.match(/love/gi))

console.log('You cannot end a sentence with because \
because because is a conjunction'.match(/because/gi))

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve \
%te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding \
as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found \
tea@ching m%o@re interesting tha@n any ot#her %jo@bs. \
%Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is \
30#Days&OfJavaScript &is al@so $the $resu@lt of &love& \
of tea&ching'

const replacement = ['%','@','$','&','#',';',':','!','?','.']

let clean = sentence

replacement.forEach(function(dirty) {
    clean = clean.replaceAll(dirty, '')
});

console.log(clean.match(/\w+/g))

let number = 0

const counter = {}

clean.match(/\w+/g).forEach(function(word) {
    if (counter[word]) {
        counter[word] += 1;
    } else {
        counter[word] = 1;
    }
});


for (var key in counter) {
    if (counter[key] > number) {
        number = counter[key];
    }
};
console.log(number)

const income = 'He earns 5000 euro \
from salary per month, 10000 euro annual \
bonus, 15000 euro online courses per \
month.'.match(/\d+/g)

let totalIncome = Number(income[0]) * 12 + Number(income[1])
 + Number(income[2]) * 12;

console.log(totalIncome)

