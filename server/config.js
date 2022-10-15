const dotenv = require('dotenv').config();

const {
    PORT,
    db,
    jwtTokenKey,
    projectMail,
    projectMailpass
} = dotenv.parsed



module.exports = {
    PORT,
    db,
    jwtTokenKey,
    projectMail,
    projectMailpass
}
