const express = require('express');
const path = require('path');
const RtmClient = require('@slack/client').RtmClient;
const CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS;
const RTM_EVENTS = require('@slack/client').RTM_EVENTS;

const google = require('googleapis');
const googleAuth = require('google-auth-library');

const bot_token = process.env.SLACK_BOT_TOKEN;

const app = express();
const auth = new googleAuth();
const rtm = new RtmClient(bot_token);

// Makes Snoop live
rtm.on(RTM_EVENTS.MESSAGE, (message) => {
  console.log(message);
  rtm.sendMessage('yo', message.channel);
})

rtm.start();



// Working in google calendar API



// app.set('slack', path.join(__dirname,'slack'));
// app.set('slack engine', 'js');





app.get('/', function(req, res) {
  res.send('yo');
})

app.listen(3000,
  console.log('We good to go on port 3000 captain')
);