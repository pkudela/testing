import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchService } from './shared';
import { HttpModule } from '@angular/http';

import {MaterializeModule} from 'ng2-materialize'; // _app

import { AppComponent } from './app.component';
import { FlexComponent } from './flex/flex.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { SearchComponent } from './search/search.component';
import { EditComponent } from './edit/edit.component';
import { TypescriptComponent } from './typescript/typescript.component';


@NgModule({
  declarations: [
    AppComponent,
    FlexComponent,
    NavbarComponent,
    TableComponent,
    SearchComponent,
    EditComponent,
    TypescriptComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule.forRoot(),
    RouterModule.forRoot([
      { path: 'flex', component: FlexComponent },
      { path: 'table', component: TableComponent },
      { path: 'search', component: SearchComponent },
      { path: 'typescript', component: TypescriptComponent },
      { path: 'edit/:id', component: EditComponent },
      { path: '', redirectTo: '/search', pathMatch: 'full' }
    ])
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
