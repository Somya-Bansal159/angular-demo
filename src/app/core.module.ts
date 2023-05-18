import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInterceptorService } from "./auth/auth-interceptor.service";
import { RecipesService } from "./recipes/recipes.service";
import { ShoppingService } from "./shopping-list/shopping.service";

@NgModule({
    providers: [
        ShoppingService, 
        RecipesService, 
        {
            provide: HTTP_INTERCEPTORS, 
            useClass: AuthInterceptorService, 
            multi: true
        }
    ]
})
export class CoreModule {

}