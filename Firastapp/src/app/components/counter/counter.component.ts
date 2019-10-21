import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, Self, SkipSelf, InjectionToken, Inject } from '@angular/core';
import { MyOwnServiceService } from 'src/app/DI/my-own-service.service';

function createInstatnce() :MyOwnServiceService{
  return new MyOwnServiceService();
}

export const MY_OWNSERVICE_TOKEN = new InjectionToken<MyOwnServiceService>("MY_OWNSERVICE_TOKEN");

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  providers:[{
    provide : MY_OWNSERVICE_TOKEN,
    useFactory:createInstatnce
  }]
})
export class CounterComponent implements OnInit {
  counter1 = 0;
  constructor(
    private ref: ChangeDetectorRef,
    @Inject(MY_OWNSERVICE_TOKEN) private myOwnSer:MyOwnServiceService) { 

      setInterval(() => {
        this.counter1++;
        // require view to be updated
        this.ref.detectChanges();
      }, 1000);
    }

  ngOnInit() {
  }

  tagpClicked(data){
    console.log("Parent");
  }
  tagclicked(data){
    console.log("child");
  }
}
