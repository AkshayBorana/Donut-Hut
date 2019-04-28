import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { StoreDetailModule } from "./store-detail/store-detail.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    StoreDetailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
