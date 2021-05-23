module.exports = (sequelize, { STRING, INTEGER, CHAR, BOOLEAN }) =>
  sequelize.define('game', {
    title: {
      type: STRING(25),
      allowNull: false,
    },

    owner_id: {
      type: INTEGER,
      allowNull: false,
    },

    studio: {
      type: STRING,
      allowNull: false,
    },

    esrb_rating: {
      type: CHAR(5),
      allowNull: false,
    },

    user_rating: {
      type: INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },

    have_played: {
      type: BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  });
