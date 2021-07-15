function printHello(){
    console.log("Hello");
}

function blockFor1Sec(){
    //block js for sometime
    console.log("Blocker")
    setTimeout(printHello,1000);
}

// webBrowser JS Label
setTimeout(printHello,1000);
blockFor1Sec()
console.log("Me Frist");

