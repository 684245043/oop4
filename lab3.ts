class BankAccount{
    ownerName: string;
    balance: number;

    constructor(ownerName: string,balance:number){
        this.ownerName = ownerName;
        this.balance = balance;
    }
    displayBalance():void{
        console.log(`Account: ${this.ownerName}, Balance: ${this.balance}`);
    }
    deposit(amount: number):void{
        this.balance+= amount;
    }
    withdraw(amount: number):void{
        if (amount > this.balance){
            console.log("Insufficient funds");
        }else{
            this.balance -= amount;
        }
    }
    }
const BankAccount1 = new BankAccount("Boss",15000);
BankAccount1.displayBalance();
BankAccount1.deposit(200);
BankAccount1.displayBalance();
BankAccount1.withdraw(1000);
BankAccount1.displayBalance();
BankAccount1.withdraw(20000);