'use strict';

// 1. printIndices
/*
# Putting the equivalent python here might help me convert:
def print_indices(items):
    for i in range(len(items)): 
      print(f'{items[i]} {i}')
*/
function printIndices(items) {          //def print_indices(items):
  for (const i in items) {                  //for i in range(len(items)): 
    console.log(`${items[i]} ${i}`);            //print(f'{items[i]} {i}')
  }
}


//console.log(everyOtherItem([1, 2, 3, 4, 5]))

// 2. everyOtherItem
/*
# Putting the equivalent python here might help me convert:
def every_other_item(items):
    everyOther = []

    for i in range(len(items)):
        if i % 2 == 0:
            everyOther.append(items[i])

    print(everyOther)
*/
function everyOtherItem(items) {  //def every_other_item(items):
  const everyOther = [];              //every_other = []

  for (const i in items) {            //for i in range(len(items)):
    if (i % 2 === 0) {                    //if i % 2 == 0:
    everyOther.push(items[i]);                //every_other.append(items[i])
  }
}
  console.log(everyOther);            //print(every_other)
}

// 3. smallestNItems
function smallestNItems(items, n) {                            //def smallest_n_items(items, n):
  const sortedItems = items.sort((a, b) => a - b).slice(0, n);     //sorted_items = sorted(items)
  sortedItems.reverse();                                           //sorted_n_items = sorted_items[:n]
                                                                   //sorted_n_items.reverse()

  console.log(sortedItems);                                        //print(sorted_n_items)
}

/*
To test this code:
🐳 hackbright@e8ef6377922f:~/src/lab19-js-trials-2 (main) $ node arrays.js 
*/
printIndices(['apple', 'berry', 'cherry'])
everyOtherItem(['apple', 'berry', 'cherry', 'durian', 'eggplant', 'fruit', 'gourd'])
smallestNItems(['fruit', 'apple', 'cherry', 'eggplant', 'berry', 'gourd', 'durian'], 3)
smallestNItems([1, 30, 4, 21, 100000], 2)
