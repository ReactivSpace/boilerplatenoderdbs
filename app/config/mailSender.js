'use strict';
const config = require('./environment.config');

module.exports.sendEmail = (sentTo, sentFrom, subject, html) => {
    var helper = require('sendgrid').mail;
    var fromEmail = new helper.Email('support@community');
    var toEmail = new helper.Email(sentTo);
    var subject = subject;
    var content = new helper.Content('text/html', html);
    var mail = new helper.Mail(fromEmail, subject, toEmail, content);

    var sg = require('sendgrid')(config.sendGridApiKey || process.env.sendGridApiKey);
    var request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON()
    });

    sg.API(request, function (error, response) {
        if (error) {
            console.log('Error response received');
        }
        console.log(response.statusCode);
        console.log(response.body);
        console.log(response.headers);
    });

}


