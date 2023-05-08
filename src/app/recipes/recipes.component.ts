import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {
  currentRecipeDetails: Recipe;

  constructor(private recipeService: RecipesService) {}

  ngOnInit(): void {
    // this.recipeService.recipeUpdated.subscribe(
    //   (recipe: Recipe) => {
    //     this.currentRecipeDetails = recipe;
    //   }
    // )
  }

}
