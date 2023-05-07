import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  currentRecipeDetails: Recipe;

  updateCurrentRecipeDetails(recipeDetails: Recipe) {
    this.currentRecipeDetails = recipeDetails;
  }
}
