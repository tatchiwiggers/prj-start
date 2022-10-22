import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Chocolate', 5),
    new Ingredient('Vanilla', 15),
    new Ingredient('Cookies', 10),
    new Ingredient('Chocolate Chips', 5),
    new Ingredient('Vanilla', 2)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
