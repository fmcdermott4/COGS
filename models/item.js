const { Model, DataTypes } = require("sequelize");

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
    subcategory: {
        type: DataTypes.STRING,
    },
    cost: {
        type: DataTypes.DOUBLE
    }

}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "amazonitem",
});
module.exports = AmazonItem;