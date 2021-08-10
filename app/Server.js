const app = require('./app');
const port = 3001;
const Controller = require('./Controller/Routes')




app.use('/', Controller)



app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})