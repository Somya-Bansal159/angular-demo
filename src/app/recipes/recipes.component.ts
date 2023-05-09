import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  currentRecipeDetails: Recipe;

  ngOnInit(): void {
    // this.recipeService.recipeUpdated.subscribe(
    //   (recipe: Recipe) => {
    //     this.currentRecipeDetails = recipe;
    //   }
    // )
  }

}
