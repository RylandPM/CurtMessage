const bcrypt = require("bcrypt");

module.exports = {
  login: (req, res, next) => {
    const { username, password } = req.body;
    const db = req.app.get("db");
    db.check_if_user_exists(email).then(userFound => {
      if (!userFound[0]) {
        res.status(200).send("Incorrect CURT/KURT");
      } else {
        bcrypt
          .compare(password, userFound[0].password)
          .then(matchedPassword => {
            if (matchedPassword) {
              const { username, email, user_id } = userFound[0];
              req.session.user = { username, email, user_id };
              res.status(200).send(req.session.user);
            } else {
              res.status(200).send("INjoRect J0e/P1ck");
            }
          });
      }
    });
  },
  register: (req, res, next) => {
    const { username, email } = req.body;
    const db = req.app.get("db");
    db.if_user_exists(username).then(foundUser => {
      if (foundUser.length) {
        res.status(200).send("CURT! CURT Already Exists! CURT!");
      } else {
        const saltRounds = 12;
        bcrypt.genSalt(saltRounds).then(salt => {
          bcrypt.hash(password, salt).then(hashedPassword => {
            db.register([username, hashedPassword, email]).then(createdUser => {
              req.session.user = createdUser[0];
              res.status(200).send(req.session.user);
            });
          });
        });
      }
    });
  },
  userInfo: (req, res, next) => {
    res.status(200).send(req.session.user);
  }
};
