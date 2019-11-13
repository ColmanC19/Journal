export function Entry (words){
  this.words = words;
}

Entry.prototype.numberOfWords = function(){
var wordTotal = this.words.split(" ").length;
return wordTotal;
}

// Entry.prototype.vowelsConsonants = function (){
//   var total = (this.words.match([/aeiou]/gi) == null) ? 0 : this.words.match(/[aeiou]/gi).length;
//   return total;
//
// //   var vowelsTotal = this.words.includes(['a','e','i','o','u']);
// //   return vowelsTotal;
// //   console.log(vowelsTotal)
// //
// }
