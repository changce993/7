module.exports = {
  admin: (req, res, next) => {
    const admin = true;
    const err = {
      error: '-1',
      description: 'No autorizado'
    };
    admin ? next() : console.log(err);
  }
};