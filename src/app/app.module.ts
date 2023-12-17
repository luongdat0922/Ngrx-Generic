import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { HttpClientModule } from '@angular/common/http';
import { UserEffects } from './user/user.effects';
import { paginationReducer } from './pagination/pagination.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { baseReducer } from './base/base.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forFeature(paginationReducer),
    StoreModule.forFeature(baseReducer),
    EffectsModule.forRoot([UserEffects]),
    HttpClientModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
