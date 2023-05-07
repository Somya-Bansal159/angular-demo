import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Output() tab = new EventEmitter<string>();

    displayRecipes() {
        this.tab.emit("recipes");
    }

    displayShoppingList() {
        this.tab.emit("shopping-list");
    }
}