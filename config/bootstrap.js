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

  // It's very important to trigger this callack method when you are finished 
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)


    Editable.find().then(function(editables){

        //clean up database
        _.each(editables, function(editable){
            Editable.destroy({id: editable.id},function(err){
                console.error(err);
            });
        });

        //create new data
        Editable.create({type:'previewInfo',content:'<p>content<p>'}, function(err, result){
            console.log(result)
            cb();
        });

    });

/*
    Editable.find().then(function(editables){

    });
*/
};