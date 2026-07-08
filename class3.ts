class House{
    constructor(public room:number,public bathroom:number,public area:number,public price:number){
    }

    show():void{
        console.log(`House - ${this.room} bedrooms, ${this.bathroom} bathroom, ${this.area} sqm, ${this.price} Baht`);
    }
    chgPrice(newPrice: number):void{
        this.price=newPrice;
        console.log(": Price changed to: ",this.price);
}
}
const house1 = new House(4,3,150,1200000);
house1.show();
house1.chgPrice(1000000);