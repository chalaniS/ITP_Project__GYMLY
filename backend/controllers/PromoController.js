const Promo = require('../models/PromoModel')
const mongoose = require('mongoose')

// get all packages
const getPromos = async (req, res) => {
    const promos = await Promo.find({}).sort({createdAt: -1})

    res.status(200).json(promos)
}

// get a single package
const getPromo = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such promo package'})
    }

    const promo = await Promo.findById(id)

    if (!promo) {
        return res.status(404).json({error: 'no such promo package'})
    }

    res.status(200).json(promo)
}

// create a new package
const createPromo = async (req, res) => {
    const {prPackageId, prPackageName, prPackagePrice, prPackageDescription, prPackageValidity} = req.body

    // add doc to DB
    try {
        const promo = await Promo.create({prPackageId, prPackageName, prPackagePrice, prPackageDescription, prPackageValidity})
        res.status(200).json(promo)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a package
const deletePromo = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such promo package'})
    }

    const promo = await Promo.findByIdAndDelete({_id: id})

    if (!promo) {
        return res.status(404).json({error: 'no such promo package'})
    }

    res.status(200).json(promo)
}

// update a package
const updatePromo = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such promo package'})
    }

    const promo = await Promo.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!promo) {
        return res.status(404).json({error: 'no such promo package'})
    }

    res.status(200).json(promo)
}

module.exports = {
    getPromos,
    getPromo,
    createPromo,
    deletePromo,
    updatePromo
}