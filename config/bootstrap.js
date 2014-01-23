/**
 * Bootstrap
 *
 * An asynchronous boostrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#documentation
 */



module.exports.bootstrap = function (cb) {

    var data =[
        {
            id : 1,
            type : "Vision",
            subtype : "vision1",
            content : "<div class='service-box'><figure><img src='images/ico-1.jpg' alt=''></figure>   <h3>Bootstrap framework</h3><p>Well, the way they make shows is, they make one show. That show's called a pilot.</p></div>"
        },
        {
            id : 2,
            type : "Vision",
            subtype:"vision2",
            content : "<div class='service-box'><figure> <img src='images/ico-2.jpg' alt=''> </figure><h3>Corporate theme</h3> <p>Well, the way they make shows is, they make one show. That show's called a pilot.</p></div>"
        },
        {
            id : 3,
            type : "Vision",
            subtype: "vision3",
            content : "<div class='service-box'><figure><img src='images/ico-3.jpg' alt=''></figure><h3>For creatives</h3> <p>Well, the way they make shows is, they make one show. That show's called a pilot.</p> </div>"
        },
        {
            id : 4,
            type : "Vision",
            subtype : "visionTitle",
            content : "<div class='col-md-9 text-left'><h4 class='title-12'>What We Do</h4> <h1>We provide super awesome digital service</h1> <p class='intro'>Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people.</p> </div>"
        },
        {
            id : 5,
            type : "Featurette",
            content: "<img class='featurette-image pull-left' src='/images/featurette1.jpe'><h2 class='featurette-heading'>Vestibulum id ligula porta felis. <span class='muted'>porta felis euismod.</span></h2><p class='lead'>Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>"
        },
        {
            id : 6,
            type : "Featurette",
            content: "<img class='featurette-image pull-right' src='/images/featurette2.jpe'><h2 class='featurette-heading'>Vestibulum id ligula porta felis. <span class='muted'>porta felis euismod.</span></h2><p class='lead'>Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>"
        },
        {
            id : 7,
            type : "Featurette",
            content: "<img class='featurette-image pull-left' src='/images/featurette3.jpe'><h2 class='featurette-heading'>Vestibulum id ligula porta felis. <span class='muted'>porta felis euismod.</span></h2><p class='lead'>Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>"
        }

    ]

    var posts = [
        {
            id: 1,
            type: "Post",
            title: "Post 1",
            content: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur .</p></br><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur .</p>"
        },
        {
            id: 2,
            type: "Post",
            title: "Post 2",
            content: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur .</p></br><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur .</p>"
        },
        {
            id : 3,
            type : "Post",
            title: "Post 3",
            content: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur .</p></br><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur .</p>"
        }
    ]

    //create new data
    Editable.create(data[0], function(err){ if(err) console.error(err); });
    Editable.create(data[1], function(err){ if(err) console.error(err); });
    Editable.create(data[2], function(err){ if(err) console.error(err); });

    Editable.create(data[3], function(err){ if(err) console.error(err); });
    Editable.create(data[4], function(err){ if(err) console.error(err); });
    Editable.create(data[5], function(err){ if(err) console.error(err); });
    Editable.create(data[6], function(err){ if(err) console.error(err); });

    //Post.create(posts[0], function(err){ if(err) console.error(err); });
    //Post.create(posts[1], function(err){ if(err) console.error(err); });
    //Post.create(posts[2], function(err){ if(err) console.error(err); });


    // It's very important to trigger this callack method when you are finished
    // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
    cb();
};



/*
 Editable.find().then(function(editables){

 //clean up database
 _.each(editables, function(editable){
 Editable.destroy({id: editable.id},function(err){
 if(err) return console.error(err);

 if(editable.id == 6)  initData();
 });
 });


 });
 */