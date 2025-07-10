const Joi = require('joi');

exports.create = Joi.object().keys({
    id_user: Joi.number().required(),
    judul: Joi.string().required(),
    deskripsi: Joi.string().required(),
    tanggal: Joi.string().required(),
    lokasi: Joi.string().required(),
    patokan: Joi.string().required(),
    id_user_kepdes: Joi.number().required(),
    gambar: Joi.string().required(),
    status_pengaduan: Joi.bool().required(),
    respon: Joi.string()
})

exports.update = Joi.object().keys({
    id_user: Joi.number(),
    judul: Joi.string(),
    deskripsi: Joi.string(),
    tanggal: Joi.string(),
    lokasi: Joi.string(),
    patokan: Joi.string(),
    id_user_kepdes: Joi.number(),
    gambar: Joi.string(),
    status_pengaduan: Joi.bool(),
    respon: Joi.string()
})