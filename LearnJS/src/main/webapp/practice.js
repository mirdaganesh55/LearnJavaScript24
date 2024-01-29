//1)
//for (let i = 0 ; i <= 100; i++){
//	if (i%2 == 0){
//		console.log("Even Numbers : ",i);
//	}
//}

//2)Game 
let guessNum ="25";
let enteredNum = prompt("Enter a Number : ");
while(enteredNum !== guessNum){
	enteredNum = prompt("You entered wrong number, Guess again");
}
console.log("Congratulations, you entered the right number!!");
	
