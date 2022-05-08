import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevelopersModule} from './developers/developers.module';
@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    DevelopersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
