((word) => {
  for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j < word.length; j++) {
      if (word[i] === word[j]) {
        console.log("The letter that is repeated: " + word[i]);
      }
    }
  }
})(process.argv[2]);
