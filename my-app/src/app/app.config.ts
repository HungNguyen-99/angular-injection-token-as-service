import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { getAppConfigProvider } from './services/injection-token.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    getAppConfigProvider(environment)
  ],
};
