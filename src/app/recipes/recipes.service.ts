import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingService } from "../shopping-list/shopping.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipesService {
    recipesUpdated = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [
    //     new Recipe(
    //       "Garlic Bread",
    //       "Just take a bread and eat it with chopped garlic",
    //       "https://www.schaer.com/sites/default/files/styles/panoramic_fullwidth/public/2922_Garlic%20Bread%2016-9.webp?itok=pEP-O8m0",
    //       [
    //         new Ingredient('Bread', 2),
    //         new Ingredient('Garlic', 1),
    //         new Ingredient('Butter', 1)
    //       ]
    //     ),
    //     new Recipe(
    //       "Burger",
    //       "Sandwich a potato slice between two buns :)",
    //       "https://c.ndtvimg.com/2022-06/gp4k2jro_burgers_625x300_20_June_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350",
    //       [
    //         new Ingredient('Buns', 2),
    //         new Ingredient('Potato', 1),
    //         new Ingredient('Tomato', 1),
    //         new Ingredient('Cheese Slice', 1),
    //         new Ingredient('Onion', 1)
    //       ]
    //     )
    //   ];
    
    private recipes: Recipe[] = [];
    
    constructor(private shoppingService: ShoppingService) {}

    getRecipes() {
      return this.recipes.slice();
    }

    getRecipe(id: number) {
      return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.shoppingService.addIngredients(ingredients);
    }

    setRecipes(recipes: Recipe[]) {
      this.recipes = recipes;
      this.recipesUpdated.next(this.recipes.slice());
    }

    addRecipe(recipe: Recipe) {
      this.recipes.push(recipe);
      this.recipesUpdated.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
      this.recipes[index] = newRecipe;
      this.recipesUpdated.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
      this.recipes.splice(index, 1);
      this.recipesUpdated.next(this.recipes.slice());
    }
}