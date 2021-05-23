module.exports = (sequelize, { STRING }) =>
  sequelize.define('user', {
    full_name: {
      type: STRING,
      allowNull: false,
    },

    username: {
      type: STRING,
      allowNull: false,
    },

    passwordHash: {
      type: STRING,
      allowNull: false,
    },

    email: {
      type: STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
  });
