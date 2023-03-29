import { DataTypes } from 'sequelize'
import db from '../db/connection';

const empresa = db.define('tbl_empresa', {
    nombre: {
        type: DataTypes.STRING
    },
    rut: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    }
})

export default empresa
