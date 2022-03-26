const express = require("express");
const app = express();
const PORT = process.PORT || 5555;


app.use(express.static("public"))

app.listen(PORT, () => {console.log("App running on PORT " + PORT )})