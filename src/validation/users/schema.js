const Joi = require('joi');

exports.create = Joi.object().keys({
    nama: Joi.string().required(),
    no_telp: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    role: Joi.string().required()
})

exports.update = Joi.object().keys({
    nama: Joi.string(),
    no_telp: Joi.string(),
    email: Joi.string(),
    password: Joi.string(),
    role: Joi.string()
})