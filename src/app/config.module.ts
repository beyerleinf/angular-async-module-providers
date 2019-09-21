import { NgModule } from '@angular/core';
import { BASE_API_URL_TOKEN } from './injectors';
import { ConfigService } from './services';

@NgModule({
  providers: [
    {
      provide: BASE_API_URL_TOKEN,
      useFactory: (config: ConfigService) => {
        return config.baseUrl;
      },
      deps: [ConfigService],
    },
  ],
})
export class ConfigModule {}
