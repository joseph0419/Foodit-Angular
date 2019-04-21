import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FoodCollectionComponent } from './food-collection/food-collection.component';
import { AddFoodComponent } from './add-food/add-food.component';
import { FoodsComponent } from './foods/foods/foods.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FoodCollectionComponent,
    AddFoodComponent,
    FoodsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
