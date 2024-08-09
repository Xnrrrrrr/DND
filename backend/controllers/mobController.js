const asyncHandler = require("express-async-handler");
const { StatusCodes } = require('http-status-codes');
const { Mob } = require('../models');

/**
 * @desc	Creates mob
 * @route	POST /api/v1/mob
 * @access	Private --- Super Admin
 */
const createMob = asyncHandler(async (req, res) => {
    const { name, attackLvl, defenseLvl, strengthLvl, hitpointsLvl } = req.body;
    if (!name || !attackLvl || !defenseLvl || !strengthLvl || !hitpointsLvl) {
        res.status(StatusCodes.BAD_REQUEST);
        throw new Error(`Please fill out all required fields.`);
    }
    const mob = new Mob({
        name,
        attackLvl,
        defenseLvl,
        strengthLvl,
        hitpointsLvl,
    });
    await mob.save();
    res.status(StatusCodes.CREATED).json({ mob });
});

/**
 * @desc	Get a mob
 * @route	GET /api/v1/mob
 * @access	Private --- Admin
 */
const getAllMobs = asyncHandler(async (req, res) => {
    const mobs = await Mob.find({}).select('-__v').sort('name');
    res.status(StatusCodes.OK).json({ count: mobs.length, mobs });
});

/**
 * @desc	Updates a mob
 * @route	PUT /api/v1/mob/:mobId
 * @access	Private --- Super Admin
 */
const updateMob = asyncHandler(async (req, res) => {
    const { mobId } = req.params;
    const { name, attackLvl, defenseLvl, strengthLvl, hitpointsLvl } = req.body;
    const mob = await Mob.findByIdAndUpdate(
        mobId,
        {
            name,
            attackLvl,
            defenseLvl,
            strengthLvl,
            hitpointsLvl,
        },
        { new: true }
    );
    if (!mob) {
        res.status(StatusCodes.NOT_FOUND);
        throw new Error(`No mob found with an id of ${mobId}.`);
    }
    res.status(StatusCodes.OK).json({ mob });
});

/**
 * @desc	Deletes a mob
 * @route	PUT /api/v1/mob/:mobId
 * @access	Private --- Super Admin
 */
const deleteMob = asyncHandler(async (req, res) => {
    const { mobId } = req.params;
    const mob = await Mob.findByIdAndDelete(mobId);
    if (!mob) {
        res.status(StatusCodes.NOT_FOUND);
        throw new Error(`No mob found with an id of ${mobId}.`);
    }
    res.status(StatusCodes.OK).json({ msg: `Mob deleted.` });
});

module.exports = {
    createMob,
    getAllMobs,
    updateMob,
    deleteMob,
};
