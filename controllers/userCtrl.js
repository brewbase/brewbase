const app = require('../../server.js');
const db = app.get('db');

module.exports = {

    create: (req, res) => {
        console.log('this is the name of user', req.body.name);
        db.add_user([
            req.user.user_id, req.user.name, req.user.picture
        ], (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                console.log('WORKED!!!!!!!!!!!!!!!!!!')
                res.send(result);

            }
        });
    }
}
