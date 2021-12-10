'use strict';

// 1. isHometown

function isHometown(town){
    return town === "San Francisco";
}

// 2. getFullName

function getFullName(fname, lname){
    const message = `Hello ${fname} ${lname}!`;
    return message;
}

// 3. calculateTotal

function calculateTotal(basePrice, state, tax=0.05) {

    let fee = 0;
    let subtotal = basePrice * (1+ tax);

    if (state === "CA") {
        fee = 0.03 * subtotal;
    } else if (state === "PA") {
        fee = 2;
    } else if (state === "MA") {
        if (basePrice <= 100) {
            fee = 1;
        } else {
            fee = 3;
        }
    }
    return subtotal + fee;
    }