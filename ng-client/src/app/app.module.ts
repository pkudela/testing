import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {MaterializeModule} from 'ng2-materialize'; // _app

import { AppComponent } from './app.component';
import { FlexComponent } from './flex/flex.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    FlexComponent,
    NavbarComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule.forRoot(),
    RouterModule.forRoot([
      {path: '', redirectTo: 'flex', pathMatch: 'full'},
      {path: 'flex', component: FlexComponent},
      {path: 'table', component: TableComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
