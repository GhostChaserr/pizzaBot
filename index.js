'use strict';
const BootBot = require('bootbot');
const config = require('config');

const bot = new BootBot({
  accessToken: config.get('accessToken'),
  verifyToken: config.get('verifyToken'),
  appSecret: config.get('appSecret')
});



/**
 * Demo handler to echo back whatever the user says.
 * Feel free to delete this handler and start hacking!
 */
bot.on('message', (payload, chat) => {
    chat.say({
      text: 'Favorite color?',
      buttons: [
        { type: 'postback', title: 'Red', payload: 'FAVORITE_RED' },
        { type: 'postback', title: 'Blue', payload: 'FAVORITE_BLUE' },
        { type: 'postback', title: 'Green', payload: 'FAVORITE_GREEN' }
      ]
    });
});

// Listen Hear message
bot.hear(["პროდუქტები"], (payload,chat) => {
  chat.say({
    cards: [
        { title: '😅😅', image_url: 'https://scontent.fprn1-1.fna.fbcdn.net/v/t15.13418-10/p370x247/52063931_808166469575942_2311605833122709504_n.jpg?_nc_cat=106&_nc_ht=scontent.fprn1-1.fna&oh=fa00211a8bdf83959a23bac5971a19f8&oe=5CEE1050', default_action: {
            type: "web_url",
            url: "https://web.facebook.com/SwedenViral/videos/795477234150322/",
            webview_height_ratio: "tall"
            },
            buttons:[
              {
                type:"web_url",
                url:"https://web.facebook.com/SwedenViral/videos/795477234150322/",
                title:"Tagga någon",
                webview_height_ratio: "tall"
              }              
            ]
        }, 
        { title: '😂🤣', image_url: 'https://scontent.fprn1-1.fna.fbcdn.net/v/t15.13418-10/p370x247/52171349_1186996514800023_9059384507546730496_n.jpg?_nc_cat=1&_nc_ht=scontent.fprn1-1.fna&oh=b9ca303276cbbeb131d5c659b2812e54&oe=5CE89DDB', default_action: {
            type: "web_url",
            url: "https://web.facebook.com/SwedenViral/videos/241869170093762/",
            webview_height_ratio: "tall"
            },
            buttons:[
              {
                type:"web_url",
                url:"https://web.facebook.com/SwedenViral/videos/241869170093762/",
                title:"Berätta",
                webview_height_ratio: "tall"
              }              
            ]
        }, 
      { title: 'The most interesting and satisfying video you\'ll ever watch...', image_url: 'https://scontent.fprx1-1.fna.fbcdn.net/v/t15.5256-10/48349980_984643338399874_7749589283798777856_n.jpg?_nc_cat=102&_nc_ht=scontent.fprx1-1.fna&oh=d4b8f45f9115d561f66e519ec3cad053&oe=5D1DA1BB', default_action: {
    type: "web_url",
            url: "https://web.facebook.com/SwedenViral/videos/1021393401391534/",
            webview_height_ratio: "tall"
    },
    buttons:[
          {
            type:"web_url",
            url:"https://web.facebook.com/SwedenViral/videos/1021393401391534/",
            title:"Kommentar",
            webview_height_ratio: "tall"
          }              
        ]
      },
        { title: 'Hur jag lämnande jobbet idga...🤣😂', image_url: 'https://scontent.fprn1-1.fna.fbcdn.net/v/t15.13418-10/p235x350/52142869_152469279005397_1516129000290779136_n.jpg?_nc_cat=1&_nc_ht=scontent.fprn1-1.fna&oh=0aed9824d288ce94f4ed426421c2d910&oe=5D282FFA', default_action: {
            type: "web_url",
            url: "https://web.facebook.com/SwedenViral/videos/816827101985067/",
            webview_height_ratio: "tall"
            },
            buttons:[
              {
                type:"web_url",
                url:"https://web.facebook.com/SwedenViral/videos/816827101985067/",
                title:"Tagga någon",
                webview_height_ratio: "tall"
              }              
            ]
  }   
    ]
});

})


bot.setGetStartedButton((payload, chat) => {
  const welcome1 = `Hey there, trainer! How well you think you ...`;
  const welcome2 = `Type START or PLAY to join the challenge!`;
  const options = { typing: true };
  chat.say(welcome1, options)
    .then(() => chat.say(welcome2, options));
});


bot.start(config.get('botPort'));
