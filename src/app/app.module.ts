import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HelloComponent } from './pages/hello.component';
import { ProductListComponent } from './pages/product-list.component'
import { MyCardSanitizePipe } from './pages/mycardsanitize.pipe'
import { FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent, HelloComponent, ProductListComponent, MyCardSanitizePipe],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
