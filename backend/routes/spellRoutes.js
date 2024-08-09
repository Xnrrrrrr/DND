const express = require('express');
const router = express.Router();

const {
    protect,
    admin,
    superAdmin,
} = require('../middleware/authMiddleware.js');

const {
    createSpell,
    getAllSpells,
    updateSpell,
    deleteSpell,
} = require('../controllers/spellController.js');

router
    .route('/')
    .post([protect, superAdmin], createSpell)
    .get([protect, admin], getAllSpells);
router
    .route('/:spellId')
    .put([protect, superAdmin], updateSpell)
    .delete([protect, superAdmin], deleteSpell);

module.exports = router;
