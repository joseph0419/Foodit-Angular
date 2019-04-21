import { Component, OnInit } from '@angular/core';
import { Food } from '../food';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {

  food: Food = {
    id:1,
    Name: "Chicken",
    Description: "Delicious Chicken",
    Price: 10,
    Quantity: 1,
    image: null,
    Seller: "David",
    PlaceToMeet: "Union"
  }
  constructor() { }

  ngOnInit() {
  }

}
