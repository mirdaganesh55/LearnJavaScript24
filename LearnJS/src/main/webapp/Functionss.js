//function myFunction(){
//	console.log("Hello Guyss!!!!");
//	console.log("JavaScript is awesome...");
//}
//myFunction();
//
//function myFunctionPara(msg){
//	console.log(`Welcome to JavaScript ${msg}.Lets have Fun.`);
//}
//myFunctionPara(prompt("Enter Your name : "))

//Arrow function
//const arrow = (a,b)=>{
//	console.log(a+b);
//};
//arrow(1,4);

let count = 0;
function countVowels(str){
	for( let char of str){
		if (char === "a" ||char === "e" || char === "i"|| char === "o"|| char === "u"){
			count++;
		}
	}
	console.log(`The name contains ${count} Vowels`);
}
countVowels(prompt("Enter a name : "));
