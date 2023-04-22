const express = require('express')
const {
    getStandards,
    getStandard,
    createStandard,
    deleteStandard,
    updateStandard
} = require('../controllers/StandardController')

const router = express.Router()

// get all packages
router.get('/', getStandards)

// get a single package
router.get('/:id', getStandard)

// post a new package
router.post('/', createStandard)

// delete a  package
router.delete('/:id', deleteStandard)

// update a package
router.patch('/:id', updateStandard)

module.exports = router