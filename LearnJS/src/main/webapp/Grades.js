let mark = prompt("Enter Your Score");
let grade = "";
if (mark <= 49){
	console.log(mark , "your grade is 'F' ");
	grade = "F";	
}
else if (mark > 49 && mark <=59){
	console.log(mark , "your grade is 'D' ");
	grade = "D";
}
else if (mark > 59 && mark <= 69){
	console.log(mark , "your grade is 'C' ");
	grade = "C";
}
else if (mark > 69 && mark <= 80){
	console.log(mark , "your grade is 'B' ");
	grade = "B";
}
else if (mark > 80 && mark <= 100){
	console.log(mark , "your grade is 'A' ");
	grade = "A";
}
else{
	console.log("Enter a valid number in between (1-100)");
}
console.log(grade);
