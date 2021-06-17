const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class AmazonItem extends Model {};

AmazonItem.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    lpn: {
        type: DataTypes.STRING,
    },
    subcat: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.DOUBLE
    }

}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "amazonitems2",
});

module.exports = AmazonItem;