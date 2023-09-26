class Ninja {
    constructor(name, health = 90, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(this.name)
    }
    
    showStats() {
        console.log(this.name)
        console.log(this.strength)
        console.log(this.speed)
        console.log(this.health)
    }

    drinkSake() {
        this.health += 10
    }
}

class Sensei extends Ninja {
    constructor(name, strength, speed, health, wisdom = 10) {
        super(name, strength, speed, health)
        this.wisdom = wisdom
    }

    speakWisdom() {
        super.drinkSake();
        console.log('Were it so easy...')
    }
}

const ninja = new Sensei('benji')

ninja.speakWisdom()
console.log(ninja)