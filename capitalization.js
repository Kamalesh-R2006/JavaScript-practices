function capitalizeWords(sentence) {
  let words = sentence.split(" ");
  let result = "";

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > 0) {
      result += word[0].toUpperCase() + word.slice(1) + " ";
    }
  }

  return result.trim();
}

let input = process.argv.slice(2).join(" ");
{
  console.log("Capitalized sentence: " + capitalizeWords(input));
}
