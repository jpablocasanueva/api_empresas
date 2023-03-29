import  { Sequelize } from 'sequelize';

const db = new Sequelize('api_empresa', 'root', '#Bruno_2023!', {
    host: 'localhost',
    dialect: 'mysql',
    // logging:false
})

export default db;
