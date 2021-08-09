const app = require('./app');

const port = 3001;

/*
const port = normalizaPort(process.env.PORT || '3001');
function normalizaPort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
if (port >= 0) {
        return port;
    }
return false;
}
*/

app.get('/', (req,res )=>{
    res.send("oi")
} )

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})