/**
 * EditableController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {

    VisionInfo: function(req, res) {
        Editable.find()
            .sort({ createdAt: 'desc' })
            .where({ type: 'Vision' })
            .exec(function(err, items){
                if (err) return res.send(err, 500);
                res.send(items, 200);
            });
    },

    ServiceInfo: function(req, res) {
        Editable.find()
            .where({ type: 'Service' })
            .sort({ createdAt: 'desc' })
            .exec(function(err, items){
                if (err) return res.send(err, 500);
                res.send(items, 200);
            });
    },

    AboutInfo: function(req, res) {
        Editable.find()
            .where({ type: 'About' })
            .sort({ createdAt: 'desc' })
            .exec(function(err, items){
                if (err) return res.send(err, 500);
                res.send(items, 200);
            });
    },

    UpdateVisionInfo: function(req, res) {
        Editable.findOne({ '_id': req.param('id') }, function(err, items){
            if (err) return res.send(err, 500);

            res.send(items, 200);
        });
    },

    UpdateVisionInfo: function(req, res) {

        var params = _.extend(req.query || {}, req.params || {}, req.body || {});
        var id = params.id;

        if (!id) return res.send("No id specified.",500);

        Editable.update(id, params, function(err, updatedEditable) {
            if (err) return res.send(err, 500);
            res.send(updatedEditable, 200);
        });
    },

    UpdateServiceInfo: function(req, res) {

        var params = _.extend(req.query || {}, req.params || {}, req.body || {});
        var id = params.id;

        if (!id) return res.send("No id specified.",500);

        Editable.update(id, params, function(err, updatedEditable) {
            if (err) return res.send(err, 500);
            res.send(updatedEditable, 200);
        });
    },

    UpdateAboutInfo: function(req, res) {

        var params = _.extend(req.query || {}, req.params || {}, req.body || {});
        var id = params.id;

        if (!id) return res.send("No id specified.",500);

        Editable.update(id, params, function(err, updatedEditable) {
            if (err) return res.send(err, 500);
            res.send(updatedEditable, 200);
        });
    }

};
