const express = require('express');

const PORT = process.env.PORT || 3001;

// Initiate the server
const app = express();

// Parse incoming String/Array data
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Parse incoming JSON data
app.use(express.json());
app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});