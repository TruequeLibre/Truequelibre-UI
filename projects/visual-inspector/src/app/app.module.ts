import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TruequelibreUiModule} from 'truequelibre-ui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TruequelibreUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
