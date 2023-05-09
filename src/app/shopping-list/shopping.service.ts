// import { EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingService {
    updateIngredients = new Subject<void>();
    startedEditing = new Subject<number>();
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
        this.updateIngredients.next();
    }

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.updateIngredients.next();
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.updateIngredients.next();
    }
}