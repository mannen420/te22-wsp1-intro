import express, { request, response } from "express"
import nunjucks from "nunjucks"
import morgan from "morgan"
import indexRouter from './routes/index.js'
import searchRouter from './routes/search.js'

const app = express()
nunjucks.configure('views', {
    autoescape: true,
    express: app,
})

app.use(express.static ('public'))

app.use(morgan("dev"))

app.use('/search', searchRouter)

nunjucks.configure('views', {
})

app.use('/', indexRouter)

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})

app.use((request, response) => {
    response.status(404).send('404 - not found')
});

app.use((request, response) => {
    response.status(404).render('404.njk',{
        title :'404 - not found',
    })
})