import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'clock',
  template: `{{currentTime}}`,
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit, OnDestroy {

  currentTime;

  constructor() { }

  ngOnInit(): void {
    console.log('Clock Component: NgOnInit called');
    const date = new Date();
    this.currentTime = `${date.getHours()}:${date.getMinutes()}`;
  }

  ngOnDestroy(): void {
    console.log('Clock Component: NgOnDestroy called');
  }

}
