import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { LoadAnimateComponent } from './modules/animation/load-animate/load-animate.component';
import { HeaderComponent } from './modules/components/header/header.component';
import { HeaderBlackComponent } from './modules/components/header-black/header-black.component';




@NgModule({
  declarations: [
    AppComponent,
    LoadAnimateComponent,
    HeaderComponent,
    HeaderBlackComponent,
 
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    InputTextModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
