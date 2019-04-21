import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddFoodComponent } from './add-food/add-food.component';
import { FoodCollectionComponent } from './food-collection/food-collection.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'add-food', component: AddFoodComponent},
  {path: 'food-collection', component: FoodCollectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
