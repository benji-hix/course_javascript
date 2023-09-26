class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, resilience) {
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }

    attack = (target) => {
        if (target instanceof Unit) {
        target.resilience -= this.power;
        }
        else {
            throw new Error('target must be a unit')
        }
        this.stats();
        target.stats()
    }

    stats = () => {
        const unitStats = `${this.name} [\n` +
        `  Cost: ${this.cost}\n` +
        `  Power: ${this.power}\n` +
        `  Resilience: ${this.resilience}\n]`
        console.log(unitStats)
    }
}

class Effect extends Card {
    constructor(name, cost, stat, magnitude = 0, text = 'text') {
        super(name, cost);
        this.stat = stat;
        this.magnitude = magnitude;
        this.text = text;
    }

    play = (unit) => {
        if (unit instanceof Unit) {
            switch (this.stat) {
                case ('resilience'): {
                        unit.resilience += this.magnitude;
                        break;
                    }
                    case ('power'): {
                        unit.power += this.magnitude;
                    }
                }
                }
        else {
            throw new Error('effect must be played on a unit')
        }
        unit.stats();
        return unit;
    }
}


const redBeltNinja = new Unit('Red Belt Ninja', 3, 3, 4)
const blackBeltNina = new Unit('Black Belt Ninja', 4, 5, 4)

const hardAlgorithm = new Effect('Hard Algorithm', 2, 'resilience', 3, "increase target's resilience by 3")
const unhandledPromiseRejection = new Effect('Unhandled Promises Rejection', 1, 'resilience', -2, "reduce target's resilience by 2")
const pairProgramming = new Effect('Pair Programming', 3, 'power', 2, "increase target's power by 2")


hardAlgorithm.play(redBeltNinja)
unhandledPromiseRejection.play(redBeltNinja)
pairProgramming.play(redBeltNinja)
redBeltNinja.attack(blackBeltNina)