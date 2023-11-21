const express = require("express");
const https = require('https')

const shippingRoute = express.Router();
shippingRoute.get("/", function(req, res){
    res.sendFile(__dirname, + "index.html")   
})

shippingRoute.post("/", function(req, res){
        const company = req.body.companyName
        const appiKey = "Your API Key" 

        // const url = "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&amp;appid="+appiKey+"&amp;units="+unit+""
        // https.get(url, function(response){
        //     response.on("data", function(chunk){
        //         const responseData = JSON.parse(chunk);
        //         const temperature = responseData.main.temp;
        //         const weatherDes = responseData.weather[0].description;
        //         const icon = responseData.weather[0].icon;
        //         const imageURL = "http://openweathermap.org/img/wn/"+ icon + "@2x.png";
        //         const cityName = responseData.name;
        //         res.write(`&lt;h1&gt;The weather is ${temperature} degree celsius in ${cityName} and the description is ${weatherDes} &lt;/h1&gt;`)
        //         res.write("&lt;img src="+ imageURL +"&gt;")
        //         res.send()
        //     })
        // })
})
module.exports = shippingRoute