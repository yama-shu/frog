const express = require("express");
const line = require("@line/bot-sdk");
const ngrok = require("ngrok");
require("dotenv").config();

const OpenAI = require("openai");

const app = express();

const openai = new OpenAI();

const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
};

const client = new line.messagingApi.MessagingApiClient({
  channelAccessToken: config.channelAccessToken,
});

app.use("/webhook", line.middleware(config));
app.post("/webhook", (req, res) => {
  Promise
  .all(req.body.events.map(handleEvent))
  .then((result) =>res.json(result))
  .catch((err) => {
    console.error(err);
    res.status(500).end();
  });
});

async function handleEvent(event) {
  //メッセージイベントのみを処理している
  //これから拡張性を求めるなら、メッセージイベントがtrueかどうかを確認し、それ以外のイベントは無視するようにするような実装の方が拡張性がありそう。
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  }

  const userMessage = event.message.text;

  console.log('User Message:', userMessage);

  try {
    const result = await createAiResponse( userMessage);
    console.log('Result:', result);

    return client.replyMessage({
      replyToken: event.replyToken,
      messages: [
        {
          type: "text",
          text: result,
        },
      ],
    });

  } catch (error) {
    console.error('Error generating content:', error);

    return client.replyMessage({
      replyToken: event.replyToken,
      messages: [
        {
          type: 'text',
          text: '申し訳ありませんが、現在お応えできません。'
        },
      ],
    });
  }
}

const port = process.env.PORT || 3000;
app.listen(port, async () => {
  try {
    const ngrokUrl = await ngrok.connect(port);
    console.log(`Server is running on ${port}`);
    console.log(`Ngrok URL: ${ngrokUrl}/webhook`);
  } catch (error) {
    console.error("Error while connecting with ngrok:", error);
  }
});

async function createAiResponse(userMessage) {
  const completion = await openai.chat.completions.create({
    model: "ft:gpt-4o-mini-2024-07-18:personal::AMfHgZWZ",
    messages: [
        { role: "system", content: "蛙化現象の判定を行ってください。" },
        {
            role: "user",
            content: userMessage,
        },
    ],
  });

  console.log('Completion:', completion.choices[0].message.content);
  return completion.choices[0].message.content;
}
