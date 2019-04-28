import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  titleHome :string = "This is my first Home Page"

  constructor() { }

  ngOnInit() {
  }

}
