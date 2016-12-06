//alert('Hello World');
//document.write('<h1>Hello World</h1>');
//console.log('Hello World');

//var name = prompt('Enter your name');

//document.write('Hello ' + name);

//var year = 1990;
//var month = 4;
//var day = 28;

// var year = Number(prompt('year'));
// var month = Number(prompt('month'));
// var day = Number(prompt('day'));

// var sum = add(year, month) + day;
// document.write(sum);

// function add(a, b) {
//     return a + b;
// }

function getage(age){
    if (age > 18) {
     return 'Abult';
    } else{
    } return 'Child';
    
}


var age = Number(prompt('Enter your age'));
var result = getage(age)
document.write(result);