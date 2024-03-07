var express = require('express');
var router = express.Router();

const messages = [
   {
     text: "Hi there!",
     user: "Amando",
     added: new Date()
   },
   {
     text: "Hello World!",
     user: "Charles",
     added: new Date()
   }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bungus', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', {});
  console.log("I am Geeeeeeeeeeeeting")
});

router.post('/new', (req, res) => {
  let messageUser = req.body.authorName
  let messageText = req.body.message
  messages.push({text: messageText, user: messageUser, added: new Date()});
  res.redirect('/')
})

module.exports = router;
