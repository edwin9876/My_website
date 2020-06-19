const express = require('express')
const hbs = require('express-handlebars')
const app = express()
const fs = require('fs')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'handlebars')
app.engine('handlebars', hbs({
}))

let info

fs.readFile('information.json', (err, data) => {
    if (err) { throw err }
    info = JSON.parse(data)[0]
})

app.get('/', (req, res) => {
    res.render('main', { layout: false, work: info.workExp, edu: info.education, extra: info.extra, bootcamp: info.bootcamp })
})

app.post('/', (req, res) => {
    let contact = JSON.stringify(req.body)
fs.writeFile('info.json',contact,(err)=>{
    if (err) { throw err }
    console.log('success')
})
    res.render('main', { layout: false, work: info.workExp, edu: info.education, extra: info.extra, bootcamp: info.bootcamp })

})
app.listen(8000)