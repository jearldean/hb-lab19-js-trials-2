'use strict';

function wordsInCommon(words1, words2) {       // def words_in_common(words1, words2):
  const wordSet1 = new Set(words1);                // words1_set = set(words1)
  const wordSet2 = new Set(words2);                // words2_set = set(words2)

  const result = new Set();                        // result = set()

  for (const word of wordSet1) {                   // for word in words1_set:
    if (wordSet2.has(word)) {                            // if word in words2_set:
      result.add(word);                                    // result.add(word)
    }                             
  }

  return Array.from(result);                        // return list(result)

}

function kidsGame(names) {                                //def kids_game(names):
    const output = [names.shift()];                           // output = [names.pop(0)]

    const firstLetterToWords = {};                            // first_letter_to_words = {}
    //                                                          # Make a dictionary of {first-letter: [words-starting-with-that-letter]}
    for (const name of names) {                               // for name in names:
      if (firstLetterToWords[name.charAt(0)] === undefined) {     // if name[0] not in first_letter_to_words:
         firstLetterToWords[name.charAt(0)] = [name];                 // first_letter_to_words[name[0]] = [name]
      } else {                                                    // else:
          firstLetterToWords[name.charAt(0)].push(name);              // first_letter_to_words[name[0]].append(name)
      }
    }                                                          // # Chain together words until we run out
    
    while (true) {                                             // while True:
    //                                                           # Our starting letter will be the last letter of last word
    
    if (output[output.length - 1] === undefined) {                // if not first_letter_to_words.get(start_letter):
      break;                                                         // break
    } else {
      const startLetter = output[output.length - 1].slice(-1);   // start_letter = output[-1][-1]
    //                                                           # If there are no candidate words, we're done
    //console.log(startLetter)
      if (firstLetterToWords[startLetter] === undefined) {         // if not first_letter_to_words.get(start_letter):
        break;                                                         // break
      } 
      //                                                           # Get the first word with that letter and remove it
      const word = firstLetterToWords[startLetter].shift();        // word = first_letter_to_words[start_letter].pop(0)
      output.push(word);                                           // output.append(word)
  }}
    return output.join(" ") + "!";                             // return output 
}


/*
To test this code:
🐳 hackbright@e8ef6377922f:~/src/lab19-js-trials-2 (main) $ node furtherStudy.js 
*/
console.log(wordsInCommon(["I", "do", "not", "like", "green", "eggs", "and", "ham"], 
["I", "do", "not", "like", "them", "Sam", "I", "am"]))
console.log(kidsGame(["bagon", "baltoy", "yamask", "starly", "nosepass", "kalob", "nicky"]))
