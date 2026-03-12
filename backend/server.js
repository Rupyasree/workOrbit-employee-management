const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const employeeRoutes = require("./routes/employeeRoutes");

const app = express();

/* Middleware */
app.use(cors());
app.use(express.json());

/* MongoDB Atlas Connection */
mongoose.connect(
"mongodb+srv://rupyasree:Rupya%40karre@cluster0.lzramwj.mongodb.net/employeeDB?retryWrites=true&w=majority"
)
.then(() => {
console.log("MongoDB Atlas Connected");
})
.catch((err) => {
console.log("MongoDB Connection Error:", err);
});

/* Routes */
app.use("/api/employees", employeeRoutes);

/* Server */
const PORT = 5000;

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});