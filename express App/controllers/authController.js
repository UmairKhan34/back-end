module.exports = {
  login: (req, res) => {
    try {
      return res.send({
        response: "login Apis",
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  logOut: (req, res) => {
    try {
      return res.send({
        response: "log out user",
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
