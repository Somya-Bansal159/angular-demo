import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() updateIngredients = new EventEmitter<Ingredient>();

  addIngredient() {
    this.updateIngredients.emit(
      new Ingredient(
        this.nameInput.nativeElement.value,
        this.amountInput.nativeElement.value
      )
    )
  }
}
