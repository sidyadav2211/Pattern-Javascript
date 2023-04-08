// 1 Pattern 
let n = 5;
let string = '';
// Pyramid
for (let i = 1; i <= n; i++) {
	for (let j = 1; j < n - i + 1; j++) {
		string += ' ';
	}
	for (let k = 1; k <= 2 * i - 1; k++) {
		string += k;
	}
	string += '\n';
}
// Reverse Pyramid
for (let i = 1; i <= n - 1; i++) {
	for (let j = 1; j < i + 1; j++) {
		string += ' ';
	}
	for (let k = 1; k <= 2 * (n - i) - 1; k++) {
		string += k;
	}
	string += '\n';
}
console.log(string);


// 2 Fibonacci series 

// take input from the user
const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 0; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}