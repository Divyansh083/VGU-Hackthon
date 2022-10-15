const nodemailer = require("nodemailer");
const { projectMail, projectMailpass } = require("./config");

const transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: projectMail,
        pass: projectMailpass, 
    },
});

module.exports.SendEmailVerification = function (email, message) {
    console.log("check");
    transport
        .sendMail({
            from: projectMail,
            to: email,
            subject: "Please confirm your account",

            html: message,
        })
        .catch((err) => console.log(err));
};
