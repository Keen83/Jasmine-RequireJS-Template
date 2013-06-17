define(["app/calc"], function(calc) {
	describe("Calc", function() {
		describe("add", function() {
			describe("when called without parameters", function() {
				var sum = 0;
				beforeEach(function() {
					sum = calc.add();
				});

				it("should return 10", function() {
					expect(sum).toEqual(10);
				});
			});
		});
	});
});