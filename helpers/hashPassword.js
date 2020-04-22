const bcrypt = require('bcryptjs');

class BcryptPass {
    static hashPassword(password) {
        var salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    }

    static comparePassword(password, hash) {
        let status = bcrypt.compareSync(password, hash)
        return bcrypt.compareSync(password, hash)
    }
}

module.exports = BcryptPass