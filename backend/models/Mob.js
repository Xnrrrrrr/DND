const mongoose = require('mongoose');

const mobSchema = new mongoose.Schema({
  name: String,
  type: String,  // enum possibly to categorize? idfk 
  subtype: String,
  size: String,
  armorClass: {
    base: Number,
    bonus: Number,
    calculation: String
  },
  hitPoints: {
    value: Number,
    hitDice: String,
    average: Number
  },
  speed: {
    walk: String,
    swim: String,
    fly: String,
    climb: String,
    burrow: String
  },
  attributes: {
    strength: Number,
    dexterity: Number,
    constitution: Number,
    intelligence: Number,
    wisdom: Number,
    charisma: Number
  },
  savingThrows: {
    strength: Number,
    dexterity: Number,
    constitution: Number,
    intelligence: Number,
    wisdom: Number,
    charisma: Number
  },
  skills: {
    acrobatics: Number,
    arcana: Number,
    athletics: Number,
    deception: Number,
    insight: Number,
    intimidation: Number,
    investigation: Number,
    perception: Number,
    performance: Number,
    persuasion: Number,
    sleightOfHand: Number,
    stealth: Number,
    survival: Number
  },
  damageResistances: [String],
  damageImmunities: [String],
  conditionImmunities: [String],
  senses: {
    darkvision: String,
    blindsight: String,
    truesight: String,
    passivePerception: Number
  },
  languages: [String],
  challengeRating: Number,
  attacks: [{
    name: String,
    attackBonus: Number,
    damage: String,
    damageType: String,
    range: String
  }],
  specialAbilities: [{
    name: String,
    description: String
  }],
  legendaryActions: [{
    name: String,
    description: String
  }],
  mythicActions: [{
    name: String,
    description: String
  }],
  traits: [{
    name: String,
    description: String
  }],
  actions: [{
    name: String,
    description: String
  }],
  reactions: [{
    name: String,
    description: String
  }],
  legendaryResistances: {
    uses: Number,
    description: String
  }
});

const Mob = mongoose.model('Mob', mobSchema);

module.exports = Mob;
