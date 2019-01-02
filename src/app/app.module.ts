import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { AppComponent } from './app.component';
import { LazyloadingModule } from './lazy-loading/lazy-loading'
import { LayoutModule } from '@angular/cdk/layout';
import { HttpModule } from '@angular/http';

import { NavBarComponent } from './navBar/navBar';

import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxSoapModule } from 'ngx-soap';
import { NavBarModule } from './navBar/navBar.module';
import { SampleComponent } from './components/sample/sample.component';

@NgModule({
  declarations: [
    NavBarComponent,
    AppComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    LazyloadingModule,
    LayoutModule,
    FlexLayoutModule,
    HttpModule,
    NgxSoapModule
    //NavBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
