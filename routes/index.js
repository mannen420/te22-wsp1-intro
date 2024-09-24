import express from "express"

const router = express.Router()

router.get("/test", (request, response) => {
    response.send("hello world")
} )

router.get('/om', (request, response) => {
    response.render('om.njk', {
        message: 'Det här är om',
        title: 'Nunjucks OM'
    })
})

router.get('/', (request, response) => {
    console.log(request.query)
    const name = request.query.name
    console.log(name)
    response.render('index.njk', {
        title: 'hello',
        message: 'hej hej jag heter ${name}!'
        
    })
})

router.get('/watch',(request,response) => {
    const movieID = request.query.v
    console.log(movieID)



    const movies = {
        'tt0111161': {
            title: 'the shawshank redemtion',
            year: 1994
        }
    }
        const movie = movies[movies]
        console.log(movie)


        response.json(movie)


})

export default router