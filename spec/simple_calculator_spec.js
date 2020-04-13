let calculator = require("../src/simple_calculator")

 let add = calculator.add;
 let multiply = calculator.multiply;

describe("add function", function(){

    it("add 1,2", function(){
        expect(add(1,2)).toBe(3);
    })
 
    it('add "-1,-1"', function(){
        expect(add(-1,-1)).toBe(-2);
    })
    
    it('add "1,2,3,4,5"', function(){
        expect(add(1,2,3,4,5)).toBe(15);
    })
    
    it('add "1,2"', function(){
        expect(add(1,2)).toBe(3);
    })
    
    it('add "-1,-1"', function(){
        expect(add(-1,-1)).toBe(-2);    
    })
})
   
describe("multiply function", function(){
    it('multiply "1,3"', function(){
        expect(multiply(1,3)).toBe(3);
    })

    it('multiply "-1,3"', function(){
        expect(multiply(-1,2)).toBe(-2);
    })

    it('multiply "1,2,3,4,5"', function(){
        expect(multiply(1,2,3,4,5)).toBe(120);
    })

    it('multiply "1,2"', function(){
        expect(multiply(1,2)).toBe(2);
    })

    it('multiply "-1,3"', function(){
        expect(multiply(-1,3)).toBe(-3);
    })
})
    
