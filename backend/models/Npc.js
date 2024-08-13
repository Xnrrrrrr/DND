const mongoose = require('mongoose');

const npcSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        race: {
            type: String,
            required: true
        },
        npcClass: {
            type: String,
            required: true
        },
        alignment: {
            type: String,
            enum: [
                'Lawful Good', 
                'Neutral Good', 
                'Chaotic Good', 
                'Lawful Neutral', 
                'True Neutral', 
                'Chaotic Neutral', 
                'Lawful Evil', 
                'Neutral Evil', 
                'Chaotic Evil'
            ],
            required: true
        },
        type: {
            type: [String],
            enum: [
                'Trader', 
                'Quest Giver', 
                'Innkeeper', 
                'Merchant', 
                'Shopkeeper', 
                'Town Guard', 
                'Crafter', 
                'Blacksmith', 
                'Historical Character', 
                'Random Encounter', 
                'Lore Keeper', 
                'Alchemist', 
                'Jeweler', 
                'Leather Worker', 
                'Carpenter', 
                'Steve'
            ],
            default: 'Steve'
        },
        backstory: {
            background: {
                type: String
            },
            keyEvents: {
                type: [String]
            }
        },
        stats: {
            attributes: {
                strength: { type: Number, required: true },
                dexterity: { type: Number, required: true },
                constitution: { type: Number, required: true },
                intelligence: { type: Number, required: true },
                wisdom: { type: Number, required: true },
                charisma: { type: Number, required: true }
            },
            skills: {
                athletics: { type: Number },
                survival: { type: Number },
                intimidation: { type: Number },
                // Add more skills as needed
            },
            hitPoints: { type: Number, required: true },
            armorClass: { type: Number, required: true },
            speed: { type: Number, required: true },
            savingThrows: {
                strength: { type: Number },
                dexterity: { type: Number },
                constitution: { type: Number },
                intelligence: { type: Number },
                wisdom: { type: Number },
                charisma: { type: Number }
            },
            attackRolls: [
                {
                    weapon: { type: String },
                    attackBonus: { type: Number },
                    damage: { type: String }
                }
            ],
            specialAbilities: [
                {
                    type: String
                    // Add more fields if needed
                }
            ]
        },
        inventory: {
            items: {
                type: [String]
            },
            gold: {
                type: Number,
                default: 0
            }
        },
        relationships: {
            allies: {
                type: [String]
            },
            enemies: {
                type: [String]
            },
            affiliations: {
                type: [String]
            }
        }
    },
    {timestamps: true}
);

const Npc = mongoose.model('Npc', npcSchema);

module.exports = Npc;
