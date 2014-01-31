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
            content : " <h3>Bootstrap framework</h3><p>Well, the way they make shows is, they make one show. That show's called a pilot.</p>"
        },
        {
            id : 2,
            type : "Vision",
            subtype:"vision2",
            content : "<h3>Corporate theme</h3> <p>Well, the way they make shows is, they make one show. That show's called a pilot.</p>"
        },
        {
            id : 3,
            type : "Vision",
            subtype: "vision3",
            content : "<h3>For creatives</h3> <p>Well, the way they make shows is, they make one show. That show's called a pilot.</p>"
        },
        {
            id : 4,
            type : "Vision",
            subtype : "visionTitle",
            content : "<div class='col-md-9 text-left'><h4 class='title-12'>What We Do</h4> <h1>We provide super awesome digital service</h1> <p class='intro'>Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people.</p>"
        },

        {
            id : 5,
            type : "Service",
            subtype: "service1",
            content: " <article class='et-wrapper et-rotate' data-slide-in='moveFromTop' data-slide-out='fade'><div class='et-page et-page-opacity features-box et-page-current'><i class='fa fa-comments'></i><h3>Click This Box</h3> <p>Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense!</p></div></article>"
        },
        {
            id : 6,
            type : "Service",
            subtype: "service2",
            content: "<article class='et-wrapper' ><div class='et-page features-box et-page-current'><i class='fa fa-bell-o'></i><h3>Click To Reveal Content</h3><p>Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense!</p></div></article>"
        },
        {
            id : 7,
            type : "Service",
            subtype: "service3",
            content: "<article class='et-wrapper et-rotate' data-slide-in='moveFromTopFade' data-slide-out='moveToRightFade'><div class='et-page features-box et-page-current'><i class='fa fa-group'></i><h3>Click This Box</h3> <p>Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense!</p> </div> </article>"
        },
        {
            id : 8,
            type : "Service",
            subtype : "serviceTitle",
            content : " <div class='col-md-12 text-center'><h4 class='title'>The Full Services</h4><h1>Display Your Service List</h1><p class='lead'>Have an expert stylist shop for you. They'll email you outfits.</p>  </div>"
        },

        {
            id : 9,
            type : "About",
            subtype : "aboutTitle",
            content : "<div class='col-md-10 col-md-offset-1 text-center'><h3 class='title-12'>ABOUT US</h3><h1>The <span class='f-800 f-green'>Kendo</span>Full Story</h1><p>Kendo Theme is a Have an expert stylist shop for you. They'll email you outfits and items that look amazing on you, completely free.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>  </div>"
        },
        {
            id : 10,
            type : "About",
            subtype: "about1",
            content: "<h2>Heading</h2><p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p> "
        },
        {
            id : 11,
            type : "About",
            subtype: "about2",
            content: "<h2>Heading</h2><p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>"
        },
        {
            id : 12,
            type : "About",
            subtype: "about3",
            content: "<h2>Heading</h2><p>Donec sed odio dui. Cras justo odio, dapibus in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut massa justo sit amet risus.</p>"
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
    Editable.create(data[7], function(err){ if(err) console.error(err); });

    Editable.create(data[8], function(err){ if(err) console.error(err); });
    Editable.create(data[9], function(err){ if(err) console.error(err); });
    Editable.create(data[10], function(err){ if(err) console.error(err); });
    Editable.create(data[11], function(err){ if(err) console.error(err); });

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