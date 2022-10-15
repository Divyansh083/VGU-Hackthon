const nodemailer = require("nodemailer");
const { projectMail, projectMailpass } = require("./config");

const transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: projectMail, //'smartindiahackathonproject@gmail.com',
        pass: projectMailpass, //'zqbelxnvciudmjjv',
    },
});

module.exports.SendEmailVerification = function (email, message) {
    console.log("check");
    transport
        .sendMail({
            from: projectMail, //'smartindiahackathonproject@gmail.com',
            to: email,
            subject: "Please confirm your account",

            html: message,
        })
        .catch((err) => console.log(err));
};
