//module design pattern
function NSC(beginfrom, inputinteger){
	"use strict";
	let validateinput = false;
	let results = {
		message: "",
		sequential: "",
		oddnumbers: "",
		evennumbers: "",
		numbersletters:"",
		fibonacci:""
	};

	function sequential(){	
		let sequence = "";
		for (var i = 0; i <= inputinteger; i++) {
			sequence = sequence + i + " ";
		}
		return sequence;
	}

	function oddnumbers(){	
		let sequence = "";
		for (var i = 0; i <= inputinteger; i++) {
			if(i % 2 !== 0){
			sequence = sequence + i + " ";

			}
		}
		return sequence;
	}

	function evennumbers(){	
		let sequence = "";
		for (var i = 0; i <= inputinteger; i++) {
			if(i % 2 === 0){
			sequence = sequence + i + " ";

			}
		}
		return sequence;
	}

	function numbersletters(){	
		let sequence = "";
		for (var i = 0; i <= inputinteger; i++) {
			let c;
			if((i % 5 === 0)&&(i % 3 === 0)){
				c = "Z";
			}else if(i % 3 === 0){
				c = "C";
			}else if(i % 5 === 0){
				c = "E";
			}else{
				c = i;
			}			
			sequence = sequence + c + " ";
		}
		return sequence;
	}

	function fibonacci() {
		let i = 0;
		let sequence = "0 1 ";
		let fib = 0;
		let fiba = 0;
		let fibb = 1;
		do {
			fib = fiba + fibb;
			fiba = fibb;
			fibb = fib;
			sequence = sequence + fib + " ";
			
		}while (fib < inputinteger);
		return sequence;
	}


	function validateforpositiveinteger() {
		//http://www.inventpartners.com/javascript_is_int
		 if((parseFloat(inputinteger) == parseInt(inputinteger)) && !isNaN(inputinteger)){
		 	return true;
		}else{
			return false;
		}	
	}



	function resultsfn(){
		if(validateforpositiveinteger() === true){
			results.message = "Here are the sequences.";
			results.sequential = sequential();
			results.oddnumbers = oddnumbers(); 
			results.evennumbers = evennumbers();
			results.numbersletters = numbersletters(); 
			results.fibonacci = fibonacci();

		}else{
			results.message = "Please enter a positive integer.";

		}
		return results;
	}
	return resultsfn();

}