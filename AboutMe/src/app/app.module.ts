import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FirstComponent } from './home/first/first.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { AboutComponent } from './home/about/about.component';
import { IdoComponent } from './home/ido/ido.component';
import { KnowledgeComponent } from './home/knowledge/knowledge.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, FirstComponent, AboutComponent, IdoComponent, KnowledgeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
