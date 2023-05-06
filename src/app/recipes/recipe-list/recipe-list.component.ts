import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      "Garlic Bread",
      "Just take a bread and eat it with chopped garlic",
      "https://www.schaer.com/sites/default/files/styles/panoramic_fullwidth/public/2922_Garlic%20Bread%2016-9.webp?itok=pEP-O8m0"
    )
  ];
}
