const express = require("express");
const {OpenAI} = require('openai');
const cors = require("cors"); // Add this line


const PORT = process.env.PORT || 3001;
const secret = "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";

const app = express();
app.use(express.json());
app.use(cors());

const openai = new OpenAI({
    apiKey: secret // This is also the default, can be omitted
  });



const getResponse = async (prompt) => {
    
    console.log(prompt);
    const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{"role": "user", "content": prompt}],
    });
    let data = chatCompletion.choices[0].message.content;
    //console.log(data);
    return data;
};


app.post("/api", (req, res) => {
    console.log("hello");
    console.log("received: ",req.body.message);
    let prompt = req.body.message;
    //get openAI info and send as message
    getResponse(prompt)
    .then((data) => {
    console.log(data);
    res.json({ message: data });
    })

    let message = "Hello from server!"
  });
  

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});