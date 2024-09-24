import express, { request, response } from "express"


const router = express.Router()

router.get("/", (request, response) => {
    const query = request.query.q || ""
    const names = ["Jhon", "Jane", "Alice", "Bob" ]
    const filterednames = names.filter((name) =>
        name.toLowerCase().includes(query.toLowerCase())
    )
    response.render("search.njk", {
        title: "search",
        query,
        names: filterednames,
    })
})


export default router