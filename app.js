//express server 
const express= require('express');

//to start server (instance)
const app = express();
const authRouter = require('./router/authRoute.js')
const databaseconnect = require('./config/databaseConfig.js')
const cookieparser = require('cookie-parser');
const cors = require('cors');

databaseconnect();


app.use(express.json())    //covert data in json format
app.use(cookieparser());   //jo cookies ka token hai usko pars krne ke liye helpful hoga

//frntend local host connect ot backend localhost
app.use(cors({
    origin: [process.env.CLIENT_URL],
    credentials: true
}))


app.use('/api/auth', authRouter)

app.use('/',(req, res) => {
    res.status(200).json({
        data : 'JWTauth server!'
    });
})

module.exports = app;