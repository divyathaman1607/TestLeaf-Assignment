//Palindrome code//
let Word
function palindrome(Word)
{
let Word1=Word.split("") //Split the characters of the string in an array
let Word2=Word1.reverse().join("") // Reverse the elements in the array and converting the array into string
if(Word=== Word2)
{
    console.log("it is a palindrome")
}
else
{
    console.log("It is not a palindrome")
}
}
palindrome("Hello")
palindrome("RadaR")

/* Output:It is not a palindrome
it is a palindrome*/