import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';
import { HttpClientModule } from '@angular/common/http';
import { VisualizeComponent } from './visualize/visualize.component';
import { TbDemoComponent } from './tb-demo/tb-demo.component';
import {
  MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HomeComponent,
    DemoComponent,
    VisualizeComponent,
    TbDemoComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
   MatButtonModule,MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
