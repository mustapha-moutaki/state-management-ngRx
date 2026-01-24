import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';

import { routes } from './app.routes';
import { counterReducer } from './state/counter.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    /**
     * Register NgRx Store globally
     * 'counter' is the state key
     */
    provideStore({
      counter: counterReducer
    })
  ]
};
