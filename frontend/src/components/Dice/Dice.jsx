import DiceBox from "@3d-dice/dice-box";

const Dice = new DiceBox("#dice-box", {
	id: "dice-canvas",
	assetPath: "/src/assets/",
	startingHeight: 8,
	throwForce: 6,
	spinForce: 5,
	lightIntensity: 0.9,
	themeColor: "#d2b48c",
	offscreen: false,
	// suspendSimulation: true,
	settleTimeout: 3000,
});

export default Dice;
