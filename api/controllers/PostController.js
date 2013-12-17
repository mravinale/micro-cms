/**
 * PostController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {

    GetPost: function(req, res) {

        Post.find()
            .where({ 'id': parseInt(req.param('id')) })
            .exec( function(err, items){
                if (err) return res.send(err, 500);
                res.send(items, 200);
            });
    },

    GetAllPost: function(req, res) {
        Post.find(function(err, items){
                if (err) return res.send(err, 500);
                res.send(items, 200);
            });

    }
};
