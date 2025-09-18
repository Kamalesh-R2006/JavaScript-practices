function reversestring(str){
    var reversed="";
    for(var i= str.length-1;i>=0;i--)
    {
        reversed +=str[i];
    }
    console.log("The reversed String is "+reversed);   
}
var original =process.argv[2];;// Here the input word can be give in terminal like ( node reverse.js farmer )for start running 
reversestring(original) 