import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class MyOwnServiceService {
  counter:string = "Instanctiated";
  constructor() { 
    console.log(this.counter)

  }

  greetings(){
    console.log("Hello World!!");
  }

}
