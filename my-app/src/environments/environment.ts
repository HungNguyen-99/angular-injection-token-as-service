import { AppConfig, Environment } from "../app/services/injection-token.service";

export const environment: AppConfig = {
    version: '1.0.0',
    apiUrl: 'http://localhost:4200/injection-token',
    environment: 'local' as Environment
}