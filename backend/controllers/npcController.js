const asyncHandler = require("express-async-handler");
const { StatusCodes } = require('http-status-codes');
const  { Npc }  = require('../models');

/**
 * @desc	Creates npc
 * @route	POST /api/v1/npc
 * @access	Private --- Super Admin
 */
const createNpc = asyncHandler(async (req, res) => {
    const { name, race, class: npcClass, alignment, type, backstory, stats, inventory, relationships } = req.body;

    if (!name || !race || !npcClass || !alignment || !type || !backstory || !stats || !inventory || !relationships) {
        res.status(StatusCodes.BAD_REQUEST);
        throw new Error(`Please fill out all required fields.`);
    }

    const npc = new Npc({
        name,
        race,
        npcClass,
        alignment,
        type,
        backstory,
        stats,
        inventory,
        relationships
    });

    await npc.save();
    res.status(StatusCodes.CREATED).json({ npc });
});

/**
 * @desc	Get all npcs
 * @route	GET /api/v1/npc
 * @access	Private --- Admin
 */
const getAllNpcs = asyncHandler(async (req, res) => {
    const npcs = await Npc.find({}).select('-__v').sort('name');
    res.status(StatusCodes.OK).json({ count: npcs.length, npcs });
});

/**
 * @desc	Get a single npc by ID
 * @route	GET /api/v1/npc/:npcId
 * @access	Private --- Admin
 */
const getNpcById = asyncHandler(async (req, res) => {
    const { npcId } = req.params;
    const npc = await Npc.findById(npcId).select('-__v');

    if (!npc) {
        res.status(StatusCodes.NOT_FOUND);
        throw new Error(`No npc found with an id of ${npcId}.`);
    }

    res.status(StatusCodes.OK).json({ npc });
});

/**
 * @desc	Updates a npc
 * @route	PUT /api/v1/npc/:npcId
 * @access	Private --- Super Admin
 */
const updateNpc = asyncHandler(async (req, res) => {
    const { npcId } = req.params;
    const { name, race, class: npcClass, alignment, type, backstory, stats, inventory, relationships } = req.body;

    const npc = await Npc.findByIdAndUpdate(
        npcId,
        {
            name,
            race,
            class: npcClass,
            alignment,
            type,
            backstory,
            stats,
            inventory,
            relationships
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
 * @route	DELETE /api/v1/npc/:npcId
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
    getNpcById,
    updateNpc,
    deleteNpc,
};
