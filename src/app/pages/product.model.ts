export class Product
{
    Id : number;
    Description : string;
    Category : string;
    Price : number;

    constructor(id:number,desc:string,cat:string,price:number){
        this.Id = id;
        this.Description = desc;
        this.Category = cat;
        this.Price = price;
    }
}