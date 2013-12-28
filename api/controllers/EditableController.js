/**
 * EditableController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {

    PreviewInfo: function(req, res) {
        Editable.find()
            .sort({ createdAt: 'desc' })
            .where({ type: 'PreviewInfo' })
            .exec(function(err, items){
                if (err) return res.send(err, 500);
                res.send(items, 200);
            });
    },

    UpdatePreviewInfo: function(req, res) {
        Editable.findOne({ '_id': req.param('id') }, function(err, items){
            if (err) return res.send(err, 500);

            res.send(items, 200);
        });
    },

    Featurette: function(req, res) {
        Editable.find()
            .where({ type: 'Featurette' })
            .sort({ createdAt: 'desc' })
            .exec(function(err, items){
                if (err) return res.send(err, 500);
                res.send(items, 200);
            });

    },

    UpdateFeaturette: function(req, res) {

        var params = _.extend(req.query || {}, req.params || {}, req.body || {});
        var id = params.id;

        if (!id) return res.send("No id specified.",500);

        Editable.update(id, params, function(err, updatedEditable) {
            if (err) return res.send(err, 500);
            res.send(updatedEditable, 200);
        });

    },

    UpdatePreviewInfo: function(req, res) {

        var params = _.extend(req.query || {}, req.params || {}, req.body || {});
        var id = params.id;

        if (!id) return res.send("No id specified.",500);

        Editable.update(id, params, function(err, updatedEditable) {
            if (err) return res.send(err, 500);
            res.send(updatedEditable, 200);
        });

    }

};
