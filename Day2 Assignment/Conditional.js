//Conditional Statement//
let browsername
let testname

function launchBrowser(browsername)
{
    if(browsername=="Chrome")
    {
        console.log("The browser name is", browsername);
        
    }else
    {
        console.log("The browser name is", browsername)
    }
}
function runTests(testname)
{
    switch(testname)
    {
        case "Sanity":
            console.log("Sanity Test")
            break;
        case "Smoke":
            console.log("Smoke Test")
            break;
        case "Regression":
            console.log("Regression Test")
            break;
        default:
            console.log("Smoke")
    }
}
launchBrowser("Chrome")
launchBrowser("Edge")
runTests()
runTests("Sanity")

/*Output: The browser name is Chrome
The browser name is Edge
Smoke
Sanity Test*/