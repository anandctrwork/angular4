import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'cardsanitize'
})
export class MyCardSanitizePipe implements PipeTransform
{
    transform(card:number)
    {
        let x = "" + card;
        let i = 0;
        let len = x.length;
        let result = "";
        while(i < len - 4)
        {
            result += "*";
            i++;
        }
        while(i < x.length)
        {
            result += x.charAt(i++);
        }
        return result;
    }
}