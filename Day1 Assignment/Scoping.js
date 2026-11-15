 // 1.Const /Let Datatype - inside and outside block logic//
 const browserVersion= "Chrome"
 function getBrowserVersion()
{
     if (browserVersion == 'Chrome')
    {
         let browserVersion= "Edge"
     console.log("Browser version inside the block",browserVersion)
    }
    console.log("Browser version outside the block and inside the function " , browserVersion);
 }
 getBrowserVersion()

/*output:Browser version inside the block Edge
 Browser version outside the block and inside the function  Chrome*/ 

// 2. Var Datatype = Inside block, Outside Block ,outside Function//

const browserVersion= 'Chrome'
function getBrowserVersion()
 {
    if (browserVersion == 'Chrome')
     {
       var browserVersion= "Edge"
        console.log("Browser version inside the block",browserVersion)
   }
    console.log("Browser version outside the block and inside the function " , browserVersion);
 }
     console.log("Browser version outside the block and outside the function " , browserVersion);

 getBrowserVersion()

/* Output: Browser version outside the block and outside the function  Chrome
Browser version outside the block and inside the function  undefined*/
