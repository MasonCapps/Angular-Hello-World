import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  template: '<h1 id="header">{{data}}</h1>',
  styles: ['#header{ background-color: cornflowerblue;}']
})
export class BasicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data = "Test Data";

}
