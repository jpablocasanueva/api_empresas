"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const empleado = connection_1.default.define('tbl_empleado', {
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    rut: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    empresa: {
        type: sequelize_1.DataTypes.STRING
    }
});
exports.default = empleado;
//# sourceMappingURL=empleado.js.map