class Rectangle{
    Area: number;

    constructor(area: number){
        this.Area = area;
    }
    getArea():void{
        console.log(this.Area);
    }
    getPerimeter():void{
        console.log(`${this.Area} x 10 = `,this.Area*10);
    }
}
const Rectangle1 = new Rectangle(5);
Rectangle1.getPerimeter();