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
        Post.find()
            .sort({ createdAt: 'asc' })
            .exec(function(err, items){
                if (err) return res.send(err, 500);
                res.send(items, 200);
            });

    },

    CreatePost: function(req, res) {

        Post.find( function(err, posts){

            if (err) return res.send(err, 500);
            var post = _.max(posts, function(post){ return post.id; });
            postBase.id = parseInt(post.id) + 1;
            postBase.title =  postBase.title + postBase.id;

            Post.create(postBase, function (err, newPost) {
                if (err) return res.send(err,500);
                res.send(newPost, 200);
            });

        });

    },

    UpdatePost: function(req, res) {

        var params = _.extend(req.query || {}, req.params || {}, req.body || {});
        var id = params.id;

        if (!id) return res.send("No id specified.",500);

        Post.update(id, params, function(err, updatedPost) {
            if (err) return res.send(err, 500);
            res.send(updatedPost, 200);
        });

    }
};


var postBase =
{
    type: "Post",
    title: "Post ",
    content: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur .</p></br><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur .</p>"
};


