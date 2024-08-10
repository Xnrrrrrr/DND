const express = require('express');
const router = express.Router();

const {
    protect,
    admin,
    superAdmin,
} = require('../middleware/authMiddleware.js');

const {
    createCharacterSheet,
    getAllCharacterSheets,
    updateCharacterSheet,
    deleteCharacterSheet,
} = require('../controllers/characterSheetController.js');

router
    .route('/')
    .post([protect, superAdmin], createCharacterSheet)
    .get([protect, admin], getAllCharacterSheets);
router
    .route('/:mobId')
    .put([protect, superAdmin], updateCharacterSheet)
    .delete([protect, superAdmin], deleteCharacterSheet);

module.exports = router;
