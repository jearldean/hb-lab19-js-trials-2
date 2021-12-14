'use strict';

// 1. isHometown

function isHometown(town){              //def is_hometown(town):
    return town === "San Francisco";        //return town == "San Francisco"
}

// 2. getFullName

function getFullName(fname, lname){               //def get_full_name(first_name, last_name):
    const message = `Hello ${fname} ${lname}!`;       //msg = f"{first_name} {last_name}"
    return message;                                   //return msg
}

// 3. calculateTotal

function calculateTotal(basePrice, state, tax=0.05) {  //def calculate_total(base_price, state, tax=0.05):

    let fee = 0;                                            //fee = 0
    let subtotal = basePrice * (1+ tax);                    //subtotal = base_price * (1 + tax)

    if (state === "CA") {                                   //if state == "CA":
        fee = 0.03 * subtotal;                                  //fee = 0.03 * subtotal
    } else if (state === "PA") {                            //elif state == "PA":
        fee = 2;                                                //fee = 2
    } else if (state === "MA") {                            //elif state == "MA":
        if (basePrice <= 100) {                                 //if base_price <= 100:
            fee = 1;                                                //fee = 1
        } else {                                                //else:
            fee = 3;                                                //fee = 3
        }
    }
    return subtotal + fee;                                  //return subtotal + fee
    }

/*
To run this code:
🐳 hackbright@e8ef6377922f:~/src/lab19-js-trials-2 (main) $ node functions.js 
*/
console.log(isHometown("San Francisco"))
console.log(isHometown("San Jose"))
console.log(getFullName("Bill", "Clinton"))
console.log(calculateTotal(10, "CA"))
console.log(calculateTotal(10, "PA"))
console.log(calculateTotal(10, "MA"))
console.log(calculateTotal(99, "MA", 0.08))
console.log(calculateTotal(100, "MA", 0.08))
console.log(calculateTotal(101, "MA", 0.08))
