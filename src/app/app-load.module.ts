import { NgModule, APP_INITIALIZER } from '@angular/core';
import { ConfigService } from './services/config/config.service';
import { HttpClientModule } from '@angular/common/http';

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
