import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideStore, StoreModule } from '@ngrx/store';

import { servidorReducer } from './store/reducers/servidor.reducer';
import { ServidorEffects } from './store/efects/servidor.effects';
import { EffectsModule } from '@ngrx/effects';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({servidores: servidorReducer}),
    EffectsModule.forRoot([ServidorEffects])
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(withInterceptorsFromDi()),
    provideStore({ servidores: servidorReducer }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
