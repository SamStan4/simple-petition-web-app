const express = require("express");
const sqlite3 = require("sqlite3");
const path = require("path");

const viewRouter = express();

const dbRead = new sqlite3.Database(path.join(__dirname, "/../signatures.db"), (err) => {
    if (err) {
        console.log("error connecting to db");
    }
});

const pull = async () => {
    return new Promise((resolve, reject) => {
        const sqlString = `
        SELECT * FROM signatures;
        `;
        dbRead.all(sqlString, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
};

viewRouter.get("/petition", async (req, res) => {
    try {
        const data = await pull();
        res.render("petition", {
            signatures: data
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("internal server error");
    }
});

module.exports = viewRouter;