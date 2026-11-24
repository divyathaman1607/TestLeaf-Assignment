let browser="chrome"
function checkBrowserVersion(callbackvalue)
{
setTimeout(() => callbackvalue(browser), 2000)
}
function browserversion(browsername)
{
    console.log("browserversion :", browsername)
}
checkBrowserVersion(browserversion)