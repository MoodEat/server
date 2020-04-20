const bcrypt = require('bcryptjs');

class BcryptPass {
    static hashPassword(password) {
        return bcrypt.hashSync(password, 8);
    }

    static comparePassword(password, hash) {
        return bcrypt.compareSync(password, hash)
    }
}

module.exports = BcryptPass