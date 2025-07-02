import express from "express";
import { createClient } from "redis";

const app = express()
app.use(express.json())

const client = createClient()
client.on("error", (err) => console.log('redis client error', err))

app.post('/submit', async (req, res) => {
    const { problemId, code, language } = req.body;
    await client.lPush("submission", JSON.stringify({problemId, code, language}))
    res.send("submission done ")
})
app.get("/", async (req, res) => {
    const submissions = await client.lRange("submission", 0, -1)
    res.send(submissions)
})

async function startServer() {
    try {
        await client.connect();
        console.log("connected redis");

        app.listen(5000, () => {
            console.log("server is running on port 5000");
        })
    } catch (e) {
        console.error(e);
    }
}
startServer()