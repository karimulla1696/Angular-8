import { Component, OnInit } from '@angular/core';
import {Ingredients} from "../shared/ingredients.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  // @ts-ignore
  ingredients: Ingredients = [
    new Ingredients('Apples', 5),
    new Ingredients('Tomatato', 5)
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
  }


}
