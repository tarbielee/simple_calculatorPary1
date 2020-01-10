function add(){
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}



console.log(add(1,2))
console.log(add(-1,-1))
console.log(add(1,2,3,4,5))
console.log(add(1,2))
console.log(add(-1,-1));


function  multiply(){
    let product = 1;
    for(let j = 0; j < arguments.length; j++){
        product *= arguments[j];
    }     
    return product;
}
console.log(multiply(1,3))
console.log(multiply(-1,3))
console.log(multiply(1,2,3,4,5))
console.log(multiply(1,3))
console.log(multiply(-1,3));

module.exports = {
    add,multiply
}