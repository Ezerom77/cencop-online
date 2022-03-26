const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");

// con esto pueod manejar datos en el body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// middleware de aplicaion
app.use(
  session({ secret: "CENCOP key", resave: false, saveUninitialized: false })
);

//require of routes
const mainRouter = require("./routes/mainRouter");
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");

// method override  PUT & DELETE
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

// Start Server
app.listen(process.env.PORT || 3000, () =>
  console.log("servidor corriendo en puerto 3000")
);
//Config
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../src/views"));

app.use(express.static("public"));
// Routes
app.use("/", mainRouter);
app.use("/users", userRouter);
app.use("/products", productRouter);
