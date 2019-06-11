import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BlueBarComponent } from './components/blue-bar/blue-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import { WhiteBoxComponent } from './components/white-box/white-box.component';
import {MatCheckboxModule} from '@angular/material';
import { WhiteBoxListComponent } from './components/white-box-list/white-box-list.component';
import { WhiteBoxDetailsComponent } from './components/white-box-details/white-box-details.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import { UserSideNavComponent } from './components/user-side-nav/user-side-nav.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserAddressComponent } from './components/user-address/user-address.component';
import { UserContactComponent } from './components/user-contact/user-contact.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlueBarComponent,
    WhiteBoxComponent,
    WhiteBoxListComponent,
    WhiteBoxDetailsComponent,
    UserSideNavComponent,
    UserInfoComponent,
    UserAddressComponent,
    UserContactComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatTabsModule,
    MatRadioModule,
    MatSidenavModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
