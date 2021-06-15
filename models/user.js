const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");
const sequelize = require("../config/connection");
class ArcUser extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

ArcUser.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
}, {
    hooks: {
        beforeCreate: async(newUserData) => {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "arcuser",
});
module.exports = ArcUser;