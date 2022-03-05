const express = require('express')
const app = express()

app.use(express.static('public'));

const router = require("./routers/router.js");
app.use(router.router);


const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Server running in port ${PORT} :)`)
})