// Q1: Remove state names starting with vowels
const states = ["Andhra Pradesh", "Uttar Pradesh", "Odisha", "Maharashtra", "Karnataka", "Tamil Nadu", "Assam", "Punjab"];
const filteredStates = states.filter(state => !/^[AEIOU]/i.test(state));
console.log(filteredStates); 

// Q2: Reverse words in a sentence
let str = "I love my India";
let reversedStr = str.split(" ").reverse().join(" ");
console.log(reversedStr); 

// Q3: Modify string using array.splice
let string = "INDIA".split("");
string.splice(2, 0, "ONES");
console.log(string.join("")); 

// Q4: Count vowels and consonants
function countVowelsConsonants(text) {
    let vowels = text.match(/[AEIOUaeiou]/g)?.length || 0;
    let consonants = text.match(/[BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz]/g)?.length || 0;
    return { vowels, consonants };
}
console.log(countVowelsConsonants("This is a sample string for testing."));

// Q5: Replace incorrect word
function correctfn(string, wrong, correct) {
    return string.replace(new RegExp(wrong, "gi"), correct);
}
console.log(correctfn("I love JavaSript", "JavaSript", "JavaScript"));

// Q6: Filter numbers greater than 5
const inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
const greaterThanFive = inputArr.filter(num => num > 5);
console.log(greaterThanFive);

// Q7: Calculate average scores using map and reduce
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] }
];

const studentAverages = students.map(student => ({
    name: student.name,
    average: student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length
}));
console.log(studentAverages);

// Q8: Sum of digits until single digit
function sumUntilSingleDigit(num) {
    while (num >= 10) {
        num = num.toString().split("").reduce((sum, digit) => sum + Number(digit), 0);
    }
    return num;
}
console.log(sumUntilSingleDigit(456)); 

// Q9: Count number of words in a paragraph
function countWords(paragraph) {
    return paragraph.split(/\s+/).filter(word => word.length > 0).length;
}
console.log(countWords("This is a simple paragraph to test word count function."));

// Q10: Reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("Hello"));

// Q11: Calculate student averages
const studentsData = {
    student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
};

const studentAveragesData = Object.fromEntries(Object.entries(studentsData).map(([key, subjects]) => {
    const scores = Object.values(subjects);
    const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
    return [key, { average }];
}));

console.log(studentAveragesData);
