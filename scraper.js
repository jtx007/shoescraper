require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000
const request = require('request')
const requestPromise = require('request-promise')

app.use(cors());

app.listen(port, () => console.log('Scraper armed and ready'))



 const scraperFunction = async (pageNumber) => {
    return await requestPromise(`https://stockx.com/api/browse?currency=USD&order=DESC&productCategory=sneakers&sort=most-active&page=${pageNumber}`, (err, res, body) => {
                if (err) {
                    return console.log(err);
                }
                return body
            })
        
}

let shoesArray = []

const jsonParserforResult = (result) => {
    let json = JSON.parse(result)
    addToShoesArray(json.Products);
}

const addToShoesArray = (products) => {
    shoesArray = shoesArray.concat(products);
    console.log(shoesArray.length)
}

scraperFunction(1)
.then(jsonParserforResult)
.then(() => scraperFunction(2))
.then(jsonParserforResult)
.then(() => scraperFunction(3))
    .then(jsonParserforResult)
    .then(() => scraperFunction(4))
        .then(jsonParserforResult)
        .then(() => scraperFunction(5))
            .then(jsonParserforResult)
            .then(() => scraperFunction(6))
                .then(jsonParserforResult)
                .then(() => scraperFunction(7))
                    .then(jsonParserforResult)
                    .then(() => scraperFunction(8))
                        .then(jsonParserforResult)
                        .then(() => scraperFunction(9))
                            .then(jsonParserforResult)
                            .then(() => scraperFunction(10))
                                .then(jsonParserforResult)





