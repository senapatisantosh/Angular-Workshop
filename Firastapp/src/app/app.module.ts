import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
