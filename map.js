var words = ["ground", "control", "to", "major", "tom"];

function map(array, callback) {
  var newArr = [];
  array.forEach(function(element){
    newArr.push(element.length);
  });
  callback(newArr);
}

map(words, function(word) {
  console.log(word);
});