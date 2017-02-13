const app = require('../../../server.js');
const db = app.get('db');

module.exports = {
    index: (req, res) =>{
        db.read_fav_beer((err, result) =>{
            if(err){
                res.status(500).json(err);
            }
            else{
                res.send(result)
            }
        });
    },

    create: (req,res) =>{
        db.add_beer([req.body.beerId], (err, result) =>{
            if(err){
                res.status(500).json(err);
            }
            else{
                res.send(result);
            }
        });
    },

    destroy: (req, res) =>{
        db.delete_beer([req.body.beerId], (err, result) =>{
            if(err){
                res.status(500).json(err);
            }
            else{
                res.send(result);
            }
        });
    }
}
