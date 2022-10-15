const jwt = require("jsonwebtoken");
const { jwtTokenKey } = require("../config");

const auth = async (req, res, next) => {
    try {
        const token = await req.cookies.authToken; // req.header("authToken");
        console.log("token : " + token);
        if (!token)
            return res
                .status(401)
                .json({ msg: "no auth token, access denied" });

        const verified = jwt.verify(token, jwtTokenKey);
        if (!verified)
            return res
                .status(401)
                .json({
                    msg: "token verification failed, authorization denied",
                });

        console.log(verified.id);

        req.user = verified.id;

        next();
    } catch (err) {
        console.log("error in middleware");
        res.status(500).json({ error: err.message });
    }
};
module.exports = auth;
