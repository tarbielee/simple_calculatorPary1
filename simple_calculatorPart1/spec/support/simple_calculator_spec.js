let calculator = require("/home/recruite/Desktop/simple_calculatorPart1/src/simple_calculator")


describe("add function", function(){

    it('add "1,2"', function(){
        expect(calculator.add(1,2)).toBe(3);
    })
    
    it('add "-1,-1"', function(){
        expect(calculator.add(-1,-1)).toBe(-2);
    })
    
    it('add "1,2,3,4,5"', function(){
        expect(calculator.add(1,2,3,4,5)).toBe(15);
    })
    
    it('add "1,2"', function(){
        expect(calculator.add(1,2)).toBe(3);
    })
    
    it('add "-1,-1"', function(){
        expect(calculator.add(-1,-1)).toBe(-2);    
    })
})
   
describe("multiply function", function(){
    it('multiply "1,3"', function(){
        expect(calculator.multiply(1,3)).toBe(3);
    })

    it('multiply "-1,3"', function(){
        expect(calculator.multiply(-1,2)).toBe(-2);
    })

    it('multiply "1,2,3,4,5"', function(){
        expect(calculator.multiply(1,2,3,4,5)).toBe(120);
    })

    it('multiply "1,2"', function(){
        expect(calculator.multiply(1,2)).toBe(2);
    })

    it('multiply "-1,3"', function(){
        expect(calculator.multiply(-1,3)).toBe(-3);
    })
})
    

