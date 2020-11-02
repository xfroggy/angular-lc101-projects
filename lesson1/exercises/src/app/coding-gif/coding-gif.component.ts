import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'coding-gif',
  templateUrl: './coding-gif.component.html',
  styleUrls: ['./coding-gif.component.css']
})
export class CodingGifComponent implements OnInit {
  gif1 = 'https://miro.medium.com/max/1360/1*IRGHmiGsa16stedQvIaZfw.gif';
  constructor() { }

  ngOnInit() {
  }

}
