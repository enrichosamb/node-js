const express = require("express")
const app = express()

const port = 5050

app.listen(port, () => console.log(`Server is running in port ${port}`))

app.get("/test", (req, res, next) => {
    try {
        res.status(200).json({
            message: "successfull to get api"
        })
    } catch (error) {
        res.status(400).json({
            message: "error!"
        })        
    }
})

app.get("/test/2", (req, res, next) => {
    try {
        res.status(200).json({
            message: "successfull to get api"
        })
    } catch (error) {
        res.status(400).json({
            message: "error!"
        })        
    }
})