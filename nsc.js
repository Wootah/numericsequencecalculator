"use strict";
function NSC(ii){
	let validateinput = false;
	let results = {
		message: "",
		sequential: "",
		oddnumbers: "",
		evennumbers: "",
		numbersletters:"",
		fibonacci:""
	};
	let inputinteger = ii;

	function sequentialfn(){	
		let sequence = "";
		for (var i = 0; i <= inputinteger; i++) {
			sequence = sequence + i + " ";
		}
		return sequence.trim();
	}

	function oddnumbers(){	
		let sequence = "";
		for (var i = 0; i <= inputinteger; i++) {
			if(i % 2 !== 0){
			sequence = sequence + i + " ";

			}
		}
		return sequence.trim();
	}

	function evennumbers(){	
		let sequence = "";
		for (var i = 0; i <= inputinteger; i++) {
			if(i % 2 === 0){
			sequence = sequence + i + " ";

			}
		}
		return sequence.trim();
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
		return sequence.trim();
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
			if(fib < inputinteger){
				sequence = sequence + fib + " ";
			}
			
		}while (fib < inputinteger);
		return sequence.trim();
	}


	function validateforpositiveinteger(val) {
		//http://www.inventpartners.com/javascript_is_int
		 if((parseFloat(val) == parseInt(val)) && !isNaN(val) && val >=0){
		 	return true;
		}else{
			return false;
		}	
	}



	function resultsfn(){
		if ( undefined === inputinteger ) {
			results.message = "Please enter a positive integer.";

		}else if(validateforpositiveinteger(inputinteger) === true){
			results.message = "Here are the sequences.";
			results.sequential = sequentialfn();
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