require('dotenv').config();
const PORT = process.env.PORT ||5002;

//server banaya
const app = require('./app')

 
//start server
app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
})