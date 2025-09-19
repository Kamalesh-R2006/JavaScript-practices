function longestword(sentence) {
  let words = sentence.split(" ");
  let longest = "";

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

var input = process.argv.slice(2).join(" ");
console.log("The longest word is: " + longestword(input));
