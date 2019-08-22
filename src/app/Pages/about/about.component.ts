import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const mySubject = new BehaviorSubject<number>(4);
    mySubject.next(1);

    const subscription1 = mySubject.subscribe(x => {
      console.log('From subscription 1:', x);
    });

    mySubject.next(2);

    const subscription2 = mySubject.subscribe(x => {
      console.log('From subscription 2:', x);
    });

    mySubject.next(3);

   // subscription1.unsubscribe();

    mySubject.next(4);
  }

}
