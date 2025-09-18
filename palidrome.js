function isPalindrome(str) {
  str = str.toLowerCase();
  
  let reversed = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  if (str === reversed) {
    console.log(" The given string is a palindrome!");
  } else {
    console.log("The given string is not a palindrome.");
  }
}
var input = process.argv[2];
isPalindrome(input);
