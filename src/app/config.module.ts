import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { BASE_API_URL_TOKEN } from './injectors';
import { ConfigService } from './services';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class ConfigModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ConfigModule,
      providers: [
        {
          provide: BASE_API_URL_TOKEN,
          useFactory: (config: ConfigService) => {
            return config.baseUrl;
          },
          deps: [ConfigService],
        },
      ],
    };
  }
}
