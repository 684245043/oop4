class Hero{
    name: string;
    hp: number;
    attackPower: number;

    constructor(name:string,hp:number,atk:number){
        this.name = name;
        this.hp = hp;
        this.attackPower = atk;
    }
    attack(target: Hero): void{
        target.hp -= this.attackPower;
        console.log(`${this.name} attacks ${target.name} for ${this.attackPower} damage!`);

        if (target.hp <=0){
            console.log(`${target.name} has fainted!`);
        }
    }
}
const Hero1 = new Hero("Boss",100,45);
const Hero2 = new Hero("Bee",70,18);
Hero1.attack(Hero2);
Hero2.attack(Hero1);
Hero1.attack(Hero2);