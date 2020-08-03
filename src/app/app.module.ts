import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import ptBr from '@angular/common/locales/pt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptorService } from './shared/token-interceptor.service';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

registerLocaleData(ptBr)

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }, {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }, { provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
