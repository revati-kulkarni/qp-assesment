'use strict';

import * as Sequelize from 'sequelize';
import { Grocery } from '../models/index';
import { sequelize } from "../utils/database";


export class User extends Sequelize.Model {
    public id!: number;
    public username!: string;
    public email!: string;
    public password!: string;
    public role!: "admin" | "user";
 }
User.init(

    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        role: {
            type: Sequelize.ENUM("admin", "user"),
            allowNull: false,
            defaultValue: "user",
        },

    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'merchants',
        underscored: true,
        timestamps: true,
    });

export default User;
Grocery.belongsTo(User, { foreignKey: "createdBy", as: "creator" });
