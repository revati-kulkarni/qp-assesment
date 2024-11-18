'use strict';

import * as Sequelize from 'sequelize';
import { sequelize } from '../utils/database';
import { User } from '../models/index';

export class Grocery extends Sequelize.Model { }
Grocery.init(

    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        quantity: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        price: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        createdBy: {
            type: Sequelize.INTEGER,
            references: {
                model: User,
                key: "id",
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'merchants',
        underscored: true,
        timestamps: true,
    });

export default Grocery;
User.hasMany(Grocery, { foreignKey: "createdBy", as: "groceries" });
