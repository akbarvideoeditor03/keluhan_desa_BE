const Joi = require('joi');

exports.create = Joi.object().keys({
    id_user: Joi.number().required(),
    gambar_lampiran: Joi.string().required(),
    
})

exports.update = Joi.object().keys({

})