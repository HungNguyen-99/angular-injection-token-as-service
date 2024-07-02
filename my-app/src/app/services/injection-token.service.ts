import { InjectionToken, ValueProvider } from "@angular/core";
export const DATA = new InjectionToken<string>('data123', {
    factory: () => 'hello',
});

export type Environment = 'local' | 'dev' | 'int' | 'prod';

export interface AppConfig {
  version: string;
  apiUrl: string;
  environment: Environment;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export const getAppConfigProvider = (value: AppConfig): ValueProvider => ({
  provide: APP_CONFIG,
  useValue: value,
});