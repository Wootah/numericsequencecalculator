(function(){
	"use strict";
	let inputinteger = 70;
	let begin = 0;

	function sequential(){	
		let results = "";
		for (var i = 0; i <= inputinteger; i++) {
			results = results + i + " ";
		}
		return results;
	}

	function oddnumbers(){	
		let results = "";
		for (var i = 0; i <= inputinteger; i++) {
			if(i % 2 !== 0){
			results = results + i + " ";

			}
		}
		return results;
	}

	function evennumbers(){	
		let results = "";
		for (var i = 0; i <= inputinteger; i++) {
			if(i % 2 === 0){
			results = results + i + " ";

			}
		}
		return results;
	}

	function numbersce(){	
		let results = "";
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
			results = results + c + " ";
		}
		return results;
	}

	function fibonacci() {
		let i = 0;
		let results = "";
		let fib = 0;
		let fiba = 0;
		let fibb = 0;
		do {
			fib = fiba + fibb;
			if(fib===0){
				results = results + fib + " ";
				fiba = 0;
				fibb = 1;
			}else if(fib===1){
				results = results + fib + " ";
				fiba = 1;
				fibb = 2;

			}else{
				fib = fiba + fibb;
				fiba = fibb;
				fibb = fib;
				results = results + fib + " ";
			}
		}while (fib < inputinteger);
		return results;
	}

	//console.log(sequential()); 
	//console.log(oddnumbers()); 
	//console.log(evennumbers()); 
	console.log(numbersce()); 
	//console.log(fibonacci()); 

})();
