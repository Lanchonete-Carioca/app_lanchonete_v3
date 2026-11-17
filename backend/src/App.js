const express = require("express");

<<<<<<< HEAD
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const productsRoutes = require("./routes/products.routes");

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productsRoutes);
=======
const app = express();

const userRoutes = require("./routes/user.routes");

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "API funcionando"
  });
});

app.use("/api/users", userRoutes);
>>>>>>> 8b6f417d58e6c712089b0e8095fa1b647d18cb73

module.exports = app;