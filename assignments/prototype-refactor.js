/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/


// === GameObject ===

// function GameObject(attributes){
//   this.createdAt = attributes.createdAt; 
//   this.name = attributes.name; 
//   this.dimensions = attributes.dimensions; 
// }
// GameObject.prototype.destroy = function() {
//   return `${this.name} was removed from the game.`; 
// }

class GameObject {
  constructor(attributes) {
    this.createdAt = attributes.createdAt; 
    this.name = attributes.name; 
    this.dimensions = attributes.dimensions;
  }
  destroy() {
    return `${this.name} was removed from the game.`; 
  }
}

// === CharacterStats ===

// function CharacterStats(charAttributes) {
//   GameObject.call(this, charAttributes); 
//   this.healthPoints = charAttributes.healthPoints; 
// }

// CharacterStats.prototype = Object.create(GameObject.prototype); 

// CharacterStats.prototype.takeDamage = function() {
//   return `${this.name} took damage.`
// }

class CharacterStats extends GameObject {
  constructor(charAttributes) {
    super(charAttributes); 
    this.healthPoints = charAttributes.healthPoints; 
  }
  takeDamage() {
    return `${this.name} took damage.`
  }
}

// === Humanoid (Having an appearance or character resembling that of a human.) ===

// function Humanoid(humanAttributes) {
//   CharacterStats.call(this, humanAttributes); 
//   this.team = humanAttributes.team; 
//   this.weapons = humanAttributes.weapons; 
//   this.language = humanAttributes.language; 
// }

// Humanoid.prototype = Object.create(CharacterStats.prototype); 

// Humanoid.prototype.greet = function() {
//   return `${this.name} offers a greeting in ${this.language}.`
// }

class Humanoid extends CharacterStats {
  constructor(humanAttributes) {
    super(humanAttributes); 
    this.team = humanAttributes.team; 
    this.weapons = humanAttributes.weapons; 
    this.language = humanAttributes.language; 
    this.V_newhealthPoints = humanAttributes.healthPoints - 5; 
    this.H_newhealthPoints = this.V_newhealthPoints + 1; 
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`
  }
}

// ===  Stretch task: === 

// function Villain(villainAttributes) {
//   Humanoid.call(this, villainAttributes); 
//   this.deception = villainAttributes.deception; 
//   this.poison = villainAttributes.poison; 
// }

// Villain.prototype = Object.create(Humanoid.prototype); 

// Villain.prototype.stabBack = function() {
//   return `Plot twist! ${this.name} has just deceived you!`
// }

// function Hero (heroAttributes) {
//   Humanoid.call(this, heroAttributes);
//   this.truth = heroAttributes.truth;
//   this.strength = heroAttributes.strength;
// }

// Hero.prototype = Object.create(Humanoid.prototype);

// Hero.prototype.attack = function() {
//   return `${this.name} the hero will win in the end.`
// }

class Villain extends Humanoid {
  constructor(villainAttributes) {
    super(villainAttributes); 
    this.deception = villainAttributes.deception; 
    this.poison = villainAttributes.poison; 
    // this.V_newhealthPoints = Son.healthPoints - 5; 
  }
  stabBack() {
    // let newhealthPoints = Son.healthPoints - 5; 
    console.log(`Plot twist! ${this.name} The Father has just deceived The Hero (aka The Son)!`) 
    console.log(`${Son.name} initial health points:  ${Son.healthPoints} -- new health points total: ${Son.V_newhealthPoints}.`);
  }
}

class Hero extends Humanoid {
  constructor(heroAttributes) {
    super(heroAttributes); 
    this.truth = heroAttributes.truth;
    this.strength = heroAttributes.strength;
  }
  attack() {
    // let newhealthPoints = this.healthPoints + 1; 
    console.log(`${this.name} is the hero they win in the end.`);
    console.log(`${this.name} initial health points:  ${Son.V_newhealthPoints} -- new health points total: ${Son.H_newhealthPoints}.`);
  }
}

// Test you work by un-commenting these 3 objects and the list of console logs below:


const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',

});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
  deception: 'You have just been deceived.',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

// Stretch task: 

const Father = new Villain ({
  name: 'Sir Mustachio',
  deception: 'You have just been deceived.',
  poison: -1, 
  truth: 'The truth will guide you', 
  strength: 20,
});

const Son = new Hero ({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
  deception: 'You have just been deceived.',
  poison: -1, 
  truth: 'The truth will guide you', 
  strength: 20,
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

console.log(Father.stabBack()); // Health Points - 5
console.log(Son.attack()); // Health Points + 1
// console.log(Father.stabBack()); // Health Points - 5