import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


import { ContentComponent } from './content/content.component';
import { LayoutComponent } from './layout/layout.component'
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
