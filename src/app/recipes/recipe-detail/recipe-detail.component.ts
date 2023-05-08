import { RecipesService } from './../recipes.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(private recipeService: RecipesService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.recipe = this.recipeService.getRecipe(+params['id']);
      }
    )
  }

  transferIng() {
    this.recipeService.addIngredientsToShoppingList(
      this.recipe.ingredients
    );
  }
}
