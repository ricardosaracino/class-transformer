import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {locale} from '../environments/locale';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {FakeApiService} from './fake-api';
import {AppService} from './app.service';

console.log('environments/locale: ', locale);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(FakeApiService),
  ],
  providers: [
    AppService,
    // this is not needed for ng build --prod
    [{provide: LOCALE_ID, useValue: locale}],
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
