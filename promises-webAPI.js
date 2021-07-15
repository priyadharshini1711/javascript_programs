function display(data){
    console.log(data)
}

function printhello(){
    console.log("Hello")
}

function blockFor3Sec(){

}

setTimeout(printhello,0);

const fetch = require("node-fetch");
const futureData = fetch("https://twitter.com/will/tweets/1")
futureData.then(display);

blockFor3Sec()

console.log("Me First...!")
 