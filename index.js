// index.js

/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");
var MongoClient = require('mongodb').MongoClient;
/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

/**
 * Routes Definitions
 */
app.get("/", (req, res) => {
    res.render("index", {title: "Home"});
});

app.get("/profile", (req, res) => {
    res.render("profile", { title: "Profile", profile: {name: "Jason Bannister "}});
});

app.get("/education", (req, res) => {
    queryDB("education", res);
});

app.get("/work", (req, res) => {
    queryDB("work", res);
});

/**
 * Helper Functions
 */
function queryDB(collection, res) {
    const uri = "mongodb+srv://Guest:GuestUser123@nodejs.jp6pk.mongodb.net/JasonB_Database?retryWrites=true&w=majority"
    MongoClient.connect(uri, function(err, db) {
        if (err) throw err;
        var databaseObject = db.db("JasonB_Database");
        var sortDescending = { _id: -1 };
        databaseObject.collection(collection).find({}).sort(sortDescending).toArray(function(err, result) {
            if (err) throw err;
            gradeArray = result;
            res.render(collection, { title: collection, "resultArray": gradeArray});
            db.close();
        });
    });
}

/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`listening to requests on port: ${port}`);
})