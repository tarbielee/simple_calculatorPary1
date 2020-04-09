"use strict"

function add(){
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}



function  multiply(){
    let product = 1;
    for(let j = 0; j < arguments.length; j++){
        product *= arguments[j];
    }     
    return product;
}

module.export ={
    add,multiply
}