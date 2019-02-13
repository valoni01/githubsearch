import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchViewComponent } from './pages/gitHubViews/search-view/search-view.component';
import { UserViewComponent } from './pages/gitHubViews/user-view/user-view.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyOwnCustomMaterialModule } from './materialModule';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Resource } from './core/resource';
import { GithugService } from './pages/gitHubViews/services/githug.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SearchViewComponent,
    UserViewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[Resource,GithugService],

  bootstrap: [AppComponent]
})
export class AppModule { }
