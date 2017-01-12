function findWaldo(arr, found) {
  /*for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }*/
  arr.forEach(function(name, i){
    if (name === 'Waldo'){
      actionWhenFound(i);
    }
  });
}

function actionWhenFound(index) {
  console.log("Found Waldo at index " + index + '!');
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);