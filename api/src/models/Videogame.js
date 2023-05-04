const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.INTEGER,
      // type: DataTypes.UUID,
      // defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    released: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: false,
      defaultValue:[]
    },
    genres: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: false,
      defaultValue:[]
    },
    background_image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating_top: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });
};
