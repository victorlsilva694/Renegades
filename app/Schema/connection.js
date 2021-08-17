const Sequelaize = require('sequelize')
const sequelize = new Sequelaize('Renegades','root','Victor123@#!',{
  dialect: 'postgres',
  host: 'db'
})

async function auth (){
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    console.log('Banco tá on pelo sequelize')
  } catch (err){
    console.error('Deu error no sequelize', err)
  }
}

auth()


module.exports = sequelize;
