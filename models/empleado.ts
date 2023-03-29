import { DataTypes } from 'sequelize'
import db from '../db/connection';

const empleado = db.define('tbl_empleado', {
    nombre: {
        type: DataTypes.STRING
    },
    rut: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    empresa: {
        type: DataTypes.STRING
    }
})

export default empleado
