const bodyParser = require('body-parser');
const express = require('express');

const {PORT} = require('./config/serverconfig');
const app = express();

const apiroutes = require('./routes/index');


const db = require('./models/index');
const setupandstartserver = ()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended :true}));

    app.use('/api', apiroutes);
    app.listen(PORT ,()=>{
        console.log(`Server start at port  ${PORT}`);

        if(db.sequelize.DB_SYNC){
            db.sequelize.sync({alter:true})
        }
    });
}

setupandstartserver();