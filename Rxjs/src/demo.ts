import * as Rx from "rxjs/Observable";
import { AsyncSubject, merge } from 'rxjs';




//Subject
//BehaviorSubject
//ReplaySubject
//asyncSubject


//InstanceOperator
//Pipe
//map
//of
//combine
//combileall
//merge


const subject = new AsyncSubject();


//FIrst Subscriber 1
subject.subscribe({
    next: (v) => console.log("observerA: " + v)
});


subject.next(1);


//Second Suscriber 2
subject.subscribe({
    next: (v) => console.log("observerB: " + v)
});

subject.next(2);
subject.complete();

























//Observable

//3 Callbackcks
//next
//error
//complete

//Rxjs Operator
//1. Static Rxjs (Create A observebale function)
//2. Instance Rxjs (90%) (Pipe, Map)



//Observer



//Subscriber



