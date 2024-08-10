const mongoose = require("mongoose");

const mobSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		enum: ["steve"],
	}, 
	subtype: {
		type: String,
		required: true,
	},
	size: {
		type: Number,
		required: true,
	},
	armorClass: {
		type: String,
		enum: ["Light Armor", "Medium Armor", "Heavy Armor"], // Use enum to restrict values
		required: true,
	},
	hitPoints: {
		type: Number,
		required: true,
	},
	speed: {
		walk: { type: Number, },
		swim: { type: Number, default: 0 },  // Default to 0 if not applicable
		fly: { type: Number, default: 0 },
		climb: { type: Number, default: 0 },
		burrow: { type: Number, default: 0 },
	},
	attributes: {
		strength: { type: Number, required: true },
		dexterity: { type: Number, },
		constitution: { type: Number, },
		intelligence: { type: Number, },
		wisdom: { type: Number, },
		charisma: { type: Number, },
	},
	savingThrows: {
		strength: { type: Number, default: 0 },
		dexterity: { type: Number, default: 0 },
		constitution: { type: Number, default: 0 },
		intelligence: { type: Number, default: 0 },
		wisdom: { type: Number, default: 0 },
		charisma: { type: Number, default: 0 },
	},
	  skills: {
		acrobatics: { type: Number, default: 0 },
		arcana: { type: Number, default: 0 },
		athletics: { type: Number, default: 0 },
		deception: { type: Number, default: 0 },
		insight: { type: Number, default: 0 },
		intimidation: { type: Number, default: 0 },
		investigation: { type: Number, default: 0 },
		perception: { type: Number, default: 0 },
		performance: { type: Number, default: 0 },
		persuasion: { type: Number, default: 0 },
		sleightOfHand: { type: Number, default: 0 },
		stealth: { type: Number, default: 0 },
		survival: { type: Number, default: 0 },
	},
	damageResistances: {
		type: String,
		required: true,
	},	
	damageImmunities: {
		type: String,
		required: true,
	},
	conditionImmunities: {
		type: String,
		required: true,
	},
	senses: {
		darkvision: { type: Number, default: 0 }, // Typically a number of feet, e.g., 60
		blindsight: { type: Number, default: 0 }, // Typically a number of feet, e.g., 10
		truesight: { type: Number, default: 0 },  // Typically a number of feet, e.g., 30
		passivePerception: { type: Number, default: 10 }, // Default for most creatures
	  },
	languages: {
		type: String,
		required: true,
	},	
	challengeRating: {
		type: Number,
		required: true,
	},	
	attacks: [
		{
			name: { type: String},
			attackBonus: { type: Number},
			damage: { type: String},
			damageType: { type: String},
			range: { type: String},
		},
	],
	specialAbilities: [
		{
			name: { type: String},
			description: { type: String},
		},
	],
	legendaryActions: [
		{
			name: { type: String},
			description: { type: String},
		},
	],
	mythicActions: [
		{
			name: { type: String},
			description: { type: String},
		},
	],
	traits: [
		{
			name: { type: String},
			description: { type: String},
		},
	],
	actions: [
		{
			name: { type: String},
			description: { type: String},
		},
	],
	reactions: [
		{
			name: { type: String},
			description: { type: String},
		},
	],
	legendaryResistances: {
		name: { type: String},
		description: { type: String},
	},
});

const Mob = mongoose.model("Mob", mobSchema);

module.exports = Mob;

// const mobSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   type: { type: String, required: true },  // 
//   subtype: { type: String },
//   size: {
//     type: String,
//     enum: ['Tiny', 'Small', 'Medium', 'Large', 'Huge', 'Gargantuan'], // 
//     required: true
//   },
//   // other fields as needed
// });

// const mongoose = require('mongoose');

// const mobSchema = new mongoose.Schema({
//   name: String,
//   type: String,  // 
//   subtype: String,
//   size: {
//     enum: ['Tiny', 'Small', 'Medium', 'Large', 'Huge', 'Gargantuan'],
//     required: true
//   },
//   // other fields as needed
// });

// const Mob = mongoose.model('Mob', mobSchema);

// module.exports = Mob;
