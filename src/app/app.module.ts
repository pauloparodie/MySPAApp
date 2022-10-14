import { DataTablesModule } from 'angular-datatables';

import { UsersDataService } from './services/usersData.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { EmptyUserDetailsComponent } from './components/empty-user-details/empty-user-details.component';
import { PessoasListComponent } from './components/pessoas-list/pessoas-list.component';
import { HttpClientModule } from '@angular/common/http'
import { BusinessManagerService } from './services/businessLayer/business-Manager.service';
import { ChangeCaseDirective } from './directives/change-case.directive';
import { AppendTextPipe } from './pipes/append-text.pipe';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ListComponent,
    UsersListComponent,
    UserDetailsComponent,
    EmptyUserDetailsComponent,
    PessoasListComponent,
    ChangeCaseDirective,
    AppendTextPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [UsersDataService, BusinessManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
