import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
import { Payload } from './Payload'

export class Rocket {
    name: string;
    totalCapacity: number;
    cargoItems: Cargo [] = [];
    astronauts: Astronaut [] = [];

    constructor(name: string, totalCapacity: number) {
        this.name = name;
        this.totalCapacity = totalCapacity;
    };

    sumMass( items: Payload[]): number {
        let sum = 0
        for (let i = 0; i < items.length; i++) {
            sum += items[i].massKg;
        }
        return sum
    };

    currentMassKg(): number {
        let currentMass = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems)
        return currentMass 
    };

    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacity){
            return true
        } else {
            return false
        }
    };

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)){
            this.cargoItems.unshift(cargo);
            return true;
        } else {
            return false
        };
    };

    addAstronaut(astronaut: Astronaut): boolean {
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        };
    };


}