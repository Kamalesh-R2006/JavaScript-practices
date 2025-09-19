function countVowels(sentence) {
  var vowels = "aeiouAEIOU";
  var count = 0;

  for (var i = 0; i < sentence.length; i++) {
    if (vowels.includes(sentence[i])) {
      count++;
    }
  }

  return count;
}
var input = process.argv.slice(2).join(" ");
console.log("Number of vowels: " + countVowels(input));