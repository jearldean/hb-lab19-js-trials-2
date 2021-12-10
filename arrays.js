'use strict';

// 1. printIndices
function printIndices(items) {
  for (const i in items) {
    console.log(`${items[i]} ${i}`);
  }
}

//console.log(everyOtherItem([1, 2, 3, 4, 5]))

// 2. everyOtherItem
function everyOtherItem(items) {
  const everyOther = [];

  for (const i in items) {
    if (i % 2 === 0) {
    everyOther.push(items[i]);
  }
}
  console.log(everyOther);
}

// 3. smallestNItems
function smallestNItems(items, n) {
  const sortedItems = items.sort((a, b) => a - b).slice(0, n);
  sortedItems.reverse();

  console.log(sortedItems);
}
