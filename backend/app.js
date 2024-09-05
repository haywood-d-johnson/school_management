const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
const port = process.env.PORT || 3001;

mongoose.connect("mongodb://localhost:27017/school_management", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use("/api", routes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
