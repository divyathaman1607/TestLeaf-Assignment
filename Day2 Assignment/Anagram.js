// length of the last word in the string//
let Line="Playwright Assignment Day2"
let Splitword= Line.split(" ") // String to Array : Splitting each word 
let Lengtharray=Splitword.length //Length of the Array
let Lastword=Splitword[Lengtharray-1] // array index starts from 0 so,length-1
console.log(Lastword.length) // Length of the last word
//Output:4

/*Anagram*/
let string1
let String2

function Anagram(string1, String2)
{
    let word1=string1.split("").sort() // Split the string and sort the array letters
    let word2=String2.split("").sort()// Split the string and sort the array letters
    let wordjoin1= word1.join("") // combine all elements of an array into a single string.
    let wordjoin2= word2.join("") //combine all elements of an array into a single string.
console.log("sorted words",wordjoin1)
console.log("sorted words",wordjoin2)
if(wordjoin1===wordjoin2)  //Strict equality
{
    console.log("Anagram")
}
else
{
    console.log("not a Anagram")
}
}
Anagram("listen","silent")
Anagram ("hello" ,"word")
/* Output :sorted words eilnst
sorted words eilnst
Anagram
sorted words ehllo
sorted words dorw
not a Anagram */