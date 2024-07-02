import { AppConfig, Environment } from "../app/services/injection-token.service";

export const environment: AppConfig = {
    version: '1.0.0',
    apiUrl: 'https://api.yourdomain.com',
    environment: 'prod' as Environment,
};