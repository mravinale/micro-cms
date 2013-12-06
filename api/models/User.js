/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

module.exports = {

    schema: true,

    attributes: {

        name: {
            type: 'string',
            required: true
        },

        email: {
            type: 'string',
            email: true,
            required: true,
            unique: true
        }
    }
};
