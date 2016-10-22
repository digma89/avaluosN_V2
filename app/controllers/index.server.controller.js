exports.render = function(req, res) {
    res.render('index', {
        title: "Naufal Avalúos"
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
    //var transporter = nodemailer.createTransport('smtps://corporativonaufal%40gmail.com:naufal/avaluos1984@smtp.gmail.com');
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        auth: { user: 'corporativonaufal@gmail.com', pass: 'naufal/avaluos1984' },
        secure: true
    });

    var data = req.body;

    var mailOptions = {
        from: data.inputName,
        to: 'digma89@hotmail.com',
        subject: 'Mensaje de ' + data.inputName + ' Asunto: ' + data.inputSubject,
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