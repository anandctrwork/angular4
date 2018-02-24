import { Component } from "@angular/core";

@Component(
    {
        selector : 'hello',
        template : `<h4> Hello Anand Component </h4>
        {{message}}
        <br>
        Enter Name : <input type='text' [(ngModel)]="p_userName" />
        <br>
        userName : {{p_userName}}
        <br>
        <button (click)="setMessage(123)">Value</button>
        <br>
        <button (click)="clearMessage()">Clear</button>`
    }
)

export class HelloComponent {
    message: string = "First AngularJs Component";
    p_userName: string = "hello";

    getMessage(param: any)
    {
        return param + "" + this.p_userName;
    }

    setMessage(param:any)
    {
        this.message = this.message + " " + param;
        this.p_userName = this.p_userName + " " + param;
    }

    clearMessage()
    {
        this.message = "";
        this.p_userName = "";
    }

}