import {Component} from '@angular/core'
import { Product } from './product.model';

@Component({
    selector: "productList",
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product-list.component.css"]

})
export class ProductListComponent
{
    products: Product[] = new Array<Product>();

    hasDisplay:boolean;

    p_color:string = "green";
    p_size:number = 30;

    p_date:Date = new Date();

    constructor(){
        console.log("Product List constructor");
        let x = 123;


        this.hasDisplay = false;
        //this.products = [{Id : 1, Description: 'laptop', Category:'electronics', Price:23.00}];

        this.products = [new Product(1, 'laptop', 'electronics', 543132),
                        new Product(2, 'iphone', 'electronics', 123244),
                        new Product(3, 'keyboard', 'electronics', 34444) ,
                        new Product(4, 'Mouse', 'electronics', 8245456)  ];

    }

    isNoDataDisplay()
    {
        if(this.products.length > 0)
            return false;
        else
            return true;
    }
}
