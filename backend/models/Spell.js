// models/Spell.js
const mongoose = require('mongoose');

const spellSchema = new mongoose.Schema({
    name: { type: String, required: true },
    level: { type: Number, min: 0, max: 9 },  // Spell levels range from 0 (cantrips) to 9 (highest level spells)
    school: { type: String, enum: ['Abjuration', 'Conjuration', 'Divination', 'Enchantment', 'Evocation', 'Illusion', 'Necromancy', 'Transmutation'] },
    castingTime: { type: String },  // How long it takes to cast the spell (e.g., "1 action", "1 minute")
    range: { type: String },  // The range of the spell (e.g., "60 feet", "Self")
    components: {
        verbal: { type: Boolean, default: false },  // Indicates if the spell requires verbal components
        somatic: { type: Boolean, default: false },  // Indicates if the spell requires somatic components
        material: { type: Boolean, default: false }  // Indicates if the spell requires material components
    },
    duration: { type: String },  // How long the spell lasts (e.g., "Concentration, up to 1 minute", "Instantaneous")
    description: { type: String }  // Detailed description of the spell's effects and any additional information
    // Other fields as necessary
});

const Spell = mongoose.model('Spell', spellSchema);

module.exports = Spell;
