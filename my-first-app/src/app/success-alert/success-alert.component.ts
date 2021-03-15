import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-success-alert',
  // templateUrl: './success-alert.component.html',
  template: `<h4>This is a success alert!</h4>`,
  // styleUrls: ['./success-alert.component.css'],
  styles: [`
    h4 {
      color: greenyellow;
    }
  `]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
