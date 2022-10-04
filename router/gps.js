'use strict';
const { sequelize, DataTypes } = require("../config/db");
const  gps = require('../models/tbl_gps')(sequelize, DataTypes);
const router = require('express').Router();

router.get('/gps', async(req, res) => {
    try{
        const findItem = await gps.findAll();
        res.status(200).json(findItem);
    }catch(e){
        res.status(400).json(e);
    }
});

router.post('/gps', async(req, res) => {
    try{
        await gps.update({active: 0}, {where: {active: 1}});
        try{
            const findItems = await gps.findOne({where: {lat:req.body.lat, lng:req.body.lng}});
            if(findItems){return 0};
        }catch(e){}
        const addGps = await gps.create({
            lat:req.body.lat,
            lng:req.body.lng,
            active: 1
        });
        res.status(200).json(addGps.id);
    }catch(e){
        res.status(400).json(e);
    }
});


module.exports = router;