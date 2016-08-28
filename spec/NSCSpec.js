describe("NSC", function() {
	var nsc = NSC(10);

	it("returns numbers in sequence from 0 to 10", function() {
		expect(nsc.sequential).toEqual("0 1 2 3 4 5 6 7 8 9 10");
	});

	it("returns all odd numbers numbers in sequence from 0 to 10", function() {
   		expect(nsc.oddnumbers).toEqual("1 3 5 7 9");
	});

	it("returns all even numbers in sequence from 0 to 10", function() {
		expect(nsc.evennumbers).toEqual("0 2 4 6 8 10");
	});

	it("returns numbers and letters according to a pattern", function() {
		expect(nsc.numbersletters).toEqual("Z 1 2 C 4 E C 7 8 C E");
	});

	it("returns the fibonacci sequence from 0 to 10", function() {
		expect(nsc.fibonacci).toEqual("0 1 1 2 3 5 8");
	});

	var nsc1 = NSC(-4);
	it("The input is a negative number so it should return a message", function() {
		expect(nsc1.message).toEqual("Please enter a positive integer.");
	});
	
	var nsc2 = NSC(4.5);
	it("The input is a negative number so it should return a message", function() {
		expect(nsc2.message).toEqual("Please enter a positive integer.");
	});

	var nsc3 = NSC("sdsds");
	it("The input is a string so it should return a message", function() {
		expect(nsc3.message).toEqual("Please enter a positive integer.");
	});
	function test(){

	}
	var nsc4 = NSC(test());
	it("The input is not a positive integer so it should return a message", function() {
		expect(nsc4.message).toEqual("Please enter a positive integer.");
	});



});