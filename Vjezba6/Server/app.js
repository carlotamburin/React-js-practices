// Postavljanje za bazu
const express = require("express");
const app = express();
const cors = require("cors");
const result = require("dotenv").config();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
// Dohvacamo komponente
const User = require("./models/userModel");
const Artikli = require("./models/ArtiklModel");

//jwt
const { signJwt, verifyJwt } = require("./jwt");

// Rute
const categoryRouter = express.Router();
const subCategoryRouter = express.Router();
const resultRouter = express.Router();
const itemZaKorasicu = express.Router();
userRouter = express.Router();

// povezivanje na bazu
db = mongoose.connect("mongodb://localhost:3000/artikli");
const connection = mongoose.connection;

// Provjeravamo jeli konekcija uspjesna

connection.on("connected", () => {
  console.log("Connected to mongo, nice");
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Krece body
//Register
userRouter.route("/register").post((req, res) => {
  console.log(req.body.email + req.body.password);
  User.find({ email: req.body.email }, function (error, users) {
    if (error || users.length > 0) {
      console.log(users.length);
      return res.send(error);
    }
    let user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    user.save();
    return res.json(user);
  });
});
app.use("/api", userRouter);

//login
userRouter.route("/login").post((req, res) => {
  User.find({ email: req.body.email }, function (error, users) {
    if (error || users.length === 0) {
      return res.send(error);
    }
    if (req.body.password !== users[0].password) {
      return res.send("Wrong password");
    }
    const token = signJwt(users[0]._id);
    return res.json({ accessToken: token, user: users[0].email });
  });
});

//Kategorije
categoryRouter.route("/kategorije").get(verifyJwt, (req, res) => {
  //console.log(process.env.SECRET); provjera da smo ucitali SECRET iz .env-a
  Artikli.find().distinct("name", function (error, kategorije) {
    //distinct iz mongoose-a
    if (error) {
      return res.send(error);
    }
    return res.json(kategorije);
  });
});
app.use("/api", categoryRouter);

//Pod kategorije
subCategoryRouter.route("/podKategorije").get((req, res) => {
  const query = {}; //filter objekt za upit u bazu preko mongoose-a
  if (req.query.artikl) {
    query.name = req.query.artikl;
  }
  Artikli.find(query, (err, subGenres) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(subGenres);
    }
  });
});

app.use("/api", subCategoryRouter);
//Rezultat
resultRouter.route("/rezultat").get((req, res) => {
  const query = {}; //filter objekt za upit u bazu preko mongoose-a
  if (req.query.artikl) {
    query.name = req.query.artikl;
  }
  Artikli.find(query, (err, subGenres) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(subGenres);
    }
  });
});
app.use("/api", resultRouter);

//Item za kosaricu
itemZaKorasicu.route("/kosaricaItem").get((req, res) => {
  const query = {}; //filter objekt za upit u bazu preko mongoose-a
  if (req.query.kategorija) {
    query.name = req.query.kategorija;
  }
  Artikli.find(query, (err, kategorije) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(kategorije);
    }
  });
});
app.use("/api", itemZaKorasicu);

// Poruke o uspjesnom spajanju
app.get("/", (req, res) => {
  res.send("Welcome to my API!!!:))))");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
