const express = require('express')
const {
    getPromos,
    getPromo,
    createPromo,
    deletePromo,
    updatePromo
} = require('../controllers/PromoController')

const router = express.Router()

// get all packages
router.get('/', getPromos)

// get a single package
router.get('/:id', getPromo)

// post a new package
router.post('/', createPromo)

// delete a  package
router.delete('/:id', deletePromo)

// update a package
router.patch('/:id', updatePromo)

module.exports = router