var app = require('express')();
var http = require('http');
var bodyParser = require('body-parser');

var sendgrid = require('sendgrid');
var mailHelper = sendgrid.mail;

var sg = sendgrid(process.env.SENDGRID_API_KEY);

var port = process.env.PORT || 9999;

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use((req, res, next) => {
  // TODO: Once we have deployed and know our site domain, change this
  // to increase security
  res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  next();
});

app.post('/', (req, res) => {
  var from_email = new mailHelper.Email(req.body.email);
  var to_email = new mailHelper.Email(process.env.EMAIL);
  var subject = 'New email from website from ' + req.body.name;
  var message = new mailHelper.Content('text/plain', req.body.message);

  var email = new mailHelper.Mail(from_email, subject, to_email, message);

  var sgReq = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: email.toJSON(),
  });

  sg.API(sgReq, (error, sgRes) => {
    console.log(sgRes.statusCode);
    console.log(sgRes.body);
    console.log(sgRes.headers);

    if(error) {
        console.log(error);
        res.status(500).send({});
    } else {
      res.send({});
    }
  });
});

http.createServer(app).listen(port);