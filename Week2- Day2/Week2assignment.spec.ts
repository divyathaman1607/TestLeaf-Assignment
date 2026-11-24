import { chromium, webkit,test } from "@playwright/test";
// Flipkart launch in Webkit browser //
test("To launch a browser webkit", async () => {
    let browser1= await webkit.launch({headless: false}) // Launching the webkit browser
    let context1=await browser1.newContext()  
    let page1= await context1.newPage()
    await page1.goto("https://www.flipkart.com/")   //flipkart url is given
   let pagetitle1= await page1.title()    // Getting the page title
    let pageURL1= await page1.url()       // getting the page URL
console.log("Page Title for Flipkart ", pagetitle1)   // printing the flipkart Page title
console.log("Page URL for Flipkart", pageURL1)        // Printing the flipart PageURL
})

// Redbus launch in Edge browser //
test("To launch a browser Edge", async () => {
    let browser= await chromium.launch({headless: false, channel:"msedge"}) // Launching the chromium and specify the edge browser in the channel
    let context=await browser.newContext()
    let page= await context.newPage()
    await page.goto("https://www.redbus.in/")  // Redbus url is given
    let pagetitle= await page.title()   // Getting the page title
    let pageURL= await page.url() // getting the page URL
    console.log("Page Title for Redbus ", pagetitle) // printing the Redbus Page title
    console.log("Page URL for redbus", pageURL) // Printing the Redbus PageURL
})


/* Output: 1. Flipkart page is opening in webkit browser and the redbus page opens in edge browser */
/* Output Printed for flipkart: 
Page Title for Flipkart  Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!
Page URL for Flipkart https://www.flipkart.com/ */
/* Output Printed for Redbus :
Page Title for Redbus  Bus Booking Online and Train Tickets at Lowest Price - redBus
Page URL for redbus https://www.redbus.in/ */
