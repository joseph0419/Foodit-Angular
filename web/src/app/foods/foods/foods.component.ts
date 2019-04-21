import { FoodsService } from './../foods.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {
    foodlist: Food[];
  // food: Food = {
  //   id:1,
  //   Name: "Chicken",
  //   Description: "Delicious Chicken",
  //   Price: 10,
  //   Quantity: 1,
  //   image: null,
  //   Seller: "David",
  //   PlaceToMeet: "Union"
  // }
 constructor(private foodService: FoodsService) { }

  ngOnInit() {
    this.getFood();
    console.log("Here")
    console.log(this.foodlist)
  }
  getFood(): void {
    this.foodService.getFood()
    .subscribe(foodlist => this.foodlist = foodlist);
  }

}
