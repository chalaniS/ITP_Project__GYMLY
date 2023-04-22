const Standard = require('../models/StandardModel')
const mongoose = require('mongoose')

// get all packages
const getStandards = async (req, res) => {
    const standards = await Standard.find({}).sort({createdAt: -1})

    res.status(200).json(standards)
}

// get a single package
const getStandard = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such standard package'})
    }

    const standard = await Standard.findById(id)

    if (!standard) {
        return res.status(404).json({error: 'no such standard package'})
    }

    res.status(200).json(standard)
}

// create a new package
const createStandard = async (req, res) => {
    const {stPackageId, stPackageName, stPackagePrice, stPackageDescription} = req.body

    // add doc to DB
    try {
        const standard = await Standard.create({stPackageId, stPackageName, stPackagePrice, stPackageDescription})
        res.status(200).json(standard)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a package
const deleteStandard = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such standard package'})
    }

    const standard = await Standard.findByIdAndDelete({_id: id})

    if (!standard) {
        return res.status(404).json({error: 'no such standard package'})
    }

    res.status(200).json(standard)
}

// update a package
const updateStandard = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such standard package'})
    }

    try {
        const updatedStandard = await Standard.findOneAndUpdate({_id: id}, req.body, { new: true });
        res.status(200).json(updatedStandard);
    } catch (error) {
        res.status(400).json({error: error.message});
    }

    // const standard = await Standard.findOneAndUpdate({_id: id}, {
    //     ...req.body
    // })

    // if (!standard) {
    //     return res.status(404).json({error: 'no such standard package'})
    // }

    // res.status(200).json(standard)
}

module.exports = {
    getStandards,
    getStandard,
    createStandard,
    deleteStandard,
    updateStandard
}