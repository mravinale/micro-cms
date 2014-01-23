/**
 * Editable
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

module.exports = {

    schema: true,

    attributes: {

        type: {
            type: 'string',
            required: true
        },

        subtype: {
            type: 'string',
            required: false
        },

        content: {
            type: 'string',
            required: true,
            unique: true
        }
    }
};
