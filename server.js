const express = require("express");
const path = require("path");
const studentRoutes = require("./routes/studentRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", studentRoutes);

app.listen(PORT, () => {
    console.log(`SecureForm running at http://localhost:${PORT}`);
});