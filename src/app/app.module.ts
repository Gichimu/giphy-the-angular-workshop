import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiphyComponent } from './giphy/giphy.component';
import { GiphyNavbarComponent } from './giphy-navbar/giphy-navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GiphySearchFormComponent } from './giphy-search-form/giphy-search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GiphyComponent,
    GiphyNavbarComponent,
    NotFoundComponent,
    GiphySearchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
