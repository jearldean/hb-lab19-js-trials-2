'use strict';

// 1. countWords
function countWords(phrase) {               //def count_words(phrase):
  const wordCounts = {};                        //word_counts = {}

  for (const word of phrase.split(" ")){        //for word in phrase.split(" "):
    if (wordCounts[word]){                          //if word in word_counts:
      wordCounts[word] += 1;                            //word_counts[word] += 1
    } else {                                        //else:
      wordCounts[word] = 1;                             //word_counts[word] = 1 
    }
    
  }
    return wordCounts;                          //return word_counts
}


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {                  //def print_melon_at_price(price):
  
  const melonPrices = {                             //melon_prices = {
    2.50: ["Cantaloupe", "Honeydew"],                   //2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ["Watermelon"],                               //2.95: ['Watermelon'],
    3.25: ["Musk", "Crenshaw"],                         //3.25: ['Musk', 'Crenshaw'],
    14.25: ["Christmas"]                                //14.25: ['Christmas']
  }                                                 //}

  if (melonPrices[price] === undefined) {           //if price not in melon_prices:
    return;                                             //return
  }
  else {return melonPrices[price].sort()            //return sorted(melon_prices[price])
  }
}


/*
To test this code:
🐳 hackbright@e8ef6377922f:~/src/lab19-js-trials-2 (main) $ node objects.js 
*/
console.log(countWords("I do not like green eggs and ham I do not like them Sam I am"))
console.log(getMelonsAtPrice(2.5))
console.log(getMelonsAtPrice(14.25))
console.log(getMelonsAtPrice(9.99))
