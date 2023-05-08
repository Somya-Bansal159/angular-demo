import { EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';

export class ShoppingService {
    updateIngredients = new EventEmitter<void>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    addIngredients(ingredients: {name: string, amount: number}[]) {
        for(const ingredient of ingredients) {
            this.ingredients.push(
                new Ingredient(ingredient.name, ingredient.amount)
            );
        }
        this.updateIngredients.emit();
    }

    getIngredients() {
        return this.ingredients.slice();
    }
}