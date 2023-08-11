import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddressTransform } from './pipes/address.transformer.pipe';
import { ShortenPipe } from './pipes/shorten.pipe';
import { TransformPipe } from './pipes/transform.pipe';
import { PositionFilterPipe } from './pipes/position-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddressTransform,
    ShortenPipe,
    TransformPipe,
    PositionFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
