import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CenterComponent } from './center/center.component';
import { FormsModule } from '@angular/forms';
import { AddAngDateComponent } from './add-ang-date/add-ang-date.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CenterComponent,
    AddAngDateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSidenavModule,
    BrowserAnimationsModule,ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
