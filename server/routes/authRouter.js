const express = require("express");
const authRouter = express.Router();
const User = require("../models/user.js");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("../nodemailer.config.js");
const auth = require("../middleware/user");
const { jwtTokenKey } = require("../config");

authRouter.post("/user/forgotpassword", async (req, res) => {
    try {
        const useremail = req.body.useremail;
        let user = await User.findOne({ useremail: useremail });
        if (user) {
            const token = await jwt.sign({ useremail: useremail }, jwtTokenKey);

            //  user.forgotPasswordCode = token;
            user = await User.findByIdAndUpdate(
                { _id: user._id },
                { $set: { forgotPasswordCode: token } }
            );

            user = await user.save();

            nodemailer.SendEmailVerification(
                user.useremail,
                `<h1>Reset password</h1>
                   <h2>Hello ${user.username}</h2>
                  
                   <h3> reset the password </h3>
                   
                   <form action = "http://localhost:6060/confirm/${token}">
                   <div>
                     Password : <input type = "text" name = "userpassword">
                   </div>

                   <div>
                     <input type = "submit" value = "reset">
                   </div>`
            );

            res.status(200).json({ msg: "ok" });
        } else {
            res.status(400).json({
                message:
                    "user with this email does not exists please signup first",
            });
        }
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
});

authRouter.get("/confirm/:code", async (req, res) => {
    try {
        const forgotPasswordCode = req.params.code;
        let user = await User.findOne({ forgotPasswordCode });
        if (user) {
            const password = req.query.userpassword;
            const hashedPassword = (
                await bcryptjs.hash(password, 8)
            ).toString();
            await User.findByIdAndUpdate(
                { _id: user._id },
                {
                    $set: {
                        userpassword: hashedPassword,
                        forgotPasswordCode: "",
                    },
                }
            );

            res.status(200).send(`<h1>success</h1>
      <a href="http://localhost:6060/login">Go to Login Page!</a>`);
        } else {
            res.status(200).json({ message: "link is expired" });
        }
    } catch (e) {
        console.log("error", e);
    }
});

// signup API

// user signup

authRouter.post("/user/signup", async (req, res) => {
    try {
        const name = req.body.username;
        const email = req.body.useremail;
        const password = req.body.userpassword;
        const type = req.body.usertype;

        
        const isUserAlreadyExists = await User.findOne({ useremail: email });

        if (isUserAlreadyExists) {
            return res.status(400).json({ message: "Email in use" });
        }

        const hashedPassword = (await bcryptjs.hash(password, 8)).toString();

        const token = jwt.sign({ useremail: email }, jwtTokenKey);

        let user = User({
            username: name,
            useremail: email,
            userpassword: hashedPassword,
            usertype: type,
            confirmationCode: token,
        });

        user = await user.save();
        res.json(user);

        nodemailer.SendEmailVerification(
            user.useremail,
            `<h1>Email Confirmation</h1>
                <h2>Hello ${user.username}</h2>
                <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
                <a href=http://localhost:6060/confirmMail/${token}> Click here</a>`
        );
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ error: e.message });
    }
});

authRouter.get("/confirmMail/:confirmationCode", async (req, res) => {
    try {
        let user = await User.findOne({
            confirmationCode: req.params.confirmationCode,
        });

        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }

        user.status = "active";

        user = await user.save();

        res.send(`<div className="container">
        <header className="jumbotron">
          <h3>
            <strong>Account confirmed!</strong>
          </h3>
        </header>
        <a href="http://localhost:3000/login">
          Please Login
        </a>
      </div>`);
    } catch (e) {
        console.log("error", e);
    }
});

// login api
authRouter.post("/user/login", async (req, res) => {
    try {
        const email = req.body.useremail;
        const password = req.body.userpassword;

        const user = await User.findOne({ useremail: email });

        if (!user) {
            return res.status(400).json({
                message: "You are not registered",
            });
        }

        const isPasswordCorrect = await bcryptjs.compare(
            password,
            user.userpassword
        );
        if (!isPasswordCorrect) {
            return res.status(400).json({ msg: "Incorrect password" });
        }

        if (user.status !== "active") {
            return res.status(400).send({
                msg: "verification pending",
            });
        }
        
        const token = jwt.sign({ id: user._id }, jwtTokenKey);
        console.log(req.cookies.authToken);
        res.cookie("authToken", token, {
            httpOnly: true,
        })
            .status(200)
            .json(user);
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ error: e.message });
    }
});



authRouter.get("/tokenIsValid", async (req, res) => {
    try {
        const token = req.cookies.authToken;
        console.log(token);

        if (!token) {
            return res.json(false);
        }

        const verified = jwt.verify(token, jwtTokenKey);
        if (!verified) return res.json(false);

        const user = await User.findById(verified.id);
        if (!user) return res.json(false);

        if (user.status !== "active") return res.json(false);

        return res.json(true);
    } catch (e) {
        console.log("inside catch");
        res.status(500).json({ error: e.message });
    }
});

authRouter.get("/home", auth, async (req, res) => {
    const user = await User.findById(req.user);

    if (user.status !== "active") {
        return res.status(400).send({
            msg: "pending account, please verify your email",
        });
    }

    res.status(200).json(user);
});

module.exports = authRouter;
