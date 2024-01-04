import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // Compiler is not included in AOT-compiled bundle.
    // Must explicitly provide compiler to be able to compile templates at runtime.

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
