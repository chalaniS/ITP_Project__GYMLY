const mongoose = require('mongoose')

const Schema = mongoose.Schema

const standardSchema = new Schema({
    stPackageId: {
        type: String,
        required: true
    },
    stPackageName: {
        type: String,
        required: true
    },
    stPackagePrice: {
        type: String,
        required: true
    },
    stPackageDescription: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('StandardPackage', standardSchema)