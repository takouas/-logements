
const Joi = require('@hapi/joi');
// Register validation
const registerValidation = (data) => {
    const schema = {
        nom: Joi.string().min(3).required(),
        prenom: Joi.string().min(3).required(),
        role: Joi.string().min(3).required(),
        motDePasse: Joi.string().min(6).required(),
        telephone: Joi.string().min(6).required(),
        email: Joi.string().min(3).required().email(),
    };
    return Joi.validate(data, schema);
}

module.exports.registerValidation = registerValidation
