const mongoose = require('mongoose')

const Schema = mongoose.Schema

const promoSchema = new Schema({
    prPackageId: {
        type: String,
        required: true
    },
    prPackageName: {
        type: String,
        required: true
    },
    prPackagePrice: {
        type: String,
        required: true
    },
    prPackageDescription: {
        type: String,
        required: true
    },
    prPackageValidity: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('PromoPackage', promoSchema)