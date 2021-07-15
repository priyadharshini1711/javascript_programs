function display(data){
    console.log(data)
}
const fetch = require("node-fetch");
const futureData = fetch("https://twitter.com/will/tweets/1")
futureData.then(display);

const data1 = fetch('http://example.com/movies.json')
data1.then(display)

console.log(data1)
 