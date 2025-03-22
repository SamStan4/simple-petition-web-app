const express = require("express");
const sqlite3 = require("sqlite3");
const path = require("path");

const formRouter = express();

const dbWrite = new sqlite3.Database(path.join(__dirname, "/../signatures.db"), (err) => {
    if (err) {
        console.log("error connecting to db");
    }
});

const upload = async (name, email, city, state) => {
    return new Promise((resolve, reject) => {
        const sqlString = `
            INSERT INTO signatures (signatureName, signatureEmail, signatureCity, signatureState)
            VALUES (?, ?, ?, ?);
        `;
        dbWrite.run(sqlString, [name, email, city, state], (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
};

formRouter.post("/submit", async (req, res) => {
    const { name, email, city, state } = req.body;
    if (!name || !email || !city || !state) {
        return res.status(400).send("<h1>Missing required fields!</h1>");
    }
    try {
        await upload(name, email, city, state);
    } catch (err) {
        console.error(err);
    } finally {
        res.redirect("/views/petition");
    }
});

module.exports = formRouter;