import express from "express";

const app = express();

app.get("/", (request, response) => {
    console.log(`log`);
    return response.send("Olar");
});

app.listen(3333);
