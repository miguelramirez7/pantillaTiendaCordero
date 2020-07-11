

export class Order {

    id: string;
    address: string;
    amount: number;
    courier: string;
    discount:number;

    constructor(id=null,address=null,amount=null,courier=null,discount=null){
        this.id = id;
        this.address = address;
        this.amount=amount;
        this.courier=courier;
        this.discount=discount;
    }

    imprime(){
    console.log(this.id);
    }
}
