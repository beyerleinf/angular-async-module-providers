import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { ConfigService } from './services/config/config.service';

function appLoadFactory(config: ConfigService) {
  return () => config.loadConfig().toPromise();
}

@NgModule({
  imports: [HttpClientModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appLoadFactory,
      deps: [ConfigService],
      multi: true,
    },
  ],
})
export class AppLoadModule {}
