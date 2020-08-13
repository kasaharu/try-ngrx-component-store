import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlankComponent } from './features/blank/ui/blank/blank.component';
import { CounterComponent } from './features/counter/ui/counter/counter.component';

@NgModule({
  declarations: [AppComponent, CounterComponent, BlankComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
