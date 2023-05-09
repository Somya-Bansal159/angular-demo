import { RecipesService } from './../recipes.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  id: number;
  subscription: Subscription;

  constructor(private recipeService: RecipesService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.recipe = this.recipeService.getRecipe(+params['id']);
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  transferIng() {
    this.recipeService.addIngredientsToShoppingList(
      this.recipe.ingredients
    );
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(["/recipes"]);
  }
}
