function printHello(){
    console.log("Hello");
}

function blockFor1Sec(){
    //block js for sometime
    let t = 0;
    for(var i = 0; i<10000000000 ; i++)
     t++;
}

// webBrowser JS Label
setTimeout(printHello,1000);
blockFor1Sec()
console.log("Me Frist");