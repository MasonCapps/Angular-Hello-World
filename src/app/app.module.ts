import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuPartComponent } from './menu-part/menu-part.component';
import { NavigationPartComponent } from './navigation-part/navigation-part.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { BasicComponent } from './basic/basic.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuPartComponent,
    NavigationPartComponent,
    CustomerDashboardComponent,
    BasicComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
