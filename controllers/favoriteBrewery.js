const app = require('../../../server.js');
const db = app.get('db');

module.exports = {
    index: (req, res) =>{
        db.read_fav_brewery((err, result) =>{
            if(err){
                res.status(500).json(err);
            }
            else{
                res.send(result);
            }
        });
    },

    create: (req, res) =>{
        db.add_brewery([req.body.breweryId], (err, result) =>{
            if(err){
                res.status(500).json(err);
            }
            else{
                res.send(result);
            }
        });
    },

    destroy: (req, res) =>{
        db.delete_brewery([req.body.breweryId], (err, result) =>{
            if(err){
                res.status(500).json(err);
            }
            else{
                res.send(result);
            }
        });
    }
}
