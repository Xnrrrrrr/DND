const asyncHandler = require("express-async-handler");
const { StatusCodes } = require('http-status-codes');
const { Npc } = require('../models');

/**
 * @desc	Creates npc
 * @route	POST /api/v1/npc
 * @access	Private --- Super Admin
 */
const createNpc = asyncHandler(async (req, res) => {
    const { name, type } = req.body;
    if (!name) {
        res.status(StatusCodes.BAD_REQUEST);
        throw new Error(`Please fill out all required fields.`);
    }
    const npc = new Npc({
        name,
        type,
    });
    await npc.save();
    res.status(StatusCodes.CREATED).json({ npc });
});


/**
 * @desc	Get a npc
 * @route	GET /api/v1/npc
 * @access	Private --- Admin
 */
const getAllNpcs = asyncHandler(async (req, res) => {
    const npcs = await Npc.find({}).select('-__v').sort('name');
    res.status(StatusCodes.OK).json({ count: npcs.length, npcs });
});

/**
 * @desc	Updates a npc
 * @route	PUT /api/v1/npc/:npcId
 * @access	Private --- Super Admin
 */
const updateNpc = asyncHandler(async (req, res) => {
    const { npcId } = req.params;
    const { name, type } = req.body;
    const npc = await Npc.findByIdAndUpdate(
        npcId,
        {
            name,
            type,
        },
        { new: true }
    );
    if (!npc) {
        res.status(StatusCodes.NOT_FOUND);
        throw new Error(`No npc found with an id of ${npcId}.`);
    }
    res.status(StatusCodes.OK).json({ npc });
});

/**
 * @desc	Deletes a npc
 * @route	PUT /api/v1/npc/:npcId
 * @access	Private --- Super Admin
 */
const deleteNpc = asyncHandler(async (req, res) => {
    const { npcId } = req.params;
    const npc = await Npc.findByIdAndDelete(npcId);
    if (!npc) {
        res.status(StatusCodes.NOT_FOUND);
        throw new Error(`No npc found with an id of ${npcId}.`);
    }
    res.status(StatusCodes.OK).json({ msg: `Npc deleted.` });
});

module.exports = {
    createNpc,
    getAllNpcs,
    updateNpc,
    deleteNpc,
};
