const PORT = process.env.PORT || 8001
const express = require('express')
const app = express()
const cheerio = require('cheerio')
const axios = require('axios')
const { response } = require('express')

app.get('/', (req, res) => {
    res.json('Welcome to the climate-change homepage')
})


const newspapers = [
    { address: 'https://www.hindustantimes.com/ht-insight/climate-change', source: 'hindu', base: 'https://www.hindustantimes.com' },
    { address: 'https://www.theguardian.com/environment/climate-crisis', source: 'guardian', base: '' },
]

app.get('/', (req, res) => {
    res.json('Welcome to homepage')
})
app.get('/news', (req, res) => {
    const articles = []
    axios.get('https://www.theguardian.com/environment/climate-crisis')
        .then((response) => {
            const html = response.data
            const $ = cheerio.load(html)

            $('a:contains("climate")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')
                articles.push({ title, url })
            })
            res.json(articles)
        })
        .catch((err) => console.log(err.code))
})

app.get('/newspaper', (req, res) => {
    const articles = []
    newspapers.forEach((newspaper) => {
        axios.get(newspaper.address)
            .then(response => {
                const html = response.data
                const $ = cheerio.load(html)
                $('a:contains("climate")', html).each(function () {
                    const heading = $(this).text()
                    const url = $(this).attr('href')
                    articles.push({ heading, url: newspaper.base+ url , source: newspaper.source })
                })
                res.json(articles)
            })
            .catch(err => console.log(err.code))
    })
})

app.get('/newspaper/:newsID', async(req,res)=>{
    const articles = []
    const newsID = req.params.newsID
    console.log(newsID)
    
    const newsPaper = newspapers.find(newsPaper=> newsPaper.source=== newsID)
    axios.get(newsPaper.address)
    .then((response)=>{
        const html = response.data
        const $ = cheerio.load(html)
        $('a:contains("climate")').each(function(){
            const title = $(this).text()
            const url = $(this).attr('href')
            articles.push({title,url: newsPaper.base+ url, source: newsPaper.source })
        })
        res.json(articles)
    })
    .catch(err=> console.log(err))
})

app.get('*', (req, res) =>{
    res.send('<h1>404 File not Found</h1>')
} )

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`)
})