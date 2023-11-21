const express = require("express");
const bodyParser = require("body-parser")

const aboutRouter = require("./routes/about");
const shippingRouter = require("./routes/bulkShipping");

const PORT = 7000;
const HOST_NAME = "localhost";

const app = express();
app.use(express.static("client"));
app.use(bodyParser.urlencoded({extended: true}));

app.use("/bulkShipping", shippingRouter);
app.use("/about", aboutRouter);


app.listen(PORT, HOST_NAME, function() {
    console.log(`Server running at ${HOST_NAME}:${PORT}`)
})