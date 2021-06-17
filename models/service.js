const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class AmazonService extends Model {};

AmazonService.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    subcat: {
        type: DataTypes.STRING,
    },
    sfunctiontest: {
        type: DataTypes.STRING,
    },
    cleaning: {
        type: DataTypes.STRING,
    },
    rebox: {
        type: DataTypes.STRING,
    }

}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "amazonservices",
});

module.exports = AmazonService;