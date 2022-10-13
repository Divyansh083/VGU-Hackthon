const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./model/user");
const bcrypt = require("bcrypt");
const { constants } = require("buffer");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "sdfbsdhfgbsdifhsdkjfghsdkjgfsdfgvsdfijghvbffgdsfgsdfg";
//^yes this is random
mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.mtkw3nh.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const app = express();
app.use("/", express.static(path.join(__dirname)));
app.use(bodyParser.json());

app.post("/api/login", async (req, res) => {
    const email = req.body.login_email;
    const password = req.body.login_password;
    const user = await User.findOne({ email }).lean();

    if (!user) {
        return res.json({ status: "error", error: "User not found" });
    }

    if (bcrypt.compare(password, user.password)) {
        //the password comparison with the one in db with given email is true

        const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET);

        return res.json({ status: "logged in", data: token });
    }
    return res.json({ status: "error", error: "User not found" });
});

app.post("/api/register", async (req, res) => {
    console.log(req.body);
    // const password = req.body.reg_password;
    const name = req.body.reg_name;
    const email = req.body.reg_email;
    const password = await bcrypt.hash(req.body.reg_password, 15);
    // console.log(await bcrypt.hash(password, 15))
    try {
        const response = await User.create({
            name,
            email,
            password,
        });
        console.log("User created successfully: ", response);
    } catch (error) {
        if (error.code === 11000) {
            //error code 11000 represent duplication error
            return res.json({
                status: "error",
                error: "Email already in use.",
            });
        }
        throw error;
    }
    res.json({ status: "ok" });
});

app.post("/api/change-password", async (req, res) => {
    //not tested and not in use
    const { token, newpassword } = req.body;
    try {
        const user = jwt.verify(token, JWT_SECRET);
        const _id = user.id;
        const hashedPassword = await bcrypt.hash(newpassword, 15);
        await User.updateOne({ _id }, { $set: { password: hashedPassword } });
        res.json({ status: "ok" });
    } catch (error) {
        res.json({ status: "error", error: "Invalid token" });
    }
});

app.listen(9999, () => {
    console.log("Server is up at 9999");
});
