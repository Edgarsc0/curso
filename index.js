const express = require("express");
const app = express();
const mainRoutes = require("./routes")

app.use(express.json());
mainRoutes(app);

app.get("/", (req, res) => {
    res.status(200).json({
        status: 200
    })
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})