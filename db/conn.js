const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nome_do_banco', 'root', 'sua_senha', {
  host: 'localhost',
  port: sua_porta,
  dialect: 'mysql',
  logging: false,
})

async function connectDB() {
  try {
    await sequelize.authenticate()
    console.log('Conectamos com o Sequelize!')
  } catch (error) {
    console.error('Não foi possível conectar:', error)
  }
}

connectDB()

module.exports = sequelize
