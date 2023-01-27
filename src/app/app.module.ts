import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataServiceComponent } from './data-service/data-service.component';
import { HttpClientModule } from '@angular/common/http';
import { FlightsPipe } from './flights.pipe';
import { FormsModule } from '@angular/forms';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { GenericPipe } from './generic.pipe';
import { FooterComponent } from './footer/footer.component';
const appRoutes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataServiceComponent,
    FlightsPipe,
    NavigationBarComponent,
    GenericPipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [DataServiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
