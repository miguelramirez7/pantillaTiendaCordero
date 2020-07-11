import { OrderItems } from './order-items';

export class Order {

    id: string;
    address: string;
    courier: string;
    orderItems: OrderItems[]=
    [   {
        "idProduct":  "",
        "quantity":   null,
        "price":      null
        },
        {
            "idProduct":  "",
            "quantity":   null,
            "price":      null
        }
    ];
    

    constructor(id=null,address=null,courier=null){
        this.id = id;
        this.address = address;
        this.courier=courier;
    }

    imprime(){
    console.log(this.id);
    }
}
