exports.render = function(req, res) {
    res.render('index', {
        title: "Avalúos Corporativo Naufal"
    });
};

/**inputName
 * inputEmail
 * inputSubject
 * inputMessage
 * Send an email when the contact from is submitted
 */
exports.sendMail = function(req, res) {

    var nodemailer = require('nodemailer');
    var mg = require('nodemailer-mailgun-transport');
    // This is your API key that you retrieve from www.mailgun.com/cp (free up to 10K monthly emails)
    var auth = {
        auth: {
            api_key: 'key-14d1d7873cbd3e5bee23204477bb847a',
            domain: 'sandbox5f5af0e452bc4faab2338c2266357b18.mailgun.org'
        }
    }
    var transporter = nodemailer.createTransport(mg(auth));

    var data = req.body;

    var mailOptions = {
        from: "conaufalWEB@naufal.mx",
        to: 'conaufal@yahoo.com.mx',
        subject: 'Mensaje de: ' + data.inputName + ' Asunto: ' + data.inputSubject,
        text: 'Mensaje de ' + data.inputName + '\n Asunto: ' + data.inputSubject + '\n Email: ' + data.inputEmail + '\n Mensaje: ' + data.inputMessage
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            res.send('error');
            return console.log(error);
        } else {
            res.send('sent');
        }

    });
};