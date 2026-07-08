class Car{
    brand: string;
    model: string;
    type: string;
    door: number;
    engine: number;

    constructor(b: string, m:string,t: string,d:number,e:number){
        this.brand = b;
        this.model = m;
        this.type = t;
        this.door = d;
        this.engine = e;

    }

    show():void{
        console.log(`Car Brand: ${this.brand}, Model: ${this.model}, Type: ${this.type}, Door: ${this.door}, Engine cc: ${this.engine}`);
    }
    chgEngine(newEngine: number):void{
        this.engine=newEngine;
        console.log(this.brand,this.model,": Engine changed to: ",this.engine);
    }
}
const Car1 = new Car("Toyota","Camry","Sedan",4,2000);
Car1.show();
const Car2 = new Car("Isuzu","MuX","Truck",5,2500);
Car2.show();
Car1.chgEngine(2500);
Car1.show();
Car2.chgEngine(3000);