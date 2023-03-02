import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './menu/menu.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { UserComponent } from './user/user.component';
import { RestaurantlistService } from './restaurantlist.service';
import { MenulistService } from './menulist.service';
import {HttpClientModule} from '@angular/common/http';
import { UsercartlistService } from './usercartlist.service';
import { HomeComponent } from './home/home.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    MenuComponent,
    RestaurantComponent,
    UserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [RestaurantlistService,MenulistService,UsercartlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
