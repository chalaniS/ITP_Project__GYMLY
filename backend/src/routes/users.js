import { Router } from 'express';
const router = Router();

// User model
import { find } from '../models/User';

// @route GET api/users
// @desc Get all users
// @access Public
router.get('/', (req, res) => {
    find()
        .sort({ date: -1 })
        .then(users => res.json(users));
});

export default router;
